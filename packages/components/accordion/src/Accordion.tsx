import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useId,
  useMemo,
  useRef,
  useEffect,
  type ReactNode,
} from 'react';
import './Accordion.css';

/* ============================================
   Types
   ============================================ */

export type AccordionVariant = 'light' | 'bordered' | 'splitted';
export type AccordionSelectionMode = 'single' | 'multiple';
export type AccordionRenderStrategy = 'default' | 'lazy';
export type AccordionHeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type AccordionIndicatorRender = (params: {
  isOpen: boolean;
  isDisabled: boolean;
  defaultIndicator: ReactNode;
}) => ReactNode;

export interface AccordionProps {
  /** Child AccordionItem components */
  children?: ReactNode;
  /** Visual style variant */
  variant?: AccordionVariant;
  /** Single: one item open at a time. Multiple: many items can be open */
  selectionMode?: AccordionSelectionMode;
  /** Keys of items expanded by default (uncontrolled) */
  defaultExpandedKeys?: (string | number)[];
  /** Keys of items that are expanded (controlled) */
  expandedKeys?: (string | number)[];
  /** Keys of items that are disabled */
  disabledKeys?: (string | number)[];
  /** When to render item content: default (all) or lazy (on expand) */
  renderStrategy?: AccordionRenderStrategy;
  /** Disable all accordion items */
  isDisabled?: boolean;
  /** Called when expansion state changes */
  onExpandedChange?: (keys: (string | number)[]) => void;
  /** Additional CSS classes */
  className?: string;
  /** Accessible label for the accordion region */
  ariaLabel?: string;
  /** Test ID for testing */
  testId?: string;
}

export interface AccordionItemProps {
  /** Unique identifier for this item (used for expansion state) */
  itemKey: string | number;
  /** Main heading text */
  title: ReactNode;
  /** Optional secondary text below title */
  subtitle?: ReactNode;
  /** Expandable body content */
  children: ReactNode;
  /** Custom content before title (e.g. avatar, icon) */
  startContent?: ReactNode;
  /** Custom expand/collapse indicator: ReactNode or function (isOpen, isDisabled, defaultIndicator) => ReactNode */
  indicator?: ReactNode | AccordionIndicatorRender;
  /** Disable this item */
  isDisabled?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Accessible label override */
  ariaLabel?: string;
  /** Semantic heading level for title */
  headingLevel?: AccordionHeadingLevel;
  /** Test ID for testing */
  testId?: string;
}

/* ============================================
   Context
   ============================================ */

interface AccordionContextValue {
  expandedKeys: Set<string | number>;
  renderedKeys: Set<string | number>;
  toggle: (key: string | number) => void;
  isExpanded: (key: string | number) => boolean;
  isDisabled: (key: string | number) => boolean;
  variant: AccordionVariant;
  selectionMode: AccordionSelectionMode;
  renderStrategy: AccordionRenderStrategy;
  accordionId: string;
  focusedKey: string | number | null;
  setFocusedKey: (key: string | number | null) => void;
  registerItem: (key: string | number) => void;
  itemKeys: (string | number)[];
}

const AccordionContext = createContext<AccordionContextValue | null>(null);

function useAccordionContext(): AccordionContextValue {
  const ctx = useContext(AccordionContext);
  if (!ctx) {
    throw new Error('AccordionItem must be used within Accordion');
  }
  return ctx;
}

/* ============================================
   Chevron Icon
   ============================================ */

const ChevronRightIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M9 18l6-6-6-6" />
  </svg>
);

/* ============================================
   Accordion
   ============================================ */

/**
 * Accordion component for expandable/collapsible content sections.
 * Supports single/multiple expansion, variants, keyboard navigation, and lazy rendering.
 */
export const Accordion = ({
  children,
  variant = 'light',
  selectionMode = 'single',
  defaultExpandedKeys = [],
  expandedKeys: controlledExpandedKeys,
  disabledKeys = [],
  renderStrategy = 'default',
  isDisabled = false,
  onExpandedChange,
  className = '',
  ariaLabel,
  testId,
}: AccordionProps) => {
  const accordionId = useId();
  const itemKeysRef = useRef<(string | number)[]>([]);
  const [itemKeys, setItemKeys] = useState<(string | number)[]>([]);

  const isControlled = controlledExpandedKeys !== undefined;

  const [internalExpandedKeys, setInternalExpandedKeys] = useState<Set<string | number>>(() => {
    const keys = defaultExpandedKeys;
    const set = new Set(keys);
    if (selectionMode === 'single' && keys.length > 1) {
      return new Set([keys[0]]);
    }
    return set;
  });

  const expandedKeys = isControlled
    ? new Set(controlledExpandedKeys)
    : internalExpandedKeys;

  const [focusedKey, setFocusedKey] = useState<string | number | null>(null);

  const [renderedKeys, setRenderedKeys] = useState<Set<string | number>>(() => {
    if (renderStrategy === 'lazy') {
      const keys = controlledExpandedKeys !== undefined ? (controlledExpandedKeys ?? []) : defaultExpandedKeys;
      const arr = selectionMode === 'single' && keys.length > 1 ? [keys[0]] : keys;
      return new Set(arr);
    }
    return new Set();
  });

  useEffect(() => {
    if (renderStrategy !== 'lazy') return;
    const keys = isControlled && controlledExpandedKeys ? controlledExpandedKeys : Array.from(internalExpandedKeys);
    setRenderedKeys((prev) => {
      const hasNew = keys.some((k) => !prev.has(k));
      if (!hasNew) return prev;
      const next = new Set(prev);
      keys.forEach((k) => next.add(k));
      return next;
    });
  }, [renderStrategy, isControlled, controlledExpandedKeys, internalExpandedKeys]);

  const registerItem = useCallback((key: string | number) => {
    itemKeysRef.current = Array.from(new Set([...itemKeysRef.current, key]));
    setItemKeys([...itemKeysRef.current]);
  }, []);

  const toggle = useCallback(
    (key: string | number) => {
      if (isDisabled) return;
      const disabledSet = new Set(disabledKeys);
      if (disabledSet.has(key)) return;

      const nextKeys = new Set(expandedKeys);
      if (nextKeys.has(key)) {
        nextKeys.delete(key);
      } else {
        if (selectionMode === 'single') {
          nextKeys.clear();
        }
        nextKeys.add(key);
      }

      if (!isControlled) {
        setInternalExpandedKeys(nextKeys);
      }
      onExpandedChange?.(Array.from(nextKeys));
    },
    [isDisabled, disabledKeys, expandedKeys, selectionMode, isControlled, onExpandedChange]
  );

  const isExpanded = useCallback(
    (key: string | number) => expandedKeys.has(key),
    [expandedKeys]
  );

  const isDisabledCheck = useCallback(
    (key: string | number) => isDisabled || disabledKeys.includes(key),
    [isDisabled, disabledKeys]
  );

  const contextValue: AccordionContextValue = useMemo(
    () => ({
      expandedKeys,
      renderedKeys,
      toggle,
      isExpanded,
      isDisabled: isDisabledCheck,
      variant,
      selectionMode,
      renderStrategy,
      accordionId,
      focusedKey,
      setFocusedKey,
      registerItem,
      itemKeys,
    }),
    [
      expandedKeys,
      renderedKeys,
      toggle,
      isExpanded,
      isDisabledCheck,
      variant,
      selectionMode,
      renderStrategy,
      accordionId,
      focusedKey,
      registerItem,
      itemKeys,
    ]
  );

  const buildClassName = () => {
    const classes = [
      'aceui-accordion',
      `aceui-accordion--${variant}`,
      `aceui-accordion--${selectionMode}`,
      `aceui-accordion--render-${renderStrategy}`,
    ];
    if (isDisabled) classes.push('aceui-accordion--disabled');
    if (className) classes.push(className);
    return classes.filter(Boolean).join(' ');
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <div
        className={buildClassName()}
        role="region"
        aria-label={ariaLabel}
        data-testid={testId}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

Accordion.displayName = 'Accordion';

/* ============================================
   AccordionItem
   ============================================ */

export const AccordionItem = ({
  itemKey,
  title,
  subtitle,
  children,
  startContent,
  indicator,
  isDisabled: itemDisabled = false,
  className = '',
  ariaLabel,
  headingLevel = 'h3',
  testId,
}: AccordionItemProps) => {
  const ctx = useAccordionContext();
  const {
    toggle,
    isExpanded,
    isDisabled,
    accordionId,
    focusedKey,
    setFocusedKey,
    registerItem,
    itemKeys,
    renderStrategy,
    renderedKeys,
  } = ctx;

  const expanded = isExpanded(itemKey);
  const disabled = isDisabled(itemKey) || itemDisabled;

  const headerId = `${accordionId}-header-${itemKey}`;
  const contentId = `${accordionId}-content-${itemKey}`;

  useEffect(() => {
    registerItem(itemKey);
  }, [itemKey, registerItem]);

  const index = itemKeys.indexOf(itemKey);
  const isFocused = focusedKey === itemKey;
  const tabIndex = isFocused || (focusedKey === null && index === 0) ? 0 : -1;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        toggle(itemKey);
        break;
      case 'ArrowDown':
        e.preventDefault();
        if (index < itemKeys.length - 1) {
          setFocusedKey(itemKeys[index + 1]);
          document.getElementById(`${accordionId}-header-${itemKeys[index + 1]}`)?.focus();
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (index > 0) {
          setFocusedKey(itemKeys[index - 1]);
          document.getElementById(`${accordionId}-header-${itemKeys[index - 1]}`)?.focus();
        }
        break;
      case 'Home':
        e.preventDefault();
        if (itemKeys.length > 0) {
          setFocusedKey(itemKeys[0]);
          document.getElementById(`${accordionId}-header-${itemKeys[0]}`)?.focus();
        }
        break;
      case 'End':
        e.preventDefault();
        if (itemKeys.length > 0) {
          const lastKey = itemKeys[itemKeys.length - 1];
          setFocusedKey(lastKey);
          document.getElementById(`${accordionId}-header-${lastKey}`)?.focus();
        }
        break;
    }
  };

  const handleClick = () => {
    if (!disabled) toggle(itemKey);
  };

  const handleFocus = () => setFocusedKey(itemKey);
  const handleBlur = () => setFocusedKey(null);

  const shouldRenderContent =
    renderStrategy === 'default' || (renderStrategy === 'lazy' && renderedKeys.has(itemKey));

  const HeadingTag = headingLevel;

  const defaultIndicator = <ChevronRightIcon />;
  const resolvedIndicator =
    typeof indicator === 'function'
      ? indicator({ isOpen: expanded, isDisabled: disabled, defaultIndicator })
      : (indicator ?? defaultIndicator);
  const hasCustomIndicator = indicator !== undefined && indicator !== null;

  const itemClasses = [
    'aceui-accordion__item',
    expanded && 'aceui-accordion__item--expanded',
    disabled && 'aceui-accordion__item--disabled',
    isFocused && 'aceui-accordion__item--focused',
    className,
  ].filter(Boolean);

  return (
    <div className={itemClasses.join(' ')} data-testid={testId}>
      <div
        id={headerId}
        className="aceui-accordion__header"
        role="button"
        tabIndex={tabIndex}
        aria-expanded={expanded}
        aria-controls={contentId}
        aria-disabled={disabled ? 'true' : undefined}
        aria-label={ariaLabel}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        {startContent && (
          <div className="aceui-accordion__start-content">{startContent}</div>
        )}
        <div className="aceui-accordion__header-text">
          <HeadingTag className="aceui-accordion__title">{title}</HeadingTag>
          {subtitle && (
            <span className="aceui-accordion__subtitle">{subtitle}</span>
          )}
        </div>
        <div
          className={`aceui-accordion__indicator ${hasCustomIndicator ? 'aceui-accordion__indicator--custom' : ''} ${expanded ? 'aceui-accordion__indicator--rotated' : ''}`}
          aria-hidden
        >
          {resolvedIndicator}
        </div>
      </div>

      {shouldRenderContent && (
        <div
          id={contentId}
          className={`aceui-accordion__content aceui-accordion__content--animated ${expanded ? 'aceui-accordion__content--expanded' : 'aceui-accordion__content--collapsed'}`}
          role="region"
          aria-labelledby={headerId}
        >
          <div className="aceui-accordion__content-inner">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

AccordionItem.displayName = 'AccordionItem';

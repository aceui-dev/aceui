import React from 'react';
import './Button.css';

/**
 * ButtonGroup component props interface
 */
export interface ButtonGroupProps {
  /** Button components (or compatible elements) to group */
  children?: React.ReactNode;

  /** When true, disables all buttons inside the group */
  isDisabled?: boolean;

  /** Layout direction of the group */
  orientation?: 'horizontal' | 'vertical';

  /** Accessible label for the group */
  ariaLabel?: string;

  /** Additional CSS class names */
  className?: string;

  /** Test ID for testing */
  testId?: string;
}

const BUTTON_DISABLED_PROP = 'isDisabled';

function isReactElement(child: React.ReactNode): child is React.ReactElement {
  return typeof child === 'object' && child !== null && 'type' in child && 'props' in child;
}

function cloneChildWithDisabled(
  child: React.ReactElement,
  groupDisabled: boolean
): React.ReactNode {
  if (!groupDisabled) return child;
  return React.cloneElement(child, { [BUTTON_DISABLED_PROP]: true } as Record<string, unknown>);
}

/**
 * Groups multiple Button components into a single visual unit.
 * Supports horizontal/vertical layout, seamless styling, and group-level isDisabled.
 *
 * @example
 * ```tsx
 * <ButtonGroup>
 *   <Button>One</Button>
 *   <Button>Two</Button>
 *   <Button>Three</Button>
 * </ButtonGroup>
 * ```
 */
export const ButtonGroup = ({
  children,
  isDisabled = false,
  orientation = 'horizontal',
  ariaLabel,
  className = '',
  testId,
}: ButtonGroupProps) => {
  const classes = [
    'aceui-button-group',
    orientation === 'vertical' ? 'aceui-button-group--vertical' : 'aceui-button-group--horizontal',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const renderedChildren = React.Children.map(children, (child) => {
    if (isReactElement(child)) {
      return cloneChildWithDisabled(child, isDisabled);
    }
    if (isDisabled && child != null) {
      return (
        <div style={{ pointerEvents: 'none' }} aria-disabled="true">
          {child}
        </div>
      );
    }
    return child;
  });

  return (
    <div
      role="group"
      className={classes}
      aria-label={ariaLabel}
      data-testid={testId}
    >
      {renderedChildren}
    </div>
  );
};

ButtonGroup.displayName = 'ButtonGroup';

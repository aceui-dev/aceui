import React from 'react';
import './Badge.css';

/**
 * Badge component for labels, status, and counts. Display-only (non-interactive).
 * Supports variants, colors, sizes, radius, and start/end content.
 *
 * @example
 * ```tsx
 * <Badge variant="solid" color="primary">New</Badge>
 * <Badge variant="dot" color="success">Active</Badge>
 * ```
 */
export interface BadgeProps {
  /** Badge label content */
  children?: React.ReactNode;
  /** Visual style variant */
  variant?: 'solid' | 'bordered' | 'light' | 'shadow' | 'dot';
  /** Color scheme */
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  /** Size */
  size?: 'small' | 'medium' | 'large';
  /** Border radius */
  radius?: 'full' | 'medium' | 'small';
  /** Whether the badge is disabled */
  isDisabled?: boolean;
  /** Content before the label */
  startContent?: React.ReactNode;
  /** Content after the label */
  endContent?: React.ReactNode;
  /** Accessible label for screen readers */
  ariaLabel?: string;
  /** Additional CSS class names */
  className?: string;
  /** Test ID for testing */
  testId?: string;
}

export const Badge = ({
  children,
  variant = 'solid',
  color = 'primary',
  size = 'medium',
  radius = 'full',
  isDisabled = false,
  startContent,
  endContent,
  ariaLabel,
  className = '',
  testId,
}: BadgeProps) => {
  const classes = [
    'aceui-badge',
    `aceui-badge--${variant}`,
    `aceui-badge--color-${color}`,
    `aceui-badge--${size}`,
    `aceui-badge--radius-${radius}`,
    isDisabled ? 'aceui-badge--disabled' : '',
    className,
  ].filter(Boolean);

  const showDot = variant === 'dot';

  return (
    <span
      className={classes.join(' ').trim()}
      aria-disabled={isDisabled ? true : undefined}
      aria-label={ariaLabel}
      data-testid={testId}
    >
      {startContent != null ? (
        <span className="aceui-badge__start">{startContent}</span>
      ) : null}
      {showDot ? <span className="aceui-badge__dot" aria-hidden /> : null}
      {children != null ? <span className="aceui-badge__content">{children}</span> : null}
      {endContent != null ? (
        <span className="aceui-badge__end">{endContent}</span>
      ) : null}
    </span>
  );
};

Badge.displayName = 'Badge';

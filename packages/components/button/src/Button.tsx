import React from 'react';
import './Button.css';

/**
 * Button component props interface
 */
export interface ButtonProps {
  /** The content to display inside the button */
  children?: React.ReactNode;
  
  /** The visual style variant of the button */
  variant?: 'solid' | 'bordered' | 'light' | 'flat' | 'shadow' | 'ghost';
  
  /** The color scheme of the button */
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  
  /** The size of the button */
  size?: 'small' | 'medium' | 'large';
  
  /** The border radius of the button */
  radius?: 'none' | 'small' | 'medium' | 'large' | 'full';
  
  /** Whether the button is disabled */
  isDisabled?: boolean;
  
  /** Whether the button is in loading state */
  isLoading?: boolean;
  
  /** Icon element to display */
  icon?: React.ReactNode;
  
  /** Position of the icon relative to text */
  iconPosition?: 'left' | 'right';
  
  /** Custom text to show during loading state */
  loadingText?: string;
  
  /** Click event handler */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  
  /** Accessible label for screen readers */
  ariaLabel?: string;
  
  /** HTML button type */
  type?: 'button' | 'submit' | 'reset';
  
  /** Additional CSS class names */
  className?: string;
  
  /** Test ID for testing */
  testId?: string;
}

/**
 * Primary button component for user actions
 * 
 * Supports multiple variants, colors, sizes, and states with full accessibility.
 * 
 * @example
 * ```tsx
 * <Button variant="solid" color="primary" onClick={handleClick}>
 *   Click me
 * </Button>
 * ```
 */
export const Button = ({
  children,
  variant = 'solid',
  color = 'primary',
  size = 'medium',
  radius = 'medium',
  isDisabled = false,
  isLoading = false,
  icon,
  iconPosition = 'left',
  loadingText,
  onClick,
  ariaLabel,
  type = 'button',
  className = '',
  testId,
}: ButtonProps) => {
  const isIconOnly = !children && icon;
  const isActuallyDisabled = isDisabled || isLoading;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isActuallyDisabled) {
      event.preventDefault();
      return;
    }
    onClick?.(event);
  };

  const buildClassName = () => {
    const classes = ['aceui-button'];
    
    // Variant
    classes.push(`aceui-button--${variant}`);
    
    // Color
    classes.push(`aceui-button--color-${color}`);
    
    // Size
    classes.push(`aceui-button--${size}`);
    
    // Radius
    classes.push(`aceui-button--radius-${radius}`);
    
    // States
    if (isDisabled) {
      classes.push('aceui-button--disabled');
    }
    if (isLoading) {
      classes.push('aceui-button--loading');
    }
    if (isIconOnly) {
      classes.push('aceui-button--icon-only');
    }
    
    // External classes
    if (className) {
      classes.push(className);
    }
    
    return classes.filter(Boolean).join(' ');
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <>
          <span className="aceui-button__spinner" aria-hidden="true"></span>
          {loadingText && <span className="aceui-button__text">{loadingText}</span>}
          {!loadingText && children && <span className="aceui-button__text">{children}</span>}
        </>
      );
    }

    if (isIconOnly) {
      return <span className="aceui-button__icon">{icon}</span>;
    }

    if (icon) {
      const iconElement = <span className="aceui-button__icon">{icon}</span>;
      const textElement = children && <span className="aceui-button__text">{children}</span>;
      
      return iconPosition === 'left' ? (
        <>
          {iconElement}
          {textElement}
        </>
      ) : (
        <>
          {textElement}
          {iconElement}
        </>
      );
    }

    return children ? <span className="aceui-button__text">{children}</span> : null;
  };

  return (
    <button
      type={type}
      className={buildClassName()}
      disabled={isActuallyDisabled}
      onClick={handleClick}
      aria-label={ariaLabel}
      aria-busy={isLoading}
      data-testid={testId}
    >
      {renderContent()}
    </button>
  );
};

Button.displayName = 'Button';

import './Divider.css';

/**
 * Divider component props interface
 */
export interface DividerProps {
  /** Orientation of the divider */
  orientation?: 'horizontal' | 'vertical';
  
  /** Additional CSS class names */
  className?: string;
  
  /** Accessible label for screen readers */
  ariaLabel?: string;
  
  /** Test ID for testing */
  testId?: string;
}

/**
 * Divider component for separating content with horizontal or vertical lines
 * 
 * @example
 * ```tsx
 * <Divider />
 * <Divider orientation="vertical" />
 * ```
 */
export const Divider = ({
  orientation = 'horizontal',
  className = '',
  ariaLabel,
  testId,
}: DividerProps) => {
  const buildClassName = () => {
    const classes = ['aceui-divider'];
    
    // Orientation modifier
    classes.push(`aceui-divider--${orientation}`);
    
    // External classes
    if (className) {
      classes.push(className);
    }
    
    return classes.filter(Boolean).join(' ');
  };

  // Use semantic <hr> for horizontal dividers
  if (orientation === 'horizontal') {
    return (
      <hr
        role="separator"
        className={buildClassName()}
        aria-label={ariaLabel}
        data-testid={testId}
      />
    );
  }

  // Use div with role="separator" for vertical dividers
  return (
    <div
      role="separator"
      aria-orientation="vertical"
      className={buildClassName()}
      aria-label={ariaLabel}
      data-testid={testId}
    />
  );
};

Divider.displayName = 'Divider';

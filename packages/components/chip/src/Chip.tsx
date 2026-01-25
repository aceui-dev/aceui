import React, { forwardRef } from "react";

export type ChipVariant = "filled" | "outlined" | "soft";
export type ChipSize = "sm" | "md" | "lg";

export interface ChipProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "children"> {
  /** Visual style of the chip. */
  variant?: ChipVariant;
  /** Size of the chip. */
  size?: ChipSize;
  /** When provided, shows a remove control and calls this on click. */
  onRemove?: () => void;
  /** Chip label. */
  children?: React.ReactNode;
}

const sizeStyles: Record<ChipSize, React.CSSProperties> = {
  sm: { padding: "0.2rem 0.5rem", fontSize: "0.75rem" },
  md: { padding: "0.35rem 0.75rem", fontSize: "0.8125rem" },
  lg: { padding: "0.5rem 1rem", fontSize: "0.875rem" },
};

const baseStyles: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "0.35rem",
  borderRadius: "9999px",
  fontWeight: 500,
  fontFamily: "inherit",
  lineHeight: 1.25,
};

const variantStyles: Record<ChipVariant, React.CSSProperties> = {
  filled: {
    background: "#3f3f46",
    color: "#e4e4e7",
    border: "1px solid transparent",
  },
  outlined: {
    background: "transparent",
    color: "#a1a1aa",
    border: "1px solid #52525b",
  },
  soft: {
    background: "rgba(99, 102, 241, 0.15)",
    color: "#a5b4fc",
    border: "1px solid transparent",
  },
};

export const Chip = forwardRef<HTMLSpanElement, ChipProps>(
  function Chip(props, ref) {
    const {
      variant = "filled",
      size = "md",
      onRemove,
      children,
      style,
      className,
      ...rest
    } = props;

    const resolvedStyle: React.CSSProperties = {
      ...baseStyles,
      ...sizeStyles[size],
      ...variantStyles[variant],
      ...style,
    };

    return (
      <span
        ref={ref}
        role={onRemove ? "group" : undefined}
        className={className}
        style={resolvedStyle}
        {...rest}
      >
        {children}
        {onRemove != null && (
          <button
            type="button"
            aria-label="Remove"
            onClick={(e) => {
              e.stopPropagation();
              onRemove();
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "0.1rem",
              padding: 0,
              width: "1.1em",
              height: "1.1em",
              border: "none",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.15)",
              color: "inherit",
              cursor: "pointer",
              fontSize: "1em",
              lineHeight: 1,
            }}
          >
            ×
          </button>
        )}
      </span>
    );
  }
);

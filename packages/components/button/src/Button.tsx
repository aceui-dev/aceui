import { useFocusRing } from "@react-aria/focus";
import { usePress } from "@react-aria/interactions";
import type { PressEvents } from "@react-types/shared";
import React, { forwardRef, useRef } from "react";

export interface ButtonProps
  extends Omit<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      "onPress" | "onClick"
    >,
    PressEvents {
  /** Whether the button is disabled. */
  isDisabled?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    const { children, isDisabled, onPress, ...rest } = props;
    const localRef = useRef<HTMLButtonElement>(null);
    const { pressProps } = usePress({
      ref: localRef,
      isDisabled,
      onPress,
    });
    const { focusProps } = useFocusRing();

    const setRef = (el: HTMLButtonElement | null) => {
      (localRef as React.MutableRefObject<HTMLButtonElement | null>).current = el;
      if (typeof ref === "function") ref(el);
      else if (ref) (ref as React.MutableRefObject<HTMLButtonElement | null>).current = el;
    };

    return (
      <button
        ref={setRef}
        type="button"
        disabled={isDisabled}
        {...rest}
        {...pressProps}
        {...focusProps}
      >
        {children}
      </button>
    );
  }
);

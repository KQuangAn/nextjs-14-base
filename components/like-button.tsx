"use client";

import React, { InputHTMLAttributes, useImperativeHandle, useRef } from "react";

export interface IButtonInterface
  extends InputHTMLAttributes<HTMLInputElement> {
  alertValue: () => void;
  focus: () => void;
  blur: () => void;
}

const FancyButton = React.forwardRef<IButtonInterface, HTMLInputElement>( // ref type + imperative handle: buttonInterface , props type = button Props
  ({ className, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(
      ref,
      () => {
        return {
          alertValue: () => alert(inputRef?.current?.value),
          focus: () => inputRef?.current?.focus(),
          blur: () => inputRef?.current?.blur(),
        };
      },
      []
    );

    return (
      <>
        <div className={className}>
          <input ref={inputRef} {...props} />
        </div>
      </>
    );
  }
);

export default FancyButton;
FancyButton.displayName = "FancyButton";

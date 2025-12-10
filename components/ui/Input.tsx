"use client";

import { InputHTMLAttributes, forwardRef, useState } from "react";
import Image from "next/image";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  showSubmitButton?: boolean;
  variant?: "default" | "filled";
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { className = "", onSubmit, showSubmitButton = true, variant, ...props },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);

    // Auto-detect variant based on focus/value if not explicitly set
    const activeVariant =
      variant ?? (isFocused || hasValue ? "filled" : "default");

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      props.onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      props.onBlur?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setHasValue(e.target.value.length > 0);
      props.onChange?.(e);
    };

    // Variant-specific styles matching Zeplin Frame 9 design
    const containerBg =
      activeVariant === "filled"
        ? "bg-white"
        : "bg-white/20 backdrop-blur-[32px]";
    const containerBorder =
      activeVariant === "filled" ? "border-white" : "border-white/40";
    const textColor = activeVariant === "filled" ? "text-black" : "text-white";
    const placeholderColor =
      activeVariant === "filled"
        ? "placeholder:text-black/40"
        : "placeholder:text-white/40";

    return (
      <div className="relative w-full">
        <div
          className={`relative flex items-center h-[72px] rounded-[48px] border-[0.5px] pl-7 pr-3 transition-all duration-200 ${containerBg} ${containerBorder}`}
        >
          <input
            ref={ref}
            type="email"
            className={`flex-1 bg-transparent font-normal leading-7 outline-none transition-colors duration-200 ${textColor} ${placeholderColor} ${className}`}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            {...props}
          />
          {showSubmitButton && (
            <button
              type="submit"
              className="shrink-0 w-12 h-12 flex items-center justify-center bg-black rounded-tl-xl rounded-tr-3xl rounded-bl-xl rounded-br-3xl transition-transform hover:scale-105 active:scale-95"
              aria-label="Submit"
            >
              <Image
                src="/icons/arrow-down.svg"
                alt="Submit"
                width={16}
                height={16}
                className="w-4 h-4"
              />
            </button>
          )}
        </div>
      </div>
    );
  },
);

Input.displayName = "Input";

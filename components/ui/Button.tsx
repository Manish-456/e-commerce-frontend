import { cn } from "@/lib/utils";
import { forwardRef } from "react";
export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type: "submit" | "button";
  disabled?: boolean;
}
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, disabled = false, type, children, ...props }, ref) => {
    return (
      <button
        type={type}
        disabled={disabled}
        ref={ref}
        {...props}
        className={cn(
          `
        w-auto
        rounded-full
        bg-black
        px-5
        py-3
        disabled:cursor-not-allowed
        disabled:opacity-50
        font-semibold
        hover:opacity-75
        transition
        ${className}
        `
        )}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;

import { cn } from "@/lib/utils";
import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        <input
          type={type}
          className={cn(
            "flex h-10 w-full border-b bg-background px-3 py-2 text-lg font-semibold placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none",
            error
              ? "border-destructive focus:border-destructive"
              : "border-border focus:border-input",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <span className="mt-1 text-sm text-destructive">{error}</span>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };

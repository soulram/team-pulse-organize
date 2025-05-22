
import * as React from "react"
import { Link, LinkProps } from "react-router-dom"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { VariantProps } from "class-variance-authority"

interface LinkButtonProps 
  extends LinkProps, 
  VariantProps<typeof buttonVariants> {
  className?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
  isLoading?: boolean;
}

const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ 
    className, 
    variant = "default", 
    size = "default", 
    fullWidth, 
    isLoading,
    to, 
    children, 
    ...props 
  }, ref) => {
    return (
      <Link
        to={to}
        className={cn(buttonVariants({ variant, size, fullWidth, isLoading, className }))}
        ref={ref}
        {...props}
      >
        {isLoading ? (
          <div className="flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {children}
          </div>
        ) : children}
      </Link>
    );
  }
);

LinkButton.displayName = "LinkButton";

export { LinkButton };

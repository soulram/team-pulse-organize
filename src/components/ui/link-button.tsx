
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
}

const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ className, variant = "default", size = "default", to, children, ...props }, ref) => {
    return (
      <Link
        to={to}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Link>
    );
  }
);

LinkButton.displayName = "LinkButton";

export { LinkButton };

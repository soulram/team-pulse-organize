
import * as React from "react"
import { Button, ButtonProps } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { Link } from "react-router-dom"

interface CreateButtonProps extends ButtonProps {
  text?: string;
  to?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const CreateButton: React.FC<CreateButtonProps> = ({ 
  text, 
  to, 
  onClick,
  children,
  variant = "default", 
  size = "default",
  ...props 
}) => {
  const buttonContent = children ? children : (
    <>
      <Plus className="h-4 w-4" />
      {text}
    </>
  );

  if (to) {
    return (
      <Button
        variant={variant}
        size={size}
        asChild
        {...props}
      >
        <Link to={to}>{buttonContent}</Link>
      </Button>
    );
  }

  return (
    <Button
      variant={variant}
      size={size}
      onClick={onClick}
      {...props}
    >
      {buttonContent}
    </Button>
  );
};

export { CreateButton };

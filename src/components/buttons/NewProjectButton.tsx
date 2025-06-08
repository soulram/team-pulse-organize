
import React from "react";
import { CreateButton } from "@/components/ui/create-button";
import { toast } from "sonner";
import { ButtonProps } from "@/components/ui/button";

interface NewProjectButtonProps extends Omit<ButtonProps, "children"> {
  variant?: ButtonProps["variant"];
  onClick?: () => void;
  text?: string;
  children?: React.ReactNode;
}

const NewProjectButton: React.FC<NewProjectButtonProps> = ({ 
  variant = "default",
  text = "New Project",
  onClick,
  children,
  ...props
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      toast.success("Creating new project...");
      // Implementation for creating a new project would go here
    }
  };

  return (
    <CreateButton 
      text={children ? "" : text}
      onClick={handleClick}
      variant={variant}
      {...props}
    >
      {children}
    </CreateButton>
  );
};

export default NewProjectButton;

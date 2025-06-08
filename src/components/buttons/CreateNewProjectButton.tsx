
import React from "react";
import { CreateButton } from "@/components/ui/create-button";
import { toast } from "sonner";
import { ButtonProps } from "@/components/ui/button";

interface CreateNewProjectButtonProps extends Omit<ButtonProps, "children"> {
  variant?: ButtonProps["variant"];
  onClick?: () => void;
  children?: React.ReactNode;
}

const CreateNewProjectButton: React.FC<CreateNewProjectButtonProps> = ({ 
  variant = "default",
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
      text={children ? "" : "Create New Project"}
      onClick={handleClick}
      variant={variant}
      {...props}
    >
      {children}
    </CreateButton>
  );
};

export default CreateNewProjectButton;

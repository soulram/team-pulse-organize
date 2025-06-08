
import React from "react";
import { CreateButton } from "@/components/ui/create-button";
import { toast } from "sonner";
import { ButtonProps } from "@/components/ui/button";

interface NewTaskButtonProps extends Omit<ButtonProps, "children"> {
  variant?: ButtonProps["variant"];
  onClick?: () => void;
  children?: React.ReactNode;
}

const NewTaskButton: React.FC<NewTaskButtonProps> = ({ 
  variant = "default",
  onClick,
  children,
  ...props
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      toast.success("Creating new task...");
      // Default implementation for creating a new task would go here
    }
  };

  return (
    <CreateButton 
      text={children ? "" : "New Task"}
      onClick={handleClick}
      variant={variant}
      {...props}
    >
      {children}
    </CreateButton>
  );
};

export default NewTaskButton;

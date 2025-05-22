
import React from "react";
import { CreateButton } from "@/components/ui/create-button";
import { toast } from "sonner";
import { ButtonProps } from "@/components/ui/button";

interface NewTaskButtonProps extends Omit<ButtonProps, "children"> {
  variant?: ButtonProps["variant"];
}

const NewTaskButton: React.FC<NewTaskButtonProps> = ({ 
  variant = "default",
  ...props
}) => {
  const handleClick = () => {
    toast.success("Creating new task...");
    // Implementation for creating a new task would go here
  };

  return (
    <CreateButton 
      text="New Task"
      onClick={handleClick}
      variant={variant}
      {...props}
    />
  );
};

export default NewTaskButton;

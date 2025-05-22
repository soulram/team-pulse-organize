
import React from "react";
import { CreateButton } from "@/components/ui/create-button";
import { toast } from "sonner";
import { ButtonProps } from "@/components/ui/button";

interface NewProjectButtonProps extends Omit<ButtonProps, "children"> {
  variant?: ButtonProps["variant"];
  text?: string;
}

const NewProjectButton: React.FC<NewProjectButtonProps> = ({ 
  variant = "default",
  text = "New Project",
  ...props
}) => {
  const handleClick = () => {
    toast.success("Creating new project...");
    // Implementation for creating a new project would go here
  };

  return (
    <CreateButton 
      text={text}
      onClick={handleClick}
      variant={variant}
      {...props}
    />
  );
};

export default NewProjectButton;

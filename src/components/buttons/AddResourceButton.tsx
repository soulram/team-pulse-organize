
import React from "react";
import { CreateButton } from "@/components/ui/create-button";
import { toast } from "sonner";
import { ButtonProps } from "@/components/ui/button";

interface AddResourceButtonProps extends Omit<ButtonProps, "children"> {
  variant?: ButtonProps["variant"];
}

const AddResourceButton: React.FC<AddResourceButtonProps> = ({ 
  variant = "default",
  ...props
}) => {
  const handleClick = () => {
    toast.success("Adding new resource...");
    // Implementation for adding a new resource would go here
  };

  return (
    <CreateButton 
      text="Add Resource"
      onClick={handleClick}
      variant={variant}
      {...props}
    />
  );
};

export default AddResourceButton;

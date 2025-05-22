
import React from "react";
import { CreateButton } from "@/components/ui/create-button";
import { toast } from "sonner";
import { ButtonProps } from "@/components/ui/button";

interface AddEventButtonProps extends Omit<ButtonProps, "children"> {
  variant?: ButtonProps["variant"];
}

const AddEventButton: React.FC<AddEventButtonProps> = ({ 
  variant = "default",
  ...props
}) => {
  const handleClick = () => {
    toast.success("Adding new event...");
    // Implementation for adding a new event would go here
  };

  return (
    <CreateButton 
      text="Add Event"
      onClick={handleClick}
      variant={variant}
      {...props}
    />
  );
};

export default AddEventButton;

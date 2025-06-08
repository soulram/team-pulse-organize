
import React from "react";
import { CreateButton } from "@/components/ui/create-button";
import { toast } from "sonner";
import { ButtonProps } from "@/components/ui/button";

interface AddEventButtonProps extends Omit<ButtonProps, "children"> {
  variant?: ButtonProps["variant"];
  onClick?: () => void;
  children?: React.ReactNode;
}

const AddEventButton: React.FC<AddEventButtonProps> = ({ 
  variant = "default",
  onClick,
  children,
  ...props
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      toast.success("Adding new event...");
      // Default implementation for adding a new event would go here
    }
  };

  return (
    <CreateButton 
      text={children ? "" : "Add Event"}
      onClick={handleClick}
      variant={variant}
      {...props}
    >
      {children}
    </CreateButton>
  );
};

export default AddEventButton;

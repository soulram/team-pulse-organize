
import React from "react";
import { CreateButton } from "@/components/ui/create-button";
import { toast } from "sonner";
import { ButtonProps } from "@/components/ui/button";

interface AddResourceButtonProps extends Omit<ButtonProps, "children"> {
  variant?: ButtonProps["variant"];
  onClick?: () => void;
  children?: React.ReactNode;
}

const AddResourceButton: React.FC<AddResourceButtonProps> = ({ 
  variant = "default",
  onClick,
  children,
  ...props
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      toast.success("Adding new resource...");
      // Default implementation for adding a new resource would go here
    }
  };

  return (
    <CreateButton 
      text={children ? "" : "Add Resource"}
      onClick={handleClick}
      variant={variant}
      {...props}
    >
      {children}
    </CreateButton>
  );
};

export default AddResourceButton;

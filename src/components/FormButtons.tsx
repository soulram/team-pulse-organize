
import React, { useState } from "react";
import NewTaskButton from "./buttons/NewTaskButton";
import AddEventButton from "./buttons/AddEventButton";
import AddResourceButton from "./buttons/AddResourceButton";
import NewProjectButton from "./buttons/NewProjectButton";
import CreateNewProjectButton from "./buttons/CreateNewProjectButton";
import ProjectForm from "./forms/ProjectForm";
import EventForm from "./forms/EventForm";
import ResourceForm from "./forms/ResourceForm";
import { ButtonProps } from "./ui/button";
import { AddTaskDialog } from "./forms/TaskForm";

interface FormButtonProps extends Omit<ButtonProps, "children"> {
  variant?: ButtonProps["variant"];
  children?: React.ReactNode;
}

export const NewTaskFormButton: React.FC<FormButtonProps> = ({ children, ...props }) => {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <NewTaskButton 
        onClick={() => setOpen(true)} 
        {...props} 
      >
        {children}
      </NewTaskButton>
      <AddTaskDialog open={open} onOpenChange={setOpen} />
    </>
  );
};

export const AddEventFormButton: React.FC<FormButtonProps> = ({ children, ...props }) => {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <AddEventButton 
        onClick={() => setOpen(true)} 
        {...props} 
      >
        {children}
      </AddEventButton>
      <EventForm open={open} onOpenChange={setOpen} />
    </>
  );
};

export const AddResourceFormButton: React.FC<FormButtonProps> = ({ children, ...props }) => {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <AddResourceButton 
        onClick={() => setOpen(true)} 
        {...props} 
      >
        {children}
      </AddResourceButton>
      <ResourceForm open={open} onOpenChange={setOpen} />
    </>
  );
};

export const NewProjectFormButton: React.FC<FormButtonProps> = ({ children, ...props }) => {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <NewProjectButton 
        onClick={() => setOpen(true)} 
        {...props} 
      >
        {children}
      </NewProjectButton>
      <ProjectForm open={open} onOpenChange={setOpen} type="new" />
    </>
  );
};

export const CreateNewProjectFormButton: React.FC<FormButtonProps> = ({ children, ...props }) => {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <CreateNewProjectButton 
        onClick={() => setOpen(true)} 
        {...props} 
      >
        {children}
      </CreateNewProjectButton>
      <ProjectForm open={open} onOpenChange={setOpen} type="create" />
    </>
  );
};

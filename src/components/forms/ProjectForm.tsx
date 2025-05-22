
import React from 'react';
import { 
  Dialog, 
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ProjectFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  type?: 'new' | 'create';
}

const ProjectForm: React.FC<ProjectFormProps> = ({ 
  open, 
  onOpenChange, 
  type = 'new' 
}) => {
  const title = type === 'new' ? 'New Project' : 'Create New Project';
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Project created successfully!");
    onOpenChange(false);
  };
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            Fill in the details to create a new project
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Project Name</Label>
              <Input id="name" placeholder="Enter project name" />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Enter project description" />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="start-date">Start Date</Label>
                <Input id="start-date" type="date" />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="end-date">Due Date</Label>
                <Input id="end-date" type="date" />
              </div>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="client">Client/Department</Label>
              <Input id="client" placeholder="Enter client or department" />
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" type="button" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">Create Project</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectForm;

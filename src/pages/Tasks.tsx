
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import StatusBadge from '@/components/StatusBadge';
import PriorityBadge from '@/components/PriorityBadge';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Search, Plus, ArrowUpDown, Users } from 'lucide-react';
import NewTaskButton from '@/components/buttons/NewTaskButton';
import { 
  Dialog, 
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

// Mock data for tasks
const mockTasks = [
  {
    id: 1,
    title: 'Create wireframes for homepage',
    description: 'Design initial wireframes for the new homepage layout',
    status: 'to-do',
    priority: 'high',
    dueDate: '2025-05-30',
    project: 'Website Redesign',
    assignee: { name: 'Alice Smith', avatar: '/placeholder.svg', initials: 'AS' }
  },
  {
    id: 2,
    title: 'Implement authentication system',
    description: 'Set up user authentication with OAuth and JWT',
    status: 'in-progress',
    priority: 'high',
    dueDate: '2025-06-05',
    project: 'Mobile App Development',
    assignee: { name: 'Bob Johnson', avatar: '/placeholder.svg', initials: 'BJ' }
  },
  {
    id: 3,
    title: 'Create social media content calendar',
    description: 'Plan content for next month across all social media platforms',
    status: 'in-progress',
    priority: 'medium',
    dueDate: '2025-05-28',
    project: 'Marketing Campaign',
    assignee: { name: 'Carol Davis', avatar: '/placeholder.svg', initials: 'CD' }
  },
  {
    id: 4,
    title: 'Finalize product pricing',
    description: 'Complete pricing strategy and documentation for new product line',
    status: 'in-review',
    priority: 'urgent',
    dueDate: '2025-05-25',
    project: 'Product Launch',
    assignee: { name: 'David Wilson', avatar: '/placeholder.svg', initials: 'DW' }
  },
  {
    id: 5,
    title: 'User acceptance testing',
    description: 'Coordinate UAT sessions with stakeholders',
    status: 'to-do',
    priority: 'low',
    dueDate: '2025-06-15',
    project: 'CRM Implementation',
    assignee: { name: 'Eve Brown', avatar: '/placeholder.svg', initials: 'EB' }
  },
  {
    id: 6,
    title: 'Backend API documentation',
    description: 'Create comprehensive API docs for developers',
    status: 'done',
    priority: 'medium',
    dueDate: '2025-05-20',
    project: 'Mobile App Development',
    assignee: { name: 'Frank Miller', avatar: '/placeholder.svg', initials: 'FM' }
  },
  {
    id: 7,
    title: 'Create sales presentation deck',
    description: 'Develop slides for the upcoming sales training',
    status: 'to-do',
    priority: 'high',
    dueDate: '2025-06-10',
    project: 'Sales Training Program',
    assignee: { name: 'Grace Lee', avatar: '/placeholder.svg', initials: 'GL' }
  },
  {
    id: 8,
    title: 'Conduct competitor analysis',
    description: 'Research and document competitor strengths and weaknesses',
    status: 'in-progress',
    priority: 'medium',
    dueDate: '2025-06-01',
    project: 'Marketing Campaign',
    assignee: { name: 'Henry Clark', avatar: '/placeholder.svg', initials: 'HC' }
  }
];

// Group tasks by status for Kanban view
const groupTasksByStatus = () => {
  const columns = {
    'to-do': { title: 'To Do', tasks: [] as typeof mockTasks },
    'in-progress': { title: 'In Progress', tasks: [] as typeof mockTasks },
    'in-review': { title: 'In Review', tasks: [] as typeof mockTasks },
    'done': { title: 'Done', tasks: [] as typeof mockTasks }
  };
  
  mockTasks.forEach(task => {
    if (task.status in columns) {
      columns[task.status as keyof typeof columns].tasks.push(task);
    }
  });
  
  return columns;
};

// Task component for Kanban column
const TaskCard: React.FC<{ task: typeof mockTasks[0] }> = ({ task }) => {
  const getPriorityColor = () => {
    switch (task.priority) {
      case 'low': return 'bg-priority-low';
      case 'medium': return 'bg-priority-medium';
      case 'high': return 'bg-priority-high';
      case 'urgent': return 'bg-priority-urgent';
      default: return 'bg-gray-500';
    }
  };
  
  return (
    <Card className="task-card mb-3">
      <CardContent className="p-3">
        <div className={`w-full h-1 rounded-sm mb-3 ${getPriorityColor()}`}></div>
        <h3 className="font-medium text-sm mb-2">{task.title}</h3>
        <p className="text-xs text-muted-foreground mb-2 line-clamp-2">{task.description}</p>
        
        <div className="flex justify-between items-center mb-2">
          <Badge variant="outline" className="text-xs">{task.project}</Badge>
          <PriorityBadge priority={task.priority as any} />
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center text-xs text-muted-foreground">
            <Calendar className="h-3 w-3 mr-1" />
            {new Date(task.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          </div>
          <Avatar className="h-6 w-6">
            <AvatarImage src={task.assignee.avatar} alt={task.assignee.name} />
            <AvatarFallback>{task.assignee.initials}</AvatarFallback>
          </Avatar>
        </div>
      </CardContent>
    </Card>
  );
};

// Kanban column component
const KanbanColumn: React.FC<{ title: string; tasks: typeof mockTasks; color?: string }> = ({ title, tasks, color = 'bg-gray-100' }) => {
  const [showAddTaskDialog, setShowAddTaskDialog] = useState(false);
  
  return (
    <div className="kanban-column flex flex-col rounded-md overflow-hidden">
      <div className={`py-2 px-4 ${color} text-white font-medium flex items-center justify-between`}>
        <h3>{title}</h3>
        <Badge variant="outline" className="bg-white text-gray-700">{tasks.length}</Badge>
      </div>
      <div className="flex-1 p-2 bg-secondary/50 overflow-y-auto">
        <div className="space-y-2">
          {tasks.map(task => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
        <Button 
          variant="ghost" 
          className="w-full mt-2 border border-dashed border-gray-300 text-muted-foreground"
          onClick={() => setShowAddTaskDialog(true)}
        >
          <Plus className="h-4 w-4 mr-1" /> Add Task
        </Button>
        
        <AddTaskDialog 
          open={showAddTaskDialog} 
          onOpenChange={setShowAddTaskDialog} 
          status={title.toLowerCase().replace(' ', '-')}
        />
      </div>
    </div>
  );
};

interface AddTaskDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  status?: string;
}

const AddTaskDialog: React.FC<AddTaskDialogProps> = ({ open, onOpenChange, status = 'to-do' }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Task created successfully!");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Task</DialogTitle>
          <DialogDescription>
            Create a new task in the {status} column
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" placeholder="Task title" />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Task description" />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="priority">Priority</Label>
              <Select defaultValue="medium">
                <SelectTrigger>
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="urgent">Urgent</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="due-date">Due Date</Label>
              <Input id="due-date" type="date" />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="project">Project</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select project" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="website">Website Redesign</SelectItem>
                  <SelectItem value="mobile">Mobile App Development</SelectItem>
                  <SelectItem value="marketing">Marketing Campaign</SelectItem>
                  <SelectItem value="product">Product Launch</SelectItem>
                  <SelectItem value="crm">CRM Implementation</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" type="button" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">Create Task</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

const Tasks: React.FC = () => {
  const [taskView, setTaskView] = useState<'kanban' | 'list'>('kanban');
  const columns = groupTasksByStatus();
  const [showNewTaskDialog, setShowNewTaskDialog] = useState(false);
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tasks</h1>
          <p className="text-muted-foreground">Manage and track tasks across all projects</p>
        </div>
        
        <NewTaskButton onClick={() => setShowNewTaskDialog(true)} />
        
        <AddTaskDialog 
          open={showNewTaskDialog} 
          onOpenChange={setShowNewTaskDialog} 
        />
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <TabsList>
            <TabsTrigger value="all">All Tasks</TabsTrigger>
            <TabsTrigger value="my-tasks">My Tasks</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          
          <div className="flex gap-2">
            <Button
              variant={taskView === 'kanban' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setTaskView('kanban')}
            >
              Kanban
            </Button>
            <Button
              variant={taskView === 'list' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setTaskView('list')}
            >
              List
            </Button>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative w-full sm:max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search tasks..." className="pl-8" />
          </div>
          
          <div className="flex gap-2 w-full sm:w-auto">
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-[160px]">
                <div className="flex items-center">
                  <ArrowUpDown className="mr-2 h-3.5 w-3.5" />
                  <span>Sort</span>
                </div>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Date (Newest)</SelectItem>
                <SelectItem value="oldest">Date (Oldest)</SelectItem>
                <SelectItem value="priority-high">Priority (High)</SelectItem>
                <SelectItem value="priority-low">Priority (Low)</SelectItem>
                <SelectItem value="name-az">Name (A-Z)</SelectItem>
                <SelectItem value="name-za">Name (Z-A)</SelectItem>
              </SelectContent>
            </Select>
            
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Filter by Project" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Projects</SelectItem>
                <SelectItem value="website">Website Redesign</SelectItem>
                <SelectItem value="mobile">Mobile App</SelectItem>
                <SelectItem value="marketing">Marketing Campaign</SelectItem>
                <SelectItem value="product">Product Launch</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {/* Kanban Board View */}
        <TabsContent value="all" className="mt-4">
          {taskView === 'kanban' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <KanbanColumn 
                title="To Do" 
                tasks={columns['to-do'].tasks} 
                color="bg-gray-500" 
              />
              <KanbanColumn 
                title="In Progress" 
                tasks={columns['in-progress'].tasks} 
                color="bg-blue-500" 
              />
              <KanbanColumn 
                title="In Review" 
                tasks={columns['in-review'].tasks}
                color="bg-amber-500"
              />
              <KanbanColumn 
                title="Done" 
                tasks={columns['done'].tasks}
                color="bg-green-500"
              />
            </div>
          ) : (
            <div className="bg-white rounded-md overflow-hidden">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left px-4 py-3 font-medium text-sm">Task</th>
                    <th className="text-left px-4 py-3 font-medium text-sm">Project</th>
                    <th className="text-left px-4 py-3 font-medium text-sm">Priority</th>
                    <th className="text-left px-4 py-3 font-medium text-sm">Due Date</th>
                    <th className="text-left px-4 py-3 font-medium text-sm">Assignee</th>
                    <th className="text-left px-4 py-3 font-medium text-sm">Status</th>
                    <th className="text-left px-4 py-3 font-medium text-sm">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mockTasks.map((task, index) => (
                    <tr key={task.id} className={index % 2 === 0 ? 'bg-white' : 'bg-muted/30'}>
                      <td className="px-4 py-3">
                        <p className="font-medium">{task.title}</p>
                        <p className="text-xs text-muted-foreground line-clamp-1">{task.description}</p>
                      </td>
                      <td className="px-4 py-3">
                        <Badge variant="outline">{task.project}</Badge>
                      </td>
                      <td className="px-4 py-3">
                        <PriorityBadge priority={task.priority as any} />
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          <Calendar className="h-3 w-3 mr-2" />
                          {new Date(task.dueDate).toLocaleDateString()}
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center">
                          <Avatar className="h-6 w-6 mr-2">
                            <AvatarImage src={task.assignee.avatar} alt={task.assignee.name} />
                            <AvatarFallback>{task.assignee.initials}</AvatarFallback>
                          </Avatar>
                          <span className="text-sm">{task.assignee.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <Badge
                          className={`
                            ${task.status === 'to-do' ? 'bg-gray-500' : ''}
                            ${task.status === 'in-progress' ? 'bg-blue-500' : ''}
                            ${task.status === 'in-review' ? 'bg-amber-500' : ''}
                            ${task.status === 'done' ? 'bg-green-500' : ''}
                            text-white
                          `}
                        >
                          {task.status === 'to-do' ? 'To Do' : ''}
                          {task.status === 'in-progress' ? 'In Progress' : ''}
                          {task.status === 'in-review' ? 'In Review' : ''}
                          {task.status === 'done' ? 'Done' : ''}
                        </Badge>
                      </td>
                      <td className="px-4 py-3">
                        <Button variant="ghost" size="sm">Edit</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="my-tasks" className="mt-4">
          <div className="flex items-center justify-center h-40">
            <p className="text-muted-foreground">Displaying your assigned tasks</p>
          </div>
        </TabsContent>
        
        <TabsContent value="upcoming" className="mt-4">
          <div className="flex items-center justify-center h-40">
            <p className="text-muted-foreground">Displaying upcoming tasks</p>
          </div>
        </TabsContent>
        
        <TabsContent value="completed" className="mt-4">
          <div className="flex items-center justify-center h-40">
            <p className="text-muted-foreground">Displaying completed tasks</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Tasks;

import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import StatusBadge from '@/components/StatusBadge';
import ProgressBar from '@/components/ProgressBar';
import { Calendar, Users, ListTodo, Search, Plus, ArrowUpDown } from 'lucide-react';
import { NewProjectFormButton } from '@/components/FormButtons';

type ProjectViewMode = 'grid' | 'list';
type ProjectSortOption = 'name' | 'deadline' | 'status' | 'progress';

const Projects: React.FC = () => {
  const [viewMode, setViewMode] = useState<ProjectViewMode>('grid');
  const [sortBy, setSortBy] = useState<ProjectSortOption>('deadline');
  
  // Mock project data
  const projects = [
    {
      id: 1,
      name: 'Website Redesign',
      description: 'Complete overhaul of company website with new design system',
      status: 'on-track',
      progress: 68,
      deadline: '2025-06-15',
      teamSize: 5,
      tasksCount: 24,
      department: 'Marketing',
      client: 'Internal'
    },
    {
      id: 2,
      name: 'Mobile App Development',
      description: 'Create iOS and Android apps for customer engagement',
      status: 'at-risk',
      progress: 45,
      deadline: '2025-06-30',
      teamSize: 8,
      tasksCount: 36,
      department: 'Product',
      client: 'ABC Corp'
    },
    {
      id: 3,
      name: 'Marketing Campaign',
      description: 'Q2 product launch marketing campaign across all channels',
      status: 'completed',
      progress: 100,
      deadline: '2025-05-20',
      teamSize: 4,
      tasksCount: 18,
      department: 'Marketing',
      client: 'Internal'
    },
    {
      id: 4,
      name: 'Product Launch',
      description: 'Launch of new product line including PR and events',
      status: 'off-track',
      progress: 30,
      deadline: '2025-06-10',
      teamSize: 10,
      tasksCount: 42,
      department: 'Product',
      client: 'Internal'
    },
    {
      id: 5,
      name: 'CRM Implementation',
      description: 'Implement and migrate to new CRM system',
      status: 'on-track',
      progress: 75,
      deadline: '2025-07-15',
      teamSize: 6,
      tasksCount: 30,
      department: 'IT',
      client: 'Internal'
    },
    {
      id: 6,
      name: 'Sales Training Program',
      description: 'Develop and deliver comprehensive sales methodology training',
      status: 'not-started',
      progress: 0,
      deadline: '2025-08-01',
      teamSize: 3,
      tasksCount: 15,
      department: 'Sales',
      client: 'Internal'
    }
  ];

  const renderGridView = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map(project => (
          <Card key={project.id} className="task-card overflow-hidden">
            <div className={`h-2 w-full 
              ${project.status === 'on-track' ? 'bg-status-on-track' : ''} 
              ${project.status === 'at-risk' ? 'bg-status-at-risk' : ''} 
              ${project.status === 'off-track' ? 'bg-status-off-track' : ''} 
              ${project.status === 'completed' ? 'bg-status-completed' : ''} 
              ${project.status === 'not-started' ? 'bg-status-not-started' : ''}
            `}></div>
            <CardContent className="p-4">
              <div className="mb-3">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-medium truncate">{project.name}</h3>
                  <StatusBadge status={project.status as any} className="ml-2 shrink-0" />
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
              </div>
              
              <ProgressBar value={project.progress} className="mb-4" />
              
              <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-4">
                <div className="flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>{new Date(project.deadline).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-3 w-3 mr-1" />
                  <span>{project.teamSize} members</span>
                </div>
                <div className="flex items-center">
                  <ListTodo className="h-3 w-3 mr-1" />
                  <span>{project.tasksCount} tasks</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-xs px-2 py-1 bg-secondary rounded-md">{project.department}</span>
                <Button variant="outline" size="sm">View Details</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  const renderListView = () => {
    return (
      <div className="bg-white rounded-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-muted">
            <tr>
              <th className="text-left px-4 py-3 font-medium text-sm">Project Name</th>
              <th className="text-left px-4 py-3 font-medium text-sm">Status</th>
              <th className="text-left px-4 py-3 font-medium text-sm">Progress</th>
              <th className="text-left px-4 py-3 font-medium text-sm">Deadline</th>
              <th className="text-left px-4 py-3 font-medium text-sm">Department</th>
              <th className="text-left px-4 py-3 font-medium text-sm">Team Size</th>
              <th className="text-left px-4 py-3 font-medium text-sm">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={project.id} className={index % 2 === 0 ? 'bg-white' : 'bg-muted/30'}>
                <td className="px-4 py-3">
                  <p className="font-medium">{project.name}</p>
                  <p className="text-xs text-muted-foreground">{project.client}</p>
                </td>
                <td className="px-4 py-3">
                  <StatusBadge status={project.status as any} />
                </td>
                <td className="px-4 py-3 w-40">
                  <ProgressBar value={project.progress} showLabel size="sm" />
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-3 w-3 mr-2" />
                    {new Date(project.deadline).toLocaleDateString()}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className="text-xs px-2 py-1 bg-secondary rounded-md">{project.department}</span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    {project.teamSize}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <Button variant="ghost" size="sm">View</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <p className="text-muted-foreground">Manage and monitor all your projects</p>
        </div>
        
        <NewProjectFormButton />
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
          <TabsList>
            <TabsTrigger value="all">All Projects</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="archived">Archived</TabsTrigger>
          </TabsList>
          
          <div className="flex gap-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'} 
              size="icon"
              className="h-9 w-9"
              onClick={() => setViewMode('grid')}
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 1H6.5V6H1.5V1ZM8.5 1H13.5V6H8.5V1ZM1.5 8H6.5V13H1.5V8ZM8.5 8H13.5V13H8.5V8Z" stroke="currentColor" strokeWidth="1"/>
              </svg>
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="icon"
              className="h-9 w-9"
              onClick={() => setViewMode('list')}
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 3H13.5M1.5 7.5H13.5M1.5 12H13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Button>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative w-full sm:max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search projects..." className="pl-8" />
          </div>
          
          <div className="flex gap-2 w-full sm:w-auto">
            <Select 
              defaultValue={sortBy}
              onValueChange={(value) => setSortBy(value as ProjectSortOption)}
            >
              <SelectTrigger className="w-full sm:w-[180px]">
                <div className="flex items-center">
                  <ArrowUpDown className="mr-2 h-3.5 w-3.5" />
                  <span>Sort By</span>
                </div>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="deadline">Deadline</SelectItem>
                <SelectItem value="status">Status</SelectItem>
                <SelectItem value="progress">Progress</SelectItem>
              </SelectContent>
            </Select>
            
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="product">Product</SelectItem>
                <SelectItem value="it">IT</SelectItem>
                <SelectItem value="sales">Sales</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <TabsContent value="all" className="space-y-4 mt-4">
          {viewMode === 'grid' ? renderGridView() : renderListView()}
        </TabsContent>
        
        <TabsContent value="active" className="mt-4">
          <div className="flex items-center justify-center h-40">
            <p className="text-muted-foreground">Displaying active projects</p>
          </div>
        </TabsContent>
        
        <TabsContent value="completed" className="mt-4">
          <div className="flex items-center justify-center h-40">
            <p className="text-muted-foreground">Displaying completed projects</p>
          </div>
        </TabsContent>
        
        <TabsContent value="archived" className="mt-4">
          <div className="flex items-center justify-center h-40">
            <p className="text-muted-foreground">Displaying archived projects</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Projects;

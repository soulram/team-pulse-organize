
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StatusBadge from '@/components/StatusBadge';
import ProgressBar from '@/components/ProgressBar';
import { Button } from "@/components/ui/button";
import { AreaChart, BarChart } from "@/components/ui/chart";
import { Clock, Calendar, ArrowRight, AlertCircle, CheckCircle2 } from 'lucide-react';

const Dashboard: React.FC = () => {
  // Mock data
  const projectsData = [
    { id: 1, name: "Website Redesign", status: 'on-track', progress: 68, dueDate: "2025-06-15", tasks: 24, completedTasks: 16 },
    { id: 2, name: "Mobile App Development", status: 'at-risk', progress: 45, dueDate: "2025-06-30", tasks: 36, completedTasks: 14 },
    { id: 3, name: "Marketing Campaign", status: 'completed', progress: 100, dueDate: "2025-05-20", tasks: 18, completedTasks: 18 },
    { id: 4, name: "Product Launch", status: 'off-track', progress: 30, dueDate: "2025-06-10", tasks: 22, completedTasks: 6 }
  ];

  const upcomingDeadlines = [
    { id: 1, title: "Submit wireframes", project: "Website Redesign", dueDate: "2025-05-25" },
    { id: 2, title: "Finalize copy", project: "Marketing Campaign", dueDate: "2025-05-26" },
    { id: 3, title: "Backend integration", project: "Mobile App Development", dueDate: "2025-05-28" },
    { id: 4, title: "Stakeholder presentation", project: "Product Launch", dueDate: "2025-05-30" }
  ];

  // Mock chart data
  const projectProgressData = [
    { name: 'Week 1', progress: 20 },
    { name: 'Week 2', progress: 35 },
    { name: 'Week 3', progress: 48 },
    { name: 'Week 4', progress: 65 },
    { name: 'Week 5', progress: 74 },
  ];

  const taskCompletionData = [
    { name: 'Mon', completed: 4, created: 6 },
    { name: 'Tue', completed: 6, created: 4 },
    { name: 'Wed', completed: 8, created: 5 },
    { name: 'Thu', completed: 7, created: 3 },
    { name: 'Fri', completed: 9, created: 2 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's an overview of your projects.</p>
        </div>
        
        <Button>
          Create New Project
        </Button>
      </div>

      {/* Key metrics cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <path d="M2 10h20" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground mt-1">
              3 added this month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pending Tasks</CardTitle>
            <ListTodo className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">54</div>
            <p className="text-xs text-muted-foreground mt-1">
              18 due this week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Team Members</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground mt-1">
              4 currently available
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">72%</div>
            <p className="text-xs text-muted-foreground mt-1">
              +5% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Projects and Charts tabs */}
      <Tabs defaultValue="projects" className="space-y-4">
        <TabsList>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>
        
        <TabsContent value="projects" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projectsData.map(project => (
              <Card key={project.id} className="task-card">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{project.name}</CardTitle>
                    <StatusBadge status={project.status as any} />
                  </div>
                  <CardDescription>
                    <div className="flex items-center text-xs text-muted-foreground mt-1">
                      <Calendar className="h-3 w-3 mr-1" />
                      Due: {new Date(project.dueDate).toLocaleDateString('en-US', { 
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ProgressBar value={project.progress} className="mb-4" />
                  <div className="flex justify-between text-sm">
                    <span>{project.completedTasks}/{project.tasks} tasks completed</span>
                    <Button variant="ghost" size="sm" className="h-6 p-0">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="analytics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-md">Project Progress</CardTitle>
                <CardDescription>Weekly cumulative progress</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <AreaChart
                  data={projectProgressData}
                  index="name"
                  categories={["progress"]}
                  colors={["blue"]}
                  valueFormatter={(value) => `${value}%`}
                  className="h-[300px]"
                />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-md">Task Completion</CardTitle>
                <CardDescription>Daily tasks created vs completed</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <BarChart
                  data={taskCompletionData}
                  index="name"
                  categories={["completed", "created"]}
                  colors={["green", "blue"]}
                  valueFormatter={(value) => `${value} tasks`}
                  className="h-[300px]"
                />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="resources" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-md">Team Workload</CardTitle>
                <CardDescription>Current resource allocation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-1 text-sm">
                      <span>Design Team</span>
                      <span className="text-muted-foreground">85%</span>
                    </div>
                    <ProgressBar value={85} showLabel={false} size="lg" className="mb-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1 text-sm">
                      <span>Development Team</span>
                      <span className="text-muted-foreground">72%</span>
                    </div>
                    <ProgressBar value={72} showLabel={false} size="lg" className="mb-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1 text-sm">
                      <span>Marketing Team</span>
                      <span className="text-muted-foreground">45%</span>
                    </div>
                    <ProgressBar value={45} showLabel={false} size="lg" className="mb-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1 text-sm">
                      <span>QA Team</span>
                      <span className="text-muted-foreground">60%</span>
                    </div>
                    <ProgressBar value={60} showLabel={false} size="lg" className="mb-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-md">Upcoming Deadlines</CardTitle>
                <CardDescription>Tasks due in next 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingDeadlines.map(deadline => (
                    <div key={deadline.id} className="flex items-center gap-3 pb-3 border-b last:border-0">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Clock className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{deadline.title}</p>
                        <p className="text-xs text-muted-foreground">{deadline.project}</p>
                      </div>
                      <div className="text-xs">{new Date(deadline.dueDate).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric'
                      })}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Recent Activity and Issue Alerts */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <CheckCircle2 className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm">John Doe completed task "Create wireframes"</p>
                  <p className="text-xs text-muted-foreground">Today at 10:30 AM</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="text-sm">Sarah Smith added comments to "User Flow"</p>
                  <p className="text-xs text-muted-foreground">Today at 9:15 AM</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-amber-100 p-2 rounded-full">
                  <AlertCircle className="h-4 w-4 text-amber-600" />
                </div>
                <div>
                  <p className="text-sm">Project "Mobile App" status changed to "At Risk"</p>
                  <p className="text-xs text-muted-foreground">Yesterday at 4:30 PM</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="bg-red-50 text-red-900">
            <CardTitle className="text-lg flex items-center">
              <AlertCircle className="h-5 w-5 mr-2" />
              Issue Alerts
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-4">
              <div className="bg-red-50 p-3 rounded-md">
                <div className="flex justify-between items-start">
                  <p className="text-sm font-medium text-red-900">Budget Overrun: Mobile App Dev</p>
                  <span className="text-xs bg-red-200 text-red-800 px-2 py-1 rounded">High</span>
                </div>
                <p className="text-xs text-red-800 mt-1">Exceeded budget by 15%. Requires immediate attention.</p>
              </div>
              <div className="bg-amber-50 p-3 rounded-md">
                <div className="flex justify-between items-start">
                  <p className="text-sm font-medium text-amber-900">Resource Conflict: Website Redesign</p>
                  <span className="text-xs bg-amber-200 text-amber-800 px-2 py-1 rounded">Medium</span>
                </div>
                <p className="text-xs text-amber-800 mt-1">Designer resources double-booked next week.</p>
              </div>
              <Button className="w-full" variant="ghost">
                View All Issues
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;

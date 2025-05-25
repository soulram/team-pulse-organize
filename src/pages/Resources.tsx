import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Search, Users, Mail, Phone } from 'lucide-react';
import { AddResourceFormButton } from '@/components/FormButtons';

// Mock resource data
const resources = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Senior UX Designer',
    department: 'Design',
    skills: ['UI/UX', 'Wireframing', 'User Research', 'Prototyping'],
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    avatar: '/placeholder.svg',
    initials: 'JD',
    utilization: 85,
    availability: 'Available',
    currentProjects: ['Website Redesign', 'Mobile App']
  },
  {
    id: 2,
    name: 'Alice Smith',
    role: 'Frontend Developer',
    department: 'Engineering',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
    email: 'alice.smith@example.com',
    phone: '+1 (555) 234-5678',
    avatar: '/placeholder.svg',
    initials: 'AS',
    utilization: 100,
    availability: 'Fully Booked',
    currentProjects: ['Website Redesign']
  },
  {
    id: 3,
    name: 'Bob Johnson',
    role: 'Backend Developer',
    department: 'Engineering',
    skills: ['Node.js', 'Express', 'MongoDB', 'API Design'],
    email: 'bob.johnson@example.com',
    phone: '+1 (555) 345-6789',
    avatar: '/placeholder.svg',
    initials: 'BJ',
    utilization: 65,
    availability: 'Available',
    currentProjects: ['CRM Implementation', 'Mobile App']
  },
  {
    id: 4,
    name: 'Carol Davis',
    role: 'Marketing Specialist',
    department: 'Marketing',
    skills: ['Content Strategy', 'SEO', 'Analytics', 'Social Media'],
    email: 'carol.davis@example.com',
    phone: '+1 (555) 456-7890',
    avatar: '/placeholder.svg',
    initials: 'CD',
    utilization: 75,
    availability: 'Available',
    currentProjects: ['Marketing Campaign']
  },
  {
    id: 5,
    name: 'David Wilson',
    role: 'Project Manager',
    department: 'Product',
    skills: ['Agile', 'Scrum', 'Jira', 'Stakeholder Management'],
    email: 'david.wilson@example.com',
    phone: '+1 (555) 567-8901',
    avatar: '/placeholder.svg',
    initials: 'DW',
    utilization: 90,
    availability: 'Limited Availability',
    currentProjects: ['Product Launch', 'CRM Implementation']
  },
  {
    id: 6,
    name: 'Eve Brown',
    role: 'Content Writer',
    department: 'Marketing',
    skills: ['Copywriting', 'Editing', 'Content Strategy', 'SEO'],
    email: 'eve.brown@example.com',
    phone: '+1 (555) 678-9012',
    avatar: '/placeholder.svg',
    initials: 'EB',
    utilization: 50,
    availability: 'Available',
    currentProjects: ['Marketing Campaign']
  },
  {
    id: 7,
    name: 'Frank Miller',
    role: 'Mobile Developer',
    department: 'Engineering',
    skills: ['React Native', 'iOS', 'Android', 'API Integration'],
    email: 'frank.miller@example.com',
    phone: '+1 (555) 789-0123',
    avatar: '/placeholder.svg',
    initials: 'FM',
    utilization: 80,
    availability: 'Limited Availability',
    currentProjects: ['Mobile App']
  },
  {
    id: 8,
    name: 'Grace Lee',
    role: 'Sales Director',
    department: 'Sales',
    skills: ['Negotiation', 'Client Management', 'Strategy', 'Leadership'],
    email: 'grace.lee@example.com',
    phone: '+1 (555) 890-1234',
    avatar: '/placeholder.svg',
    initials: 'GL',
    utilization: 70,
    availability: 'Available',
    currentProjects: ['Sales Training Program']
  }
];

// Department utilization data
const departmentUtilization = [
  { name: 'Design', utilization: 80, headcount: 4 },
  { name: 'Engineering', utilization: 95, headcount: 12 },
  { name: 'Marketing', utilization: 75, headcount: 6 },
  { name: 'Product', utilization: 85, headcount: 5 },
  { name: 'Sales', utilization: 65, headcount: 7 },
];

// Skills distribution data for chart
const skillsDistribution = [
  { name: 'Design', count: 8 },
  { name: 'Frontend', count: 12 },
  { name: 'Backend', count: 9 },
  { name: 'Mobile', count: 6 },
  { name: 'DevOps', count: 4 },
  { name: 'Product', count: 7 },
  { name: 'Marketing', count: 5 }
];

const ResourceCard: React.FC<{ resource: typeof resources[0] }> = ({ resource }) => {
  // Get the right color for utilization
  const getUtilizationColor = () => {
    if (resource.utilization < 50) return 'bg-green-500';
    if (resource.utilization < 80) return 'bg-amber-500';
    return 'bg-red-500';
  };
  
  return (
    <Card className="resource-card">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={resource.avatar} alt={resource.name} />
            <AvatarFallback>{resource.initials}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-lg">{resource.name}</CardTitle>
            <p className="text-sm text-muted-foreground">{resource.role}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="mb-3">
          <Badge className="mr-1">{resource.department}</Badge>
          <Badge variant={resource.availability === 'Available' ? 'outline' : resource.availability === 'Limited Availability' ? 'secondary' : 'destructive'}>
            {resource.availability}
          </Badge>
        </div>
        
        <div className="mb-3">
          <div className="flex justify-between mb-1 text-sm">
            <span>Utilization</span>
            <span>{resource.utilization}%</span>
          </div>
          <Progress value={resource.utilization} className="h-2" indicatorClassName={getUtilizationColor()} />
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">{resource.email}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">{resource.phone}</span>
          </div>
        </div>
        
        <div className="mt-3">
          <p className="text-sm font-medium mb-2">Skills</p>
          <div className="flex flex-wrap gap-1">
            {resource.skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-xs">{skill}</Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button variant="outline" size="sm" className="w-full">View Profile</Button>
      </CardFooter>
    </Card>
  );
};

const Resources: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Resources</h1>
          <p className="text-muted-foreground">Manage your team members and their allocations</p>
        </div>
        
        <AddResourceFormButton />
      </div>

      <Tabs defaultValue="people" className="space-y-4">
        <TabsList>
          <TabsTrigger value="people">People</TabsTrigger>
          <TabsTrigger value="teams">Teams</TabsTrigger>
          <TabsTrigger value="utilization">Utilization</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
        </TabsList>
        
        <div className="flex justify-between items-center">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search resources..." className="pl-8" />
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm">Export</Button>
            <Button variant="outline" size="sm">Filter</Button>
          </div>
        </div>
        
        <TabsContent value="people" className="space-y-4 mt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {resources.map(resource => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="teams" className="space-y-4 mt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Design Team */}
            <Card>
              <CardHeader>
                <CardTitle>Design Team</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-2xl font-bold">4</p>
                    <p className="text-sm text-muted-foreground">Team Members</p>
                  </div>
                  <div>
                    <Badge className="bg-green-500">Available</Badge>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Utilization</span>
                    <span>80%</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm font-medium">Current Projects</p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline">Website Redesign</Badge>
                    <Badge variant="outline">Mobile App</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">View Team</Button>
              </CardFooter>
            </Card>
            
            {/* Engineering Team */}
            <Card>
              <CardHeader>
                <CardTitle>Engineering Team</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-2xl font-bold">12</p>
                    <p className="text-sm text-muted-foreground">Team Members</p>
                  </div>
                  <div>
                    <Badge className="bg-amber-500">Limited</Badge>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Utilization</span>
                    <span>95%</span>
                  </div>
                  <Progress value={95} className="h-2" indicatorClassName="bg-red-500" />
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm font-medium">Current Projects</p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline">Website Redesign</Badge>
                    <Badge variant="outline">Mobile App</Badge>
                    <Badge variant="outline">CRM Implementation</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">View Team</Button>
              </CardFooter>
            </Card>
            
            {/* Marketing Team */}
            <Card>
              <CardHeader>
                <CardTitle>Marketing Team</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-2xl font-bold">6</p>
                    <p className="text-sm text-muted-foreground">Team Members</p>
                  </div>
                  <div>
                    <Badge className="bg-green-500">Available</Badge>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Utilization</span>
                    <span>75%</span>
                  </div>
                  <Progress value={75} className="h-2" indicatorClassName="bg-amber-500" />
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm font-medium">Current Projects</p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline">Marketing Campaign</Badge>
                    <Badge variant="outline">Product Launch</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">View Team</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="utilization" className="space-y-4 mt-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Department Utilization</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {departmentUtilization.map(dept => (
                    <div key={dept.name}>
                      <div className="flex justify-between items-center mb-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">{dept.name}</span>
                          <Badge variant="outline" className="text-xs">{dept.headcount} members</Badge>
                        </div>
                        <span className="text-sm">{dept.utilization}%</span>
                      </div>
                      <Progress 
                        value={dept.utilization} 
                        className="h-2 mb-1" 
                        indicatorClassName={
                          dept.utilization < 70 ? "bg-green-500" : 
                          dept.utilization < 90 ? "bg-amber-500" : 
                          "bg-red-500"
                        }
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Availability Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-green-100 rounded-md p-4 text-center">
                    <p className="text-3xl font-bold text-green-700">12</p>
                    <p className="text-sm text-green-700">Available</p>
                  </div>
                  <div className="bg-amber-100 rounded-md p-4 text-center">
                    <p className="text-3xl font-bold text-amber-700">8</p>
                    <p className="text-sm text-amber-700">Limited</p>
                  </div>
                  <div className="bg-red-100 rounded-md p-4 text-center">
                    <p className="text-3xl font-bold text-red-700">4</p>
                    <p className="text-sm text-red-700">Unavailable</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-sm font-medium mb-3">Resource Forecast</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>Current Week</span>
                        <span>85%</span>
                      </div>
                      <Progress value={85} className="h-2" indicatorClassName="bg-amber-500" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>Next Week</span>
                        <span>92%</span>
                      </div>
                      <Progress value={92} className="h-2" indicatorClassName="bg-red-500" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>Next Month</span>
                        <span>75%</span>
                      </div>
                      <Progress value={75} className="h-2" indicatorClassName="bg-amber-500" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="skills" className="space-y-4 mt-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Skills Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {skillsDistribution.map(skill => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm">{skill.count} resources</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2.5">
                        <div 
                          className="bg-primary h-2.5 rounded-full" 
                          style={{ width: `${(skill.count / 12) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Skills Gap Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 border border-yellow-300 bg-yellow-50 rounded-md">
                    <h4 className="font-medium text-yellow-800 flex items-center gap-2 mb-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-alert-triangle"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
                      AI/ML Engineers
                    </h4>
                    <p className="text-sm text-yellow-700">Critical shortage. Consider hiring or training.</p>
                  </div>
                  
                  <div className="p-3 border border-yellow-300 bg-yellow-50 rounded-md">
                    <h4 className="font-medium text-yellow-800 flex items-center gap-2 mb-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-alert-triangle"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
                      DevOps Specialists
                    </h4>
                    <p className="text-sm text-yellow-700">Limited availability. May need contractors.</p>
                  </div>
                  
                  <div className="p-3 border border-green-300 bg-green-50 rounded-md">
                    <h4 className="font-medium text-green-800 flex items-center gap-2 mb-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                      Frontend Developers
                    </h4>
                    <p className="text-sm text-green-700">Sufficient coverage. Well-staffed.</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button className="w-full">
                    Generate Full Skills Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Resources;

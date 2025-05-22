
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Settings: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your application preferences and configuration</p>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="permissions">Permissions</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Company Information</CardTitle>
              <CardDescription>Update your company details and preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Company Name</Label>
                  <Input id="company-name" placeholder="Acme Inc." defaultValue="Acme Inc." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-website">Company Website</Label>
                  <Input id="company-website" placeholder="https://example.com" defaultValue="https://acme-inc.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company-address">Company Address</Label>
                <Textarea id="company-address" placeholder="123 Business Street, City, Country" defaultValue="123 Main Street, San Francisco, CA 94105" />
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company-phone">Phone</Label>
                  <Input id="company-phone" placeholder="+1 (555) 123-4567" defaultValue="+1 (555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-email">Email</Label>
                  <Input id="company-email" placeholder="info@example.com" defaultValue="info@acme-inc.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-timezone">Timezone</Label>
                  <Select defaultValue="america-los_angeles">
                    <SelectTrigger id="company-timezone">
                      <SelectValue placeholder="Select timezone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="america-los_angeles">Pacific Time (US)</SelectItem>
                      <SelectItem value="america-new_york">Eastern Time (US)</SelectItem>
                      <SelectItem value="europe-london">GMT (London)</SelectItem>
                      <SelectItem value="europe-paris">Central European Time</SelectItem>
                      <SelectItem value="asia-tokyo">Japan Time</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <Button className="mt-4">Save Changes</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Application Settings</CardTitle>
              <CardDescription>Configure general application behavior</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="auto-save">Auto Save</Label>
                  <div className="text-sm text-muted-foreground">
                    Automatically save changes every 5 minutes
                  </div>
                </div>
                <Switch id="auto-save" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="analytics">Usage Analytics</Label>
                  <div className="text-sm text-muted-foreground">
                    Allow anonymous usage data collection
                  </div>
                </div>
                <Switch id="analytics" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="fiscal-year-start">Fiscal Year Start</Label>
                  <div className="text-sm text-muted-foreground">
                    Set the start of your financial year for reports
                  </div>
                </div>
                <Select defaultValue="january">
                  <SelectTrigger id="fiscal-year-start" className="w-[180px]">
                    <SelectValue placeholder="Select start month" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="january">January</SelectItem>
                    <SelectItem value="april">April</SelectItem>
                    <SelectItem value="july">July</SelectItem>
                    <SelectItem value="october">October</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="working-days">Working Days</Label>
                  <div className="text-sm text-muted-foreground">
                    Configure your organization's working days
                  </div>
                </div>
                <Select defaultValue="monday-friday">
                  <SelectTrigger id="working-days" className="w-[180px]">
                    <SelectValue placeholder="Select working days" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="monday-friday">Monday - Friday</SelectItem>
                    <SelectItem value="monday-saturday">Monday - Saturday</SelectItem>
                    <SelectItem value="all-days">All Days</SelectItem>
                    <SelectItem value="custom">Custom</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button className="mt-4">Save Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="appearance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Theme Settings</CardTitle>
              <CardDescription>Customize the appearance of your application</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Color Theme</Label>
                <div className="grid grid-cols-3 gap-2">
                  <div className="flex items-center border rounded-md p-2 cursor-pointer bg-blue-50">
                    <div className="h-5 w-5 rounded-full bg-blue-500 mr-2"></div>
                    <span>Blue (Default)</span>
                  </div>
                  <div className="flex items-center border rounded-md p-2 cursor-pointer">
                    <div className="h-5 w-5 rounded-full bg-purple-500 mr-2"></div>
                    <span>Purple</span>
                  </div>
                  <div className="flex items-center border rounded-md p-2 cursor-pointer">
                    <div className="h-5 w-5 rounded-full bg-green-500 mr-2"></div>
                    <span>Green</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Color Mode</Label>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center border rounded-md p-2 cursor-pointer bg-blue-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
                    <span>Light Mode</span>
                  </div>
                  <div className="flex items-center border rounded-md p-2 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
                    <span>Dark Mode</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Sidebar Position</Label>
                <Select defaultValue="left">
                  <SelectTrigger>
                    <SelectValue placeholder="Select sidebar position" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="left">Left</SelectItem>
                    <SelectItem value="right">Right</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label>Density</Label>
                <Select defaultValue="comfortable">
                  <SelectTrigger>
                    <SelectValue placeholder="Select display density" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="comfortable">Comfortable</SelectItem>
                    <SelectItem value="compact">Compact</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button className="mt-4">Apply Theme</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Customization</CardTitle>
              <CardDescription>Upload custom brand assets</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Company Logo</Label>
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded bg-gray-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                  </div>
                  <Button variant="outline">Upload New Logo</Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Favicon</Label>
                <div className="flex items-center gap-4">
                  <div className="h-8 w-8 rounded bg-gray-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                  </div>
                  <Button variant="outline">Upload New Favicon</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Configure how and when you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Email Notifications</h3>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Task Assignments</Label>
                    <div className="text-sm text-muted-foreground">
                      Notify when tasks are assigned to you
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Task Updates</Label>
                    <div className="text-sm text-muted-foreground">
                      Notify when tasks you're assigned to are updated
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Project Updates</Label>
                    <div className="text-sm text-muted-foreground">
                      Notify when projects you're a member of are updated
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Approaching Deadlines</Label>
                    <div className="text-sm text-muted-foreground">
                      Notify when deadlines are approaching
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">In-App Notifications</h3>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Task Comments</Label>
                    <div className="text-sm text-muted-foreground">
                      Show notifications for comments on your tasks
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Mentions</Label>
                    <div className="text-sm text-muted-foreground">
                      Show notifications when you're mentioned
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>System Notifications</Label>
                    <div className="text-sm text-muted-foreground">
                      Show notifications for system updates
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
              
              <Button className="mt-4">Save Preferences</Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="permissions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>User Roles & Permissions</CardTitle>
              <CardDescription>Manage access controls for different user roles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-md">
                  <div className="bg-muted p-3 flex justify-between items-center border-b">
                    <h3 className="font-medium">Administrator</h3>
                    <Badge>Full Access</Badge>
                  </div>
                  <div className="p-3 text-sm text-muted-foreground">
                    Administrators have full access to all features and settings of the application.
                  </div>
                </div>
                
                <div className="border rounded-md">
                  <div className="bg-muted p-3 flex justify-between items-center border-b">
                    <h3 className="font-medium">Project Manager</h3>
                    <Button variant="outline" size="sm">Edit Permissions</Button>
                  </div>
                  <div className="p-3">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between items-center">
                        <span>Create Projects</span>
                        <Switch size="sm" defaultChecked />
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Delete Projects</span>
                        <Switch size="sm" defaultChecked />
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Manage Users</span>
                        <Switch size="sm" defaultChecked />
                      </div>
                      <div className="flex justify-between items-center">
                        <span>View Reports</span>
                        <Switch size="sm" defaultChecked />
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Manage Billing</span>
                        <Switch size="sm" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="border rounded-md">
                  <div className="bg-muted p-3 flex justify-between items-center border-b">
                    <h3 className="font-medium">Team Member</h3>
                    <Button variant="outline" size="sm">Edit Permissions</Button>
                  </div>
                  <div className="p-3">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between items-center">
                        <span>View Projects</span>
                        <Switch size="sm" defaultChecked />
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Create & Edit Tasks</span>
                        <Switch size="sm" defaultChecked />
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Delete Tasks</span>
                        <Switch size="sm" />
                      </div>
                      <div className="flex justify-between items-center">
                        <span>View Reports</span>
                        <Switch size="sm" defaultChecked />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="border rounded-md">
                  <div className="bg-muted p-3 flex justify-between items-center border-b">
                    <h3 className="font-medium">Guest / Client</h3>
                    <Button variant="outline" size="sm">Edit Permissions</Button>
                  </div>
                  <div className="p-3">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between items-center">
                        <span>View Projects</span>
                        <Switch size="sm" defaultChecked />
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Add Comments</span>
                        <Switch size="sm" defaultChecked />
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Approve Deliverables</span>
                        <Switch size="sm" defaultChecked />
                      </div>
                    </div>
                  </div>
                </div>
                
                <Button>Save Role Permissions</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="integrations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Connected Services</CardTitle>
              <CardDescription>Connect and manage third-party integrations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border rounded-md">
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 bg-blue-100 rounded flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Google Calendar</h3>
                      <p className="text-sm text-muted-foreground">Sync events and meetings</p>
                    </div>
                  </div>
                  <Button variant="outline">Connect</Button>
                </div>
              </div>
              
              <div className="border rounded-md">
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 bg-blue-100 rounded flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z"/><path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z"/><path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z"/><path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z"/></svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Slack</h3>
                      <p className="text-sm text-muted-foreground">Get notifications in your Slack channels</p>
                    </div>
                  </div>
                  <Badge className="bg-green-500">Connected</Badge>
                </div>
              </div>
              
              <div className="border rounded-md">
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 bg-blue-100 rounded flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Dropbox</h3>
                      <p className="text-sm text-muted-foreground">Access files and documents</p>
                    </div>
                  </div>
                  <Button variant="outline">Connect</Button>
                </div>
              </div>
              
              <div className="border rounded-md">
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 bg-blue-100 rounded flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.29 7 12 12 20.71 7"/><line x1="12" x2="12" y1="22" y2="12"/></svg>
                    </div>
                    <div>
                      <h3 className="font-medium">GitHub</h3>
                      <p className="text-sm text-muted-foreground">Link repositories and track issues</p>
                    </div>
                  </div>
                  <Button variant="outline">Connect</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>API Access</CardTitle>
              <CardDescription>Manage API keys and access tokens</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>API Key</Label>
                <div className="flex gap-2">
                  <Input type="password" value="sk_live_51NXcGHKZT5..." readOnly className="font-mono" />
                  <Button variant="outline">Copy</Button>
                  <Button variant="outline">Regenerate</Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Your API key provides full access to your account. Keep it secure!
                </p>
              </div>
              
              <div className="space-y-2">
                <Label>Webhook URL</Label>
                <Input placeholder="https://your-app.com/api/webhook" />
              </div>
              
              <Button>Save API Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;

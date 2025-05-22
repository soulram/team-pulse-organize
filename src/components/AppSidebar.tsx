
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { LayoutDashboard, FolderKanban, ListTodo, CalendarDays, Settings } from 'lucide-react';
import { Users } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: FolderKanban, label: 'Projects', path: '/projects' },
  { icon: ListTodo, label: 'Tasks', path: '/tasks' },
  { icon: CalendarDays, label: 'Calendar', path: '/calendar' },
  { icon: Users, label: 'Resources', path: '/resources' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

const AppSidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) => {
    return `flex items-center py-2 px-3 rounded-md transition-colors ${
      isActive
        ? 'bg-sidebar-accent text-sidebar-accent-foreground'
        : 'text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground'
    } ${collapsed ? 'justify-center' : ''}`;
  };

  return (
    <Sidebar 
      className={`bg-sidebar transition-all duration-300 ${
        collapsed ? 'w-16' : 'w-64'
      }`} 
    >
      <SidebarContent>
        <div className="mt-4 mb-8">
          {!collapsed && (
            <div className="px-3 py-2">
              <SidebarTrigger className="ml-auto block text-sidebar-foreground hover:text-white" onClick={() => setCollapsed(!collapsed)} />
            </div>
          )}
        </div>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.path} className={getNavLinkClass}>
                      <item.icon className={`h-5 w-5 ${collapsed ? '' : 'mr-3'}`} />
                      {!collapsed && <span>{item.label}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {!collapsed && (
          <div className="absolute bottom-4 left-0 right-0 px-3">
            <div className="rounded-md bg-sidebar-accent p-3">
              <h4 className="text-sm font-medium text-sidebar-foreground mb-2">Need Help?</h4>
              <p className="text-xs text-sidebar-foreground/80 mb-3">
                Check our documentation for guides and FAQs.
              </p>
              <button className="w-full py-1.5 px-2 text-xs bg-sidebar-primary text-sidebar-primary-foreground rounded">
                Open Documentation
              </button>
            </div>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;

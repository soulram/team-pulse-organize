
import React from 'react';
import AppSidebar from "./AppSidebar";
import Header from "./Header";
import { Toaster } from "@/components/ui/sonner";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Header />
      <div className="flex flex-1 w-full">
        <AppSidebar />
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
      <Toaster />
    </div>
  );
};

export default AppLayout;

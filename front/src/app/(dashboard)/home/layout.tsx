
"use client"

import * as React from "react"
import Sidebar from "@/components/globals/Sidebar"
import Navbar from "@/components/globals/Navbar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {


  const [sidebarOpen, setSidebarOpen] = React.useState(false)

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar for larger screens */}
      <aside className="hidden w-64 overflow-y-auto border-r bg-gray-100/40 lg:block">
        <Sidebar />
      </aside>

      {/* Sidebar for mobile screens */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen} >
        <SheetContent side="left" className="w-64 p-0 bg-[#fafbfb]">
          <Sidebar />
        </SheetContent>
      </Sheet>

      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Navbar */}
        <Navbar onMenuClick={() => setSidebarOpen(true)} />

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
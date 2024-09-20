import { LayoutDashboard, FileText, Users, LogOut, UserPlus } from "lucide-react"
import Link from 'next/link'
import React from 'react'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

const Sidebar = () => {
  return (
<div className="flex h-full flex-col gap-2 ">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <Link href="#" className="flex items-center gap-2 font-semibold">
          <LayoutDashboard className="h-6 w-6" />
          <span className="">Acme Inc</span>
        </Link>
      </div>
      <ScrollArea className="flex-1 px-2 py-2">
        <nav className="flex flex-col gap-1">
          <Link
            href="/home"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
          >
            <LayoutDashboard className="h-4 w-4" />
            Home
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
          >
            <FileText className="h-4 w-4" />
            Documents
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
          >
            <Users className="h-4 w-4" />
            Clients
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
          >
            <UserPlus className="h-4 w-4" />
            New Client
          </Link>
        </nav>
      </ScrollArea>
      <div className="mt-auto p-4">
        <Button variant="outline" className="w-full" size="sm">
          <LogOut className="mr-2 h-4 w-4" />
          Log out
        </Button>
      </div>
    </div>
  )
}

export default Sidebar
import { LayoutDashboard, Users, LogOut, UserPlus, Activity } from "lucide-react"
import Link from 'next/link'
import React from 'react'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import useAuthStore from "@/stores/useAuthStore"
import { useRouter } from 'next/navigation';

const Sidebar = () => {

  const { logout } = useAuthStore();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/"); // Redirige al inicio de sesión tras cerrar sesión
  };

  return (
<div className="flex h-full flex-col gap-2 ">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <Link href="/home" className="flex items-center gap-2 font-semibold">
          <Activity className="h-6 w-6" />
          <span className="">AI Care</span>
        </Link>
      </div>
      <ScrollArea className="flex-1 px-2 py-2">
        <nav className="flex flex-col gap-1">
          <Button variant="ghost" asChild className="justify-start">
            <Link
              href="/home"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
            >
              <LayoutDashboard className="h-4 w-4" />
              Home
            </Link>
          </Button>
          <Button variant="ghost" asChild className="justify-start">
            <Link
              href="/clients"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
            >
              <Users className="h-4 w-4" />
              Clients
            </Link>
          </Button>

          <Button variant="ghost" asChild className="justify-start">
            <Link
              href="/new-client"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
            >
              <UserPlus className="h-4 w-4" />
              Register Client
            </Link>
            </Button>
        </nav>
      </ScrollArea>
      <div className="mt-auto p-4">
        <Button onClick={handleLogout} variant="outline"  className="w-full" size="sm">
          <LogOut className="mr-2 h-4 w-4" />
          Log out
        </Button>
      </div>
    </div>
  )
}

export default Sidebar
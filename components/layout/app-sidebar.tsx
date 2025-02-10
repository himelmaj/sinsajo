"use client"

import * as React from "react"

import { HomeIcon, GearIcon, BellIcon, PersonIcon } from "@radix-ui/react-icons"
import { NavUser } from "@/components/layout/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,

} from "@/components/ui/sidebar"


import { useRouter } from 'next/navigation'

const data = {
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: HomeIcon,
    },

    {
      title: "Settings",
      url: "/settings",
      icon: GearIcon,
    },
    {
      title: "Notifications",
      url: "/notifications",
      icon: BellIcon,
    },
    {
      title: "Profile",
      url: "/profile",
      icon: PersonIcon,
    
    }
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  const router = useRouter()
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader id="website-title">
        Sinsajo
      </SidebarHeader>
      <SidebarContent>

        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title} onClick={() => router.push(item.url)}>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  {item.title}
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>


      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

import { ChevronRight, Command } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,  
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { SidebarUser } from "../ui/sidebar-user";

// Define the type for the items prop
type Item = {
  title: string;
  url: string;
  icon: React.ElementType; // Assuming icon is a React component
};
type User = {
  name: string;
  email: string;
};

export function AppSidebar({ items, titles, user }: { items: Item[], titles: string, user: User }) {
  return (
    <Sidebar variant="inset" collapsible="icon" className="bg-[#19191a]">
      {/* SIDEBAR HEADER */}
      <SidebarHeader >
        <SidebarMenu >
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary ">
                  <Command className="size-4 text-sidebar-primary-foreground" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Rakshak</span>
                  <span className="truncate text-xs">{titles}</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      {/* SIDEBAR CONTENT */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      {/* SIDEBAR FOOTER */}
      <SidebarFooter>
        <SidebarUser user={user} />
      </SidebarFooter>
    </Sidebar>
  )
}
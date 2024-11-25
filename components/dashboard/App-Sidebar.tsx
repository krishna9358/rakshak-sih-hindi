import { Command } from "lucide-react"

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

// Define the type for the items prop
type Item = {
  title: string;
  url: string;
  icon: React.ElementType; // Assuming icon is a React component
};

export function AppSidebar({ items }: { items: Item[] }) {
  return (
    <Sidebar variant="inset" collapsible="icon" className="bg-[#19191a]">
      {/* SIDEBAR HEADER */}
      <SidebarHeader >
        <SidebarMenu >
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary ">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Rakshak</span>
                  <span className="truncate text-xs">Department</span>
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
        {/* <NavUser user={data.user} /> */}
        
      </SidebarFooter>
    </Sidebar>
  )
}

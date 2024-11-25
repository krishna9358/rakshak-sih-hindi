import {
    Breadcrumb,
    BreadcrumbSeparator,
    BreadcrumbPage,
    BreadcrumbLink,
    BreadcrumbItem,
    BreadcrumbList,
  } from "@/components/ui/breadcrumb";
  import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
  import { Separator } from "@/components/ui/separator";
  import { SidebarProvider } from "@/components/ui/sidebar";
  import { AppSidebar } from "@/components/dashboard/App-Sidebar";
  import { items } from "@/config/data/sidebard";
  
  export default function Staff() {
    return (
      <>
      <SidebarProvider>
      <AppSidebar items={items.auditStaff} />
      <SidebarInset>  
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="#">Staff</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>Home</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
              <div className="aspect-video rounded-xl bg-[#19191a]" />
              <div className="aspect-video rounded-xl bg-[#19191a]" />
              <div className="aspect-video rounded-xl bg-[#19191a]" />
            </div>
            <div className="min-h-[100vh] flex-1 rounded-xl bg-[#19191a] md:min-h-min" />
          </div>
      </SidebarInset>
      </SidebarProvider>
    </>
    );
  }
  
"use client"
import { AppSidebar } from '@/components/dashboard/App-Sidebar'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { Separator } from '@radix-ui/react-separator'
import React, { useState } from 'react'
import { items } from "@/config/data/sidebar";
import ResourceRecord from './resourceRecord/ResourceRecord'
import RepairReplacement from './repairReplacement/RepairReplacement'
import ResourceRequest from './resourceRequest/ResourceRequest'
import InterStationRecords from './interStationRecords/InterStationRecords'

export default function StationMainComponent() {
    const [selectedComponent, setSelectedComponent] = useState<string>("");

    const renderComponent = () => {
      switch (selectedComponent) {
        case "संसाधन रिकॉर्ड":
          return <ResourceRecord/>;
        case "मरम्मत और प्रतिस्थापन":
          return <RepairReplacement />;
        case "संसाधन अनुरोध":
          return <ResourceRequest />;
        case "इंटर-स्टेशन रिकॉर्ड":
          return <InterStationRecords />;
        default:
          return <ResourceRecord/>;
      }
    };
  return (
    <div>
      <SidebarProvider>
        <AppSidebar
          items={items.stations}
          titles={items.titles.stations}
          user={items.user}
          onSelect={setSelectedComponent}
        />
        <SidebarInset className="bg-white">
          <header className="flex h-16 shrink-0 items-center gap-2">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1 text-[#563007]" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#" className='text-[#563007]'>स्टेशन</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage className='text-[#563007]'>होम</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-[#563007] rounded-md ml-auto ">
              <a href="http://localhost:3000/station" className="text-white">अंग्रेज़ी</a>
            </div>
          </header>
          <div className="gap-4 p-4 pt-0">{renderComponent()}</div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}

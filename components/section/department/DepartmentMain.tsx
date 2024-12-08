"use client";
import { useState } from "react";
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
import { items } from "@/config/data/sidebar";
import Credentials from "./credentials/Credentials";
import GPSRecord from "./GPSRecord/GPSRecord";
import BudgetAllocation from "./budgetAllocation/BudgetAllocation";
import SelfInventory from "./selfInventory/SelfInventory";
import BudgetPrediction from "./budgetPrediction/BudgetPrediction";
export default function GpsMainComponent() {
  const [selectedComponent, setSelectedComponent] = useState<string>("");

  const renderComponent = () => {
    switch (selectedComponent) {
      case "Credentials":
        return <Credentials />;
      case "Budget Predictions":
        return <BudgetPrediction />;
      case "GPS's  Record":
        return <GPSRecord />;
      case "Budget Allocation":
        return <BudgetAllocation />;
      case "Self Inventory":
        return <SelfInventory />;
      default:
        return <Credentials />;
    }
  };

  return (
    <div>
      <SidebarProvider>
        <AppSidebar
          items={items.department}
          titles={items.titles.department}
          user={items.user}
          onSelect={setSelectedComponent}
        />
        <SidebarInset className="">
          <header className="flex h-16 shrink-0 items-center gap-2">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">Department</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Home</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          <div className="gap-4 p-4 pt-0">{renderComponent()}</div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}

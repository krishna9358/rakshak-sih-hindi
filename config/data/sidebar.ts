import {
  Key,
  DollarSign,
  Box,
  Clipboard,
  FileText,
  PlusCircle,
  User,
  Share2,
  Home,
  QrCode,
} from "lucide-react";

// Menu items.
export const items = {
  user: {
    name: "Krishna Mohan",
    email: "krishanmohank974@gmail.com",
    avatar: "/profile.jpeg",
  },
  titles: {
    department: "Department",
    stations: "Stations",
    admin: "Admin",
    auditStaff: "Audit Staff",
  },
  department: [
    {
      title: "Credentials",
      url: "#",
      icon: Key,
    },
    {
      title: "Budget Predictions",
      url: "#",
      icon: DollarSign,
    },
    {
      title: "Inventory (Resources)",
      url: "#",
      icon: Box,
    },
    {
      title: "Station's Record",
      url: "#",
      icon: Clipboard,
    },
    {
      title: "Audit Info",
      url: "#",
      icon: FileText,
    },
    {
      title: "Resource Requests",
      url: "#",
      icon: PlusCircle,
    },
    {
      title: "Staff Details",
      url: "#",
      icon: User,
    },
    {
      title: "Resource Allocation",
      url: "#",
      icon: Share2,
    },
  ],
  stations: [
    {
      title: "Station Inventory",
      url: "#",
      icon: Box,
    },
    {
      title: "Internal Audit",
      url: "#",
      icon: Clipboard,
    },
    {
      title: "Resource Requirement",
      url: "#",
      icon: DollarSign,
    },
    {
      title: "Raise a Ticket",
      url: "#",
      icon: PlusCircle,
    },
  ],
  admin: [
    {
      title: "Home",
      url: "#",
      icon: Home,
    },
    {
      title: "Credentials Generation",
      url: "#",
      icon: Key,
    },
    {
      title: "Tickets",
      url: "#",
      icon: Clipboard,
    },
  ],
  auditStaff: [
    {
      title: "Audit Process",
      url: "#",
      icon: QrCode,
    },
  ],
};

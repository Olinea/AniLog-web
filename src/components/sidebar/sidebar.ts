import { type Icon } from "@tabler/icons-react";
import {
  IconDashboard,
  IconDatabase,
  IconFileWord,
  IconHelp,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react";

export interface NavItem {
  title: string;
  url: string;
  icon: Icon;
}

export interface DocumentItem {
  name: string;
  url: string;
  icon: Icon;
}

export interface SidebarData {
  navMain: NavItem[];
  navSecondary: NavItem[];
  documents: DocumentItem[];
}

export const sidebarData: SidebarData = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Animals",
      url: "/animals",
      icon: IconDashboard,
    },
    {
      title: "Team",
      url: "/team",
      icon: IconUsers,
    },
  ],

  navSecondary: [
    {
      title: "Settings",
      url: "/settings",
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: "/help",
      icon: IconHelp,
    },
    {
      title: "Search",
      url: "/search",
      icon: IconSearch,
    },
  ],

  documents: [
    {
      name: "Data Library",
      url: "#",
      icon: IconDatabase,
    },
    {
      name: "Reports",
      url: "#",
      icon: IconReport,
    },
    {
      name: "Word Assistant",
      url: "#",
      icon: IconFileWord,
    },
  ],
};

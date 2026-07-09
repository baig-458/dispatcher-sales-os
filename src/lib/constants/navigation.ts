import {
  LayoutDashboard,
  PhoneCall,
  Truck,
  Handshake,
  Package,
  BarChart3,
  Settings,
} from "lucide-react";

export const navigation = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Leads",
    href: "/leads",
    icon: PhoneCall,
  },
  {
    title: "Carriers",
    href: "/carriers",
    icon: Truck,
  },
  {
    title: "Brokers",
    href: "/brokers",
    icon: Handshake,
  },
  {
    title: "Loads",
    href: "/loads",
    icon: Package,
  },
  {
    title: "Reports",
    href: "/reports",
    icon: BarChart3,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];
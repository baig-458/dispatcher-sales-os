import Logo from "./Logo";
import SidebarItem from "./SidebarItem";
import { navigation } from "@/lib/constants/navigation";

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-64 flex-col border-r bg-background p-4">
      <Logo />

      <nav className="mt-8 flex flex-1 flex-col gap-2">
        {navigation.map((item) => (
          <SidebarItem
            key={item.href}
            title={item.title}
            href={item.href}
            icon={item.icon}
          />
        ))}
      </nav>
    </aside>
  );
}
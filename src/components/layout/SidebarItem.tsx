import Link from "next/link";
import { LucideIcon } from "lucide-react";

type SidebarItemProps = {
  title: string;
  href: string;
  icon: LucideIcon;
};

export default function SidebarItem({
  title,
  href,
  icon: Icon,
}: SidebarItemProps) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
    >
      <Icon className="h-5 w-5" />
      {title}
    </Link>
  );
}
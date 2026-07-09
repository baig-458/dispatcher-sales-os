import { Bell, Moon } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Navbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-background px-6">
      <div>
        <h2 className="text-xl font-semibold">Dashboard</h2>
        <p className="text-sm text-muted-foreground">
          Welcome back 👋
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button className="rounded-lg p-2 hover:bg-muted transition">
          <Moon className="h-5 w-5" />
        </button>

        <button className="rounded-lg p-2 hover:bg-muted transition">
          <Bell className="h-5 w-5" />
        </button>

        <Avatar>
          <AvatarFallback>MC</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
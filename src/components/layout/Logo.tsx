import { Truck } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
        <Truck className="h-5 w-5" />
      </div>

      <div>
        <h1 className="text-lg font-bold tracking-tight">
          DSOS
        </h1>

        <p className="text-xs text-muted-foreground">
          Dispatcher Sales OS
        </p>
      </div>
    </div>
  );
}
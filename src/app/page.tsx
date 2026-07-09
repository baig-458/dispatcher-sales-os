import AppLayout from "@/components/layout/AppLayout";
import KPICard from "@/components/dashboard/KPICard";

import {
  Truck,
  PhoneCall,
  Package,
  DollarSign,
} from "lucide-react";

export default function HomePage() {
  return (
    <AppLayout>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <KPICard
          title="Active Carriers"
          value="124"
          icon={Truck}
        />

        <KPICard
          title="Today's Calls"
          value="32"
          icon={PhoneCall}
        />

        <KPICard
          title="Active Loads"
          value="18"
          icon={Package}
        />

        <KPICard
          title="Revenue"
          value="$24,300"
          icon={DollarSign}
        />
      </div>
    </AppLayout>
  );
}
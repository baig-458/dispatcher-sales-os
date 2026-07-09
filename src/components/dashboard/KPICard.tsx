import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type KPICardProps = {
  title: string;
  value: string;
  icon: LucideIcon;
};

export default function KPICard({
  title,
  value,
  icon: Icon,
}: KPICardProps) {
  return (
    <Card>
      <CardContent className="flex items-center justify-between p-6">
        <div>
          <p className="text-sm text-muted-foreground">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {value}
          </h2>
        </div>

        <Icon className="h-8 w-8 text-muted-foreground" />
      </CardContent>
    </Card>
  );
}
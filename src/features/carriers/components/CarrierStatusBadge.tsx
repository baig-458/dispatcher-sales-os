import { Badge } from "@/components/ui/badge";

type Props = {
  status: string;
};

export default function CarrierStatusBadge({ status }: Props) {
  switch (status) {
    case "ACTIVE":
      return <Badge>Active</Badge>;

    case "LEAD":
      return <Badge variant="secondary">Lead</Badge>;

    case "BLACKLISTED":
      return <Badge variant="destructive">Blacklisted</Badge>;

    default:
      return <Badge variant="outline">{status}</Badge>;
  }
}
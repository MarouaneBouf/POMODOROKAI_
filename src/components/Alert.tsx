import { RocketIcon } from "@radix-ui/react-icons";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

type AlertNotifProps = {
  name: string;
  content: string;
};

export function AlertNotif(props: AlertNotifProps) {
  return (
    <Alert>
      <RocketIcon className="h-4 w-4" />
      <AlertTitle>{props.name}</AlertTitle>
      <AlertDescription>{props.content}</AlertDescription>
    </Alert>
  );
}

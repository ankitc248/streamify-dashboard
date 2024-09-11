import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCurrency } from "./CurrencyProvider";
export default function CurrencySelector({
  className,
}: {
  readonly className?: string;
}) {
  const { setCurrency } = useCurrency();
  const classes =
    "text-xs w-20 rounded p-2 h-6 font-base shadow-sm border-neutral-300 dark:text-neutral-100 " +
    className;
  return (
    <div className="p-1">
      <Select
        defaultValue="USD"
        onValueChange={(value) => {
          setCurrency(value);
        }}
      >
        <SelectTrigger className={classes}>
          <SelectValue placeholder="CUR" defaultValue="USD" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="USD" className="text-xs">
            USD $
          </SelectItem>
          <SelectItem value="EUR" className="text-xs">
            EUR €
          </SelectItem>
          <SelectItem value="INR" className="text-xs">
            INR ₹
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

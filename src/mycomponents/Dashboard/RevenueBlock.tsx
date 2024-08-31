import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ReactElement, useState } from "react";
import { PrettyNumber } from "@/helpers/Helpers";

const RevenueBlock = ({
  amount = 124,
  arrow,
}: {
  amount: number;
  arrow: ReactElement;
}) => {
  const currencyRates: { [key: string]: [number, string] } = {
    USD: [1, "$"],
    EUR: [0.9, "€"],
    INR: [83.89, "₹"],
  };
  const [currency, setCurrency] = useState("USD");
  return (
    <div className="flex gap-4 items-center justify-between">
      <div className="">
        <Select
          defaultValue="USD"
          onValueChange={(value) => {
            setCurrency(value);
          }}
        >
          <SelectTrigger className="w-[72px] text-xs rounded-full p-2 h-6 font-base shadow-sm border-neutral-300 dark:text-neutral-100">
            <SelectValue placeholder="CUR" defaultValue="US" />
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
      <div className="flex items-baseline gap-1">
        <PrettyNumber
          number={amount * currencyRates[currency][0]}
          extraBefore={currencyRates[currency][1]}
          precision={2}
        />
        {arrow}
      </div>
    </div>
  );
};

export default RevenueBlock;

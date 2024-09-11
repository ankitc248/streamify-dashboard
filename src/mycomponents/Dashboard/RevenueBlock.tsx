import { ReactElement } from "react";
import { PrettyNumber } from "@/helpers/Helpers";
import { useCurrency } from "../CurrencyProvider";

const RevenueBlock = ({
  amount = 124,
  arrow,
}: {
  amount: number;
  arrow: ReactElement;
}) => {
  const { getCurrencyDetails } = useCurrency();
  const currencyRates = getCurrencyDetails();
  return (
    <div className="flex gap-1 items-center truncate mt-4 w-full flex-1 justify-end">
      <div className="flex items-baseline gap-1 truncate self-end">
        <PrettyNumber
          number={amount * currencyRates[0]}
          extraBefore={currencyRates[1]}
          precision={2}
        />
        {arrow}
      </div>
    </div>
  );
};

export default RevenueBlock;

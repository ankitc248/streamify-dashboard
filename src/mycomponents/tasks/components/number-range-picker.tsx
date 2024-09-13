import React from "react";
import { Hash, X, Minus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
interface NumberRangePickerProps {
  readonly setCountFilter: React.Dispatch<React.SetStateAction<boolean>>;
  readonly resetFilters: () => void;
  readonly numberBetweenFilterFn: (filterValue: object | undefined) => void;
}
export default function NumberRangePicker({
  setCountFilter,
  resetFilters,
  numberBetweenFilterFn,
}: NumberRangePickerProps) {
  const [fromNumber, setFromNumber] = React.useState<number>(0);
  const [toNumber, setToNumber] = React.useState<number>(0);
  const handleFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > toNumber) {
      setFromNumber(value);
      setToNumber(value);
    } else {
      setFromNumber(value);
    }
    const filterValue = { from: value, to: toNumber };
    handleBeforeFilter(filterValue);
  };

  const handleToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setToNumber(value);
    const filterValue = { from: fromNumber, to: value };
    handleBeforeFilter(filterValue);
  };

  const handleBeforeFilter = (filterValue: { from: number; to: number }) => {
    numberBetweenFilterFn(filterValue);
  };
  return (
    <div className="flex items-center justify-center shadow-sm border border-dashed border-neutral-400 rounded-md h-8 dark:border-neutral-800 dark:text-neutral-200 overflow-hidden">
      <Hash size={14} className="mx-2 w-4" />
      <Input
        type="number"
        className="border-none ring-0 text-xs p-1 w-16 focus-visible:ring-transparent text-center dark:bg-neutral-950"
        placeholder="From"
        value={fromNumber}
        onChange={handleFromChange}
      />
      <Minus size={10} className="" />
      <Input
        type="number"
        className="border-none ring-0 text-xs p-1 w-16 focus-visible:ring-transparent text-center dark:bg-neutral-950"
        placeholder="To"
        value={toNumber}
        min={fromNumber}
        onChange={handleToChange}
      />
      <Button
        className="rounded-none h-full p-2 border-l dark:border-neutral-800 border-dashed border-neutral-400"
        variant={"ghost"}
        onClick={() => {
          setCountFilter(false);
          resetFilters();
        }}
      >
        <X size={16} />
      </Button>
    </div>
  );
}

import * as React from "react";
import { CalendarIcon, X, Minus } from "lucide-react";
import { format, subMonths } from "date-fns";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface CalendarDateRangePickerProps {
  readonly className?: string;
  readonly setCalendarFilter: React.Dispatch<React.SetStateAction<boolean>>;
  readonly dateBetweenFilterFn: (filterValue: DateRange | undefined) => void;
  readonly resetFilters: () => void;
}
export function CalendarDateRangePicker({
  className,
  setCalendarFilter,
  dateBetweenFilterFn,
  resetFilters,
}: CalendarDateRangePickerProps) {
  const [fromDate, setFromDate] = React.useState<Date | undefined>(undefined);
  const [toDate, setToDate] = React.useState<Date | undefined>(undefined);
  const [isFromCalendarOpen, setIsFromCalendarOpen] =
    React.useState<boolean>(false);
  const [isToCalendarOpen, setIsToCalendarOpen] =
    React.useState<boolean>(false);

  const handleDateChangeFn = (from: Date | undefined, to: Date | undefined) => {
    const dateRange = { from: from, to: to };
    dateBetweenFilterFn(dateRange);
    setIsFromCalendarOpen(false);
    setIsToCalendarOpen(false);
  };

  return (
    <div className="flex items-center border shadow-sm border-dashed border-neutral-400 rounded-md h-8 dark:border-neutral-800 dark:text-neutral-200 overflow-hidden">
      <CalendarIcon size={14} className="mx-2" />
      <div className={cn("grid gap-2 text-xs", className)}>
        <Popover open={isFromCalendarOpen} onOpenChange={setIsFromCalendarOpen}>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant={"ghost"}
              className={cn(
                "w-auto min-w-16 justify-center text-xs h-8 font-normal rounded-none p-2 text-center",
                !fromDate && "text-muted-foreground"
              )}
            >
              {fromDate ? (
                <>{format(fromDate, "LLL dd, y")}</>
              ) : (
                <span>From</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-auto p-0 bg-white dark:bg-neutral-950 dark:border-neutral-700 text-xs"
            align="start"
          >
            <Calendar
              mode="single"
              captionLayout="dropdown-buttons"
              fromYear={1997}
              toYear={toDate ? toDate.getFullYear() : 2025}
              defaultMonth={subMonths(new Date(), 1)}
              selected={fromDate}
              onSelect={(from) => {
                setFromDate(from);
                handleDateChangeFn(from, toDate);
              }}
              numberOfMonths={1}
              className="dark:bg-neutral-950 dark:text-neutral-300 dark:border-neutral-800"
            />
          </PopoverContent>
        </Popover>
      </div>
      <Minus size={10} />
      <div className={cn("grid gap-2 text-xs", className)}>
        <Popover open={isToCalendarOpen} onOpenChange={setIsToCalendarOpen}>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant={"ghost"}
              className={cn(
                "w-auto min-w-16 text-center justify-center text-xs h-8 font-normal rounded-none p-2",
                !toDate && "text-muted-foreground"
              )}
            >
              {toDate ? <>{format(toDate, "LLL dd, y")}</> : <span>To</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-auto p-0 bg-white dark:bg-neutral-950 dark:border-neutral-700 text-xs"
            align="start"
          >
            <Calendar
              initialFocus
              mode="single"
              captionLayout="dropdown-buttons"
              toYear={2025}
              fromDate={fromDate}
              defaultMonth={subMonths(new Date(), 1)}
              selected={toDate}
              onSelect={(to) => {
                setToDate(to);
                handleDateChangeFn(fromDate, to);
              }}
              numberOfMonths={1}
              className="dark:bg-neutral-950 dark:text-neutral-300 dark:border-neutral-800"
            />
          </PopoverContent>
        </Popover>
      </div>
      <Button
        className="rounded-none h-full p-2 border-l dark:border-neutral-800 border-dashed border-neutral-400"
        variant={"ghost"}
        onClick={() => {
          setCalendarFilter(false);
          resetFilters();
        }}
      >
        <X size={16} />
      </Button>
    </div>
  );
}

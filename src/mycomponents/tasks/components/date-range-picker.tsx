import * as React from "react";
import { CalendarIcon, X } from "lucide-react";
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
  const [date, setDate] = React.useState<DateRange | undefined>(undefined);

  const handleDateChangeFn = (dateRange: DateRange | undefined) => {
    setDate(dateRange);
    dateBetweenFilterFn(dateRange);
  };

  return (
    <div className="flex items-center border rounded-md h-8 dark:border-neutral-800 dark:text-neutral-200 overflow-hidden">
      <div className={cn("grid gap-2 text-xs", className)}>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant={"ghost"}
              className={cn(
                "w-[260px] justify-start text-left text-xs h-8 font-normal rounded-none",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, "LLL dd, y")} -{" "}
                    {format(date.to, "LLL dd, y")}
                  </>
                ) : (
                  format(date.from, "LLL dd, y")
                )
              ) : (
                <span>Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-auto p-0 bg-white dark:bg-neutral-950 dark:border-neutral-700 text-xs"
            align="end"
          >
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={subMonths(new Date(), 1)}
              selected={date}
              onSelect={(data) => {
                console.log(data);
                handleDateChangeFn(data);
              }}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>
      </div>
      <Button
        className="rounded-none h-full"
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

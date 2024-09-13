"use client";

import { X } from "lucide-react";
import { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTableViewOptions } from "./data-table-view-options";
import { DataTableFilters } from "./data-table-filters";
import { CalendarDateRangePicker } from "./date-range-picker";
import { DateRange } from "react-day-picker";
import { useState } from "react";
import NumberRangePicker from "./number-range-picker";
interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  // const isFiltered = table.getState().columnFilters.length > 0;
  const [calendarFilter, setCalendarFilter] = useState<boolean>(false);
  const [countFilter, setCountFilter] = useState<boolean>(false);

  const dateBetweenFilterFn = (filterValue: DateRange | undefined) => {
    table.getColumn("dateStreamed")?.setFilterValue(filterValue);
  };
  const numberBetweenFilterFn = (filterValue: object | undefined) => {
    table.getColumn("streamCount")?.setFilterValue(filterValue);
  };
  const resetSelectedFilters = (columnName: string) => {
    table.getColumn(columnName)?.setFilterValue(undefined);
  };
  return (
    <>
      <div className="flex items-center justify-between gap-2">
        <div className="flex flex-1 items-center space-x-2 gap-1">
          <Input
            placeholder="Search records..."
            value={
              (table.getColumn("songName")?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              table.getColumn("songName")?.setFilterValue(event.target.value)
            }
            className="h-8 text-xs w-[250px] dark:text-neutral-100 dark:border-neutral-700/70 dark:bg-neutral-900 ring-neutral-900 focus-visible:outline dark:focus-visible:outline-neutral-300 focus-visible:[box-shadow:none] dark:ring-neutral-300"
          />
          {(table.getColumn("songName")?.getFilterValue() as string) ? (
            <Button
              variant="ghost"
              onClick={() => table.resetColumnFilters()}
              className="h-8 px-2 dark:text-neutral-300 dark:bg-neutral-900"
            >
              <X className="h-4 w-4" />
            </Button>
          ) : null}
        </div>
        <DataTableViewOptions table={table} />
      </div>
      <div className="flex gap-2 flex-wrap">
        <DataTableFilters
          setCalendarFilter={setCalendarFilter}
          calendarFilter={calendarFilter}
          setCountFilter={setCountFilter}
          countFilter={countFilter}
        />
        <div className="flex gap-2 flex-wrap">
          {calendarFilter && (
            <CalendarDateRangePicker
              setCalendarFilter={setCalendarFilter}
              dateBetweenFilterFn={dateBetweenFilterFn}
              resetFilters={() => resetSelectedFilters("dateStreamed")}
            />
          )}
          {countFilter && (
            <NumberRangePicker
              setCountFilter={setCountFilter}
              resetFilters={() => resetSelectedFilters("streamCount")}
              numberBetweenFilterFn={numberBetweenFilterFn}
            />
          )}
        </div>
      </div>
    </>
  );
}

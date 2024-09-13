import { Calendar, ListFilter, Hash, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function DataTableFilters({
  setCalendarFilter,
  calendarFilter,
  setCountFilter,
  countFilter,
}: {
  readonly setCalendarFilter: React.Dispatch<React.SetStateAction<boolean>>;
  readonly calendarFilter: boolean;
  readonly setCountFilter: React.Dispatch<React.SetStateAction<boolean>>;
  readonly countFilter: boolean;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="text-xs h-8 dark:text-neutral-200">
          <ListFilter size={16} className="mr-2" />
          Filters
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56 bg-white dark:bg-neutral-950 dark:border-neutral-800 text-xs"
        align="start"
      >
        <DropdownMenuLabel className="text-xs dark:text-neutral-300">
          Choose filters
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-neutral-200 dark:bg-neutral-800" />
        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={() => setCalendarFilter(!calendarFilter)}
            className="text-xs dark:text-neutral-100 focus:bg-neutral-100 dark:focus:bg-neutral-800 capitalize"
          >
            <Calendar className="mr-2 h-4 w-4" />
            <span className="flex gap-2 justify-between items-center w-full">
              Date Streamed {calendarFilter && <Check size={14} />}
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="text-xs dark:text-neutral-100 focus:bg-neutral-100 dark:focus:bg-neutral-800 capitalize"
            onClick={() => setCountFilter(!countFilter)}
          >
            <Hash className="mr-2 h-4 w-4" />
            <span className="flex gap-2 justify-between items-center w-full">
              Streams Count {countFilter && <Check size={14} />}
            </span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

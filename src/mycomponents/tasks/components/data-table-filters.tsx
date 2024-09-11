import { Calendar, FilterIcon, Hash, Check } from "lucide-react";

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

export function DataTableFilters({ setCalendarFilter, calendarFilter }: any) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="text-xs h-8 dark:text-neutral-200">
          Filters
          <FilterIcon size={16} className="ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white dark:bg-neutral-950 dark:border-neutral-700 text-xs">
        <DropdownMenuLabel className="text-xs dark:text-neutral-300">
          Select filters
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
          <DropdownMenuItem className="text-xs dark:text-neutral-100 focus:bg-neutral-100 dark:focus:bg-neutral-800 capitalize">
            <Hash className="mr-2 h-4 w-4" />
            <span>Streams</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

import { EyeOff, ArrowUp, ArrowDown, ChevronsUpDown } from "lucide-react";
import { Column } from "@tanstack/react-table";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>;
  }

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="-ml-3 h-8 data-[state=open]:bg-accent/10 text-xs font-bold dark:text-neutral-200 dark:data-[state=open]:bg-accent/20"
          >
            <span>{title}</span>
            {column.getIsSorted() === "desc" ? (
              <ArrowDown className="ml-2 h-4 w-4" />
            ) : column.getIsSorted() === "asc" ? (
              <ArrowUp className="ml-2 h-4 w-4" />
            ) : (
              <ChevronsUpDown className="ml-2 h-4 w-4" />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="bg-white dark:bg-neutral-950 dark:border-neutral-700/70"
        >
          <DropdownMenuItem
            onClick={() => column.toggleSorting(false)}
            className="text-xs dark:text-neutral-100 focus:bg-neutral-100 dark:focus:bg-neutral-800"
          >
            <ArrowUp className="mr-2 h-3.5 w-3.5" />
            Asc
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => column.toggleSorting(true)}
            className="text-xs dark:text-neutral-100 focus:bg-neutral-100 dark:focus:bg-neutral-800"
          >
            <ArrowDown className="mr-2 h-3.5 w-3.5" />
            Desc
          </DropdownMenuItem>
          {column.getCanHide() && (
            <>
              <DropdownMenuSeparator className="bg-neutral-200 dark:bg-neutral-800" />
              <DropdownMenuItem
                onClick={() => column.toggleVisibility(false)}
                className="text-xs dark:text-neutral-100 focus:bg-neutral-100 dark:focus:bg-neutral-800"
              >
                <EyeOff className="mr-2 h-3.5 w-3.5" />
                Hide
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

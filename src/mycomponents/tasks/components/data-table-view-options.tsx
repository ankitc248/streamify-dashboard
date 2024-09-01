"use client";

import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Settings2 } from "lucide-react";
import { Table } from "@tanstack/react-table";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { RecentStreamsLink } from "@/DummyData";

interface DataTableViewOptionsProps<TData> {
  table: Table<TData>;
}

export function DataTableViewOptions<TData>({
  table,
}: DataTableViewOptionsProps<TData>) {
  type CustomColumnDef<TData> = ColumnDef<TData> & {
    columnTitle?: string;
    accessorKey?: string;
  };
  const columnDefs =
    table._getColumnDefs() as CustomColumnDef<RecentStreamsLink>[];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="ml-auto h-8 flex text-xs font-semibold dark:text-neutral-200"
        >
          <Settings2 className="mr-2 h-4 w-4" />
          View
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-white dark:bg-neutral-950 dark:border-neutral-700/70"
      >
        <DropdownMenuLabel className="text-xs dark:text-neutral-100">
          Toggle columns
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-neutral-200 dark:bg-neutral-800" />
        {table
          .getAllColumns()
          .filter(
            (column) =>
              typeof column.accessorFn !== "undefined" && column.getCanHide()
          )
          .map((column) => {
            const columnDef = columnDefs.find(
              (c) => c.accessorKey === column.id
            );
            const columnTitle = columnDef?.columnTitle ?? "Title";
            return (
              <DropdownMenuCheckboxItem
                key={column.id}
                checked={column.getIsVisible()}
                onCheckedChange={(value) => column.toggleVisibility(!!value)}
                className="text-xs dark:text-neutral-100 focus:bg-neutral-100 dark:focus:bg-neutral-800 capitalize"
              >
                {columnTitle}
              </DropdownMenuCheckboxItem>
            );
          })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

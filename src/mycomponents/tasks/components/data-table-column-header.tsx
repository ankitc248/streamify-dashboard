import { ArrowUp, ArrowDown, ChevronsUpDown } from "lucide-react";
import { Column } from "@tanstack/react-table";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

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
  const arrowIcon = () => {
    if (column.getIsSorted() === "desc") {
      return <ArrowUp className="ml-2 h-4 w-4" />;
    } else if (column.getIsSorted() === "asc") {
      return <ArrowDown className="ml-2 h-4 w-4" />;
    } else {
      return <ChevronsUpDown className="ml-2 h-4 w-4" />;
    }
  };
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <Button
        variant="ghost"
        size="sm"
        className="-ml-3 h-8 data-[state=open]:bg-accent/10 text-xs font-bold dark:text-neutral-200 dark:data-[state=open]:bg-accent/20"
        onClick={() =>
          column.getIsSorted() === "asc"
            ? column.toggleSorting(true)
            : column.toggleSorting(false)
        }
      >
        <span>{title}</span>
        {arrowIcon()}
      </Button>
    </div>
  );
}

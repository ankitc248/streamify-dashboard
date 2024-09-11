"use client";

import { ColumnDef } from "@tanstack/react-table";
import { RecentStreamsLink } from "@/DummyData";
import { DataTableColumnHeader } from "./data-table-column-header";

type CustomColumnDef<TData> = ColumnDef<TData> & {
  columnTitle?: string;
};

export const streamColumns: CustomColumnDef<RecentStreamsLink>[] = [
  {
    accessorKey: "songName",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        className="text-xs font-semibold"
        title="Song Name"
      />
    ),
    cell: ({ row }) => (
      <div className="text-neutral-700 font-medium dark:text-neutral-100">
        {row.getValue("songName")}
      </div>
    ),
    enableSorting: true,
    enableHiding: false,
    columnTitle: "Song Name",
  },
  {
    accessorKey: "artist",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        className="text-xs font-semibold"
        title="Artist"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className=" truncate">{row.getValue("artist")}</span>
        </div>
      );
    },
    columnTitle: "Artist",
  },
  {
    accessorKey: "dateStreamed",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        className="text-xs font-semibold"
        title="Date Streamed"
      />
    ),
    cell: ({ row }) => {
      const date = new Date(row.getValue("dateStreamed"));
      return (
        <div className="flex space-x-2 ">
          <span className="truncate">
            {String(date.getDate()).padStart(2, "0")}-
            {date.toLocaleString("en-US", { month: "short" }).toUpperCase()}-
            {String(date.getFullYear()).slice(-2)}
          </span>
        </div>
      );
    },
    enableSorting: true,
    enableHiding: true,
    columnTitle: "Date Streamed",
  },
  {
    accessorKey: "streamCount",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        className="text-xs font-semibold"
        title="Streams"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2 ">
          <span className="truncate text-accent/80 font-medium pl-3">
            {row.getValue("streamCount")}
          </span>
        </div>
      );
    },
    columnTitle: "Streams",
  },
  {
    accessorKey: "userId",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        className="text-xs font-semibold"
        title="User ID"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2 ">
          <span className="max-w-[100px] truncate">
            {row.getValue("userId")}
          </span>
        </div>
      );
    },
    columnTitle: "User ID",
  },
];

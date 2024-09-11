import { DataTable } from "./components/data-table";
import { recentStreamsData } from "@/DummyData.ts";
import { streamColumns } from "./components/stream-columns.tsx";
export default function TaskPage() {
  const streams = recentStreamsData;
  return (
    <div className="flex flex-1 flex-col mt-4">
      <DataTable data={streams} columns={streamColumns} />
    </div>
  );
}

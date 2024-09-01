import KeyMetrics from "./Sections/KeyMetrics";
import DataVisualization from "./Sections/DataVisualization";
import TaskPage from "../tasks/page";
export default function Dashboard() {
  return (
    <div className="flex-1 pb-10 lg:border-l dark:border-neutral-700/70">
      <header className="p-4">
        <h1 className="text-2xl font-bold dark:text-neutral-100">Dashboard</h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-300">
          All the information you need in one place
        </p>
      </header>
      <KeyMetrics />
      <DataVisualization />
      <section className="mt-1 p-4 dark:border-neutral-700/70">
        <h3 className="font-semibold dark:text-neutral-100 text-xl">
          Data Table
        </h3>
        <p className="text-neutral-500 dark:text-neutral-300 text-sm">
          Record of recent streams
        </p>
        <TaskPage />
      </section>
    </div>
  );
}

import KeyMetrics from "./Sections/KeyMetrics";
import DataVisualization from "./Sections/DataVisualization";
export default function Dashboard() {
  return (
    <div className="flex-1 pb-10 md:border-l dark:border-neutral-700/70">
      <header className="p-4">
        <h1 className="text-2xl font-medium dark:text-neutral-100">
          Dashboard
        </h1>
        <p className="text-xs text-neutral-500 dark:text-neutral-300">
          All the information you need in one place
        </p>
      </header>
      <KeyMetrics />
      <DataVisualization />
    </div>
  );
}

import KeyMetrics from "./Sections/KeyMetrics";
import { Music2 } from "lucide-react";
import { Suspense, lazy } from "react";

const LazyDataTable = lazy(() => import("./Sections/DataTable"));
const LazyDataVisualization = lazy(
  () => import("./Sections/DataVisualization")
);

export default function Dashboard({
  setCurrentlyInView,
}: {
  setCurrentlyInView: (id: string) => void;
}) {
  return (
    <div className="flex-1 pb-10 lg:border-l dark:border-neutral-700/70">
      <header className="p-4">
        <h1 className="text-2xl font-bold dark:text-neutral-100">Dashboard</h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-300">
          All the information you need in one place
        </p>
      </header>
      <KeyMetrics
        setCurrentlyInView={setCurrentlyInView}
        sectionID="key-metrics"
      />
      <Suspense fallback={<LoaderComponent />}>
        <LazyDataVisualization
          setCurrentlyInView={setCurrentlyInView}
          sectionID="data-visual"
        />
      </Suspense>
      <Suspense fallback={<LoaderComponent />}>
        <LazyDataTable
          setCurrentlyInView={setCurrentlyInView}
          sectionID="data-table"
        />
      </Suspense>
    </div>
  );
}

const LoaderComponent = () => {
  return (
    <div className="w-full p-4 flex justify-center items-center h-56">
      <Music2 size={24} color="#FE5829" className="animate-pulse opacity-0" />
    </div>
  );
};

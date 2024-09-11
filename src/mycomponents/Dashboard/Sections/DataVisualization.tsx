"use client";
import { LineChartBlock } from "./Charts/LineChartBlock";
import { PieChartBlock } from "./Charts/PieChartBlock";
import { VerticalBarChartBlock } from "./Charts/VerticalBarChartBlock";
import SectionContainer from "./SectionContainer";

export default function DataVisualization({
  setCurrentlyInView,
  sectionID,
}: {
  readonly setCurrentlyInView: (arg0: string) => void;
  readonly sectionID: string;
}) {
  return (
    <SectionContainer
      setCurrentlyInView={setCurrentlyInView}
      sectionID={sectionID}
    >
      <h3 className="font-semibold dark:text-neutral-100 text-xl">
        Data Visualization
      </h3>
      <p className="text-neutral-500 dark:text-neutral-300 text-sm mb-4">
        Interactive charts for your data
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 3xl:grid-cols-3 py-1 gap-5">
        <LineChartBlock />
        <PieChartBlock />
        <VerticalBarChartBlock />
      </div>
    </SectionContainer>
  );
}

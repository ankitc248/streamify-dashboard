import { keyMetricsData } from "@/DummyData";
import { ArrowUp } from "lucide-react";
import { PrettyNumber } from "@/helpers/Helpers";
import TopArtistDetails from "../TopArtistDetails";
import RevenueBlock from "../RevenueBlock";

export default function KeyMetrics() {
  return (
    <section className="mt-1 p-4 border-y dark:border-neutral-700/70">
      <h3 className="font-medium mb-3 dark:text-neutral-100 text-xl">Key Metrics</h3>
      <div className="flex gap-2 flex-wrap mb-6">
        <div className="flex gap-2 items-center bg-green-500/10 border border-green-500 p-1 px-3 rounded-full text-xs shadow-sm font-medium dark:text-neutral-100">
          <ArrowUp size={16} color="#00BB00" />
          <p className="">Higher than predicted</p>
        </div>
        <div className="flex gap-2 items-center bg-red-500/10 border border-red-500 p-1 px-3 rounded-full text-xs shadow-sm font-medium dark:text-neutral-100">
          <ArrowUp size={16} color="#CC0000" className="rotate-180" />
          <p className="">Lower than predicted</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-1 gap-5">
        {keyMetricsData.map((keyMetric, index) => (
          <div
            key={index}
            className={`rounded-2xl shadow-sm border p-4 flex flex-col justify-between hover:bg-accent/10 hover:border-accent/50 overflow-hidden relative dark:border-neutral-700/70 ${
              keyMetric.title === "Top Artist"
                ? "sm:col-span-2 max-w-[500px]"
                : ""
            }`}
          >
            <div className="flex gap-3 items-start justify-between">
              <div className="rounded-full aspect-square flex items-center justify-center mt-1 order-2">
                <keyMetric.icon
                  size={18}
                  color="#FE5829"
                  className={`${
                    keyMetric.title === "Total Streams" ? "animate-spin" : ""
                  }`}
                />
              </div>
              <div>
                <h4 className="font-medium dark:text-neutral-100">
                  {keyMetric.title}
                </h4>
                <p className="text-neutral-500 dark:text-neutral-300 text-xs text-pretty">
                  {keyMetric.description}
                </p>
              </div>
            </div>

            {keyMetric.title !== "Top Artist" &&
              keyMetric.title !== "Revenue" && (
                <div className="self-end mt-4 flex items-baseline gap-1">
                  <PrettyNumber number={keyMetric.value} count={index} />
                  {keyMetric.higherThanPredicted && (
                    <ArrowUp size={16} color="#00BB00" />
                  )}
                  {keyMetric.higherThanPredicted !== undefined &&
                    !keyMetric.higherThanPredicted && (
                      <ArrowUp
                        size={16}
                        color="#CC0000"
                        className="rotate-180"
                      />
                    )}
                </div>
              )}
            {keyMetric.title === "Revenue" && (
              <RevenueBlock
                amount={keyMetric.value}
                arrow={
                  keyMetric.higherThanPredicted ? (
                    <ArrowUp size={16} color="#00BB00" />
                  ) : (
                    <ArrowUp size={16} color="#CC0000" className="rotate-180" />
                  )
                }
              />
            )}
            {keyMetric.title === "Top Artist" && <TopArtistDetails />}
          </div>
        ))}
      </div>
    </section>
  );
}

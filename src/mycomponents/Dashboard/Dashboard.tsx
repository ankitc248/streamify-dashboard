import { keyMetricsData } from "@/DummyData";
import { ArrowUp } from "lucide-react";
import { PrettyNumber } from "@/helpers/Helpers";
import TopArtistDetails from "./TopArtistDetails";
import RevenueBlock from "./RevenueBlock";

export default function Dashboard() {
  return (
    <div className="flex-1">
      <header className="p-4">
        <h1 className="text-xl font-medium">Dashboard</h1>
        <p className="text-xs text-neutral-400">
          All the information you need in one place
        </p>
      </header>
      <section className="my-1 p-4 border-y">
        <h3 className="font-medium mb-3">Key Metrics</h3>
        <div className="flex gap-2 flex-wrap mb-6">
          <div className="flex gap-2 items-center bg-green-500/10 border border-green-500 p-1 px-3 rounded-full text-xs shadow-sm">
            <ArrowUp size={16} color="#00BB00" />
            <p className="">Higher than predicted</p>
          </div>
          <div className="flex gap-2 items-center bg-red-500/10 border border-red-500 p-1 px-3 rounded-full text-xs shadow-sm">
            <ArrowUp size={16} color="#CC0000" className="rotate-180" />
            <p className="">Lower than predicted</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-1 gap-5">
          {keyMetricsData.map((keyMetric, index) => (
            <div
              key={index}
              className={`rounded-xl border p-4 flex flex-col justify-between hover:shadow-sm hover:bg-accent/10 hover:border-accent/50 overflow-hidden relative ${
                (keyMetric.title === "Top Artist") ? "sm:col-span-2" : ""
              }`}
            >
              <div className="flex gap-3 items-start">
                <div className="rounded-full aspect-square flex items-center justify-center mt-1">
                  <keyMetric.icon
                    size={18}
                    color="#FE5829"
                    className={`${
                      keyMetric.title === "Total Streams" ? "animate-spin" : ""
                    }`}
                  />
                </div>
                <div>
                  <h4 className="font-medium">{keyMetric.title}</h4>
                  <p className="text-neutral-400 text-xs text-pretty">
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
                      <ArrowUp
                        size={16}
                        color="#CC0000"
                        className="rotate-180"
                      />
                    )
                  }
                />
              )}
              {keyMetric.title === "Top Artist" && <TopArtistDetails />}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

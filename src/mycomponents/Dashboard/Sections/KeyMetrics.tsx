import { keyMetricsData } from "@/DummyData";
import { ArrowUp } from "lucide-react";
import { PrettyNumber } from "@/helpers/Helpers";
import TopArtistDetails from "../TopArtistDetails";
import RevenueBlock from "../RevenueBlock";
import SectionContainer from "./SectionContainer";
import { Skeleton } from "@/components/ui/skeleton";
import { useState, useEffect } from "react";
export default function KeyMetrics({
  setCurrentlyInView,
  sectionID,
}: {
  setCurrentlyInView: (arg0: string) => void;
  sectionID: string;
}) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <SectionContainer
      setCurrentlyInView={setCurrentlyInView}
      sectionID={sectionID}
    >
      <h3 className="font-semibold mb-2 dark:text-neutral-100 text-xl">
        Key Metrics
      </h3>
      <div className="flex gap-2 flex-wrap mb-6">
        <div className="flex gap-2 items-center bg-green-500/10 border border-green-500 p-1 px-3 rounded-full text-xs font-medium dark:text-neutral-100">
          <ArrowUp size={16} color="#00BB00" />
          <p className="">Higher than predicted</p>
        </div>
        <div className="flex gap-2 items-center bg-red-500/10 border border-red-500 p-1 px-3 rounded-full text-xs font-medium dark:text-neutral-100">
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
                ? "sm:col-span-2 sm:max-w-[500px]"
                : ""
            }`}
          >
            {loading && (
              <div className="flex flex-col gap-3">
                <div className="flex justify-between w-full gap-2">
                  <div className="flex flex-col gap-2 w-full">
                    <Skeleton className="h-4 w-24 rounded-full" />
                    <Skeleton className="h-2 w-10/12 rounded-full" />
                  </div>
                  <Skeleton className="h-6 aspect-square rounded-full self-start" />
                </div>
                <Skeleton className="h-8 w-6/12 rounded-full mt-8 self-end" />
              </div>
            )}
            {!loading && (
              <>
                <div className="flex gap-3 items-start justify-between">
                  <div className="rounded-full aspect-square flex items-center justify-center mt-1 order-2">
                    <keyMetric.icon
                      size={18}
                      color="#FE5829"
                      className={`${
                        keyMetric.title === "Total Streams"
                          ? "animate-spin"
                          : ""
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
              </>
            )}
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  CartesianGrid,
  XAxis,
  Bar,
  BarChart,
  LabelList,
  Rectangle,
} from "recharts";
import { chartsData } from "@/DummyData";
import { Trophy } from "lucide-react";
import { AbbreviateNumber } from "@/helpers/Helpers";
import { Skeleton } from "@/components/ui/skeleton";
import { useState, useEffect } from "react";

export function VerticalBarChartBlock() {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  const chartData = chartsData[2].data;
  const chartConfig = {
    streams: {
      label: "Streams",
      color: "#FE5829",
    },
  } satisfies ChartConfig;

  type ChartDataEntry = (typeof chartData)[number];
  const maxValueIndex = chartData.reduce(
    (
      maxIndex: number,
      current: ChartDataEntry,
      index: number,
      array: ChartDataEntry[]
    ) => {
      const currentStreams = current.streams ?? -Infinity;
      const maxStreams = array[maxIndex].streams ?? -Infinity;
      return currentStreams > maxStreams ? index : maxIndex;
    },
    0
  );

  return (
    <div
      className={`rounded-xl border dark:border-neutral-700/70 p-4 flex flex-col justify-between hover:shadow-sm hover:bg-accent/10 hover:border-accent/50 overflow-hidden relative`}
    >
      {loading && (
        <div className="flex flex-col gap-3">
          <div className="flex justify-between w-full gap-2">
            <div className="flex flex-col gap-2 w-full">
              <Skeleton className="h-4 w-4/12 rounded-full" />
              <Skeleton className="h-2 w-10/12 rounded-full" />
            </div>
            <Skeleton className="h-6 aspect-square rounded-full self-start" />
          </div>
          <div className="h-64 flex justify-around items-end">
            <Skeleton className="w-1/12 h-8 rounded-none" />
            <Skeleton className="w-1/12 h-16 rounded-none" />
            <Skeleton className="w-1/12 h-32 rounded-none" />
            <Skeleton className="w-1/12 h-48 rounded-none" />
            <Skeleton className="w-1/12 h-56 rounded-none" />
          </div>
        </div>
      )}
      {!loading && (
        <>
          <div className="flex gap-3 items-start justify-between">
            <div className="rounded-full aspect-square flex items-center justify-center mt-1 order-2">
              <Trophy size={18} color="#FE5829" />
            </div>
            <div>
              <h4 className="font-medium dark:text-neutral-100">
                {chartsData[2].title}
              </h4>
              <p className="text-neutral-500 dark:text-neutral-300 text-xs text-pretty">
                {chartsData[2].description}
              </p>
            </div>
          </div>
          <div className="mt-4 p-2">
            <ChartContainer config={chartConfig} className="h-[300px] w-full">
              <BarChart accessibilityLayer data={chartData} barSize={48}>
                <CartesianGrid
                  vertical={false}
                  strokeDasharray="3 3"
                  className="stroke-neutral-300 dark:stroke-neutral-800"
                />
                <XAxis
                  dataKey="song"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  className="font-medium text-ellipsis hidden sm:block break-all"
                  interval={0}
                />
                <ChartTooltip
                  cursor={false}
                  content={
                    <ChartTooltipContent labelClassName="dark:text-neutral-100 w-36" />
                  }
                />
                <Bar
                  dataKey="streams"
                  fill="var(--color-streams)"
                  radius={[8, 8, 0, 0]}
                  strokeWidth={1}
                  activeIndex={maxValueIndex}
                  fillOpacity={0.5}
                  stroke="#FE5829"
                  activeBar={({ ...props }) => {
                    return <Rectangle {...props} fillOpacity={0.7} />;
                  }}
                >
                  <LabelList
                    dataKey="streams"
                    position="top"
                    offset={8}
                    className="font-medium"
                    fontSize={12}
                    formatter={(value: number) => AbbreviateNumber(value)}
                  />
                </Bar>
              </BarChart>
            </ChartContainer>
          </div>
        </>
      )}
    </div>
  );
}

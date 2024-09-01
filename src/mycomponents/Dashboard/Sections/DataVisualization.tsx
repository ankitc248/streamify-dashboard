import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import { Pie, PieChart } from "recharts";
import { chartsData } from "@/DummyData";
import { TrendingUp, ChartPie, Trophy } from "lucide-react";
import { Bar, BarChart, LabelList } from "recharts";
import { AbbreviateNumber } from "@/helpers/Helpers";
import { Rectangle } from "recharts";
export default function DataVisualization() {
  return (
    <section
      className="p-4 py-8 dark:border-neutral-700/70"
      id="dataVisualization"
    >
      <h3 className="font-semibold dark:text-neutral-100 text-xl">
        Data Visualization
      </h3>
      <p className="text-neutral-500 dark:text-neutral-300 text-sm mb-4">
        Interactive charts for your data
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 py-1 gap-5">
        <LineChartComponent />
        <PieChartComponent />
        <VerticalBarChartComponent />
      </div>
    </section>
  );
}

export function LineChartComponent() {
  const chartData = chartsData[0].data.map((entry) => ({
    ...entry,
    period: `${entry.month} ${entry.year}`,
  }));
  const chartConfig = {
    totalUsers: {
      label: "Total Users",
      color: "#1DC355",
    },
    activeUsers: {
      label: "Active Users",
      color: "#FE5829",
    },
  } satisfies ChartConfig;
  return (
    <div
      className={`rounded-xl border dark:border-neutral-700/70 p-4 flex flex-col justify-between hover:shadow-sm hover:bg-accent/10 hover:border-accent/50 overflow-hidden relative`}
    >
      <div className="flex gap-3 items-start justify-between">
        <div className="rounded-full aspect-square flex items-center justify-center mt-1 order-2">
          <TrendingUp size={18} color="#FE5829" />
        </div>
        <div className="w-full">
          <h4 className="font-medium dark:text-neutral-100">
            {chartsData[0].title}
          </h4>
          <p className="text-sm font-medium mb-1 text-neutral-500 dark:text-neutral-300 text-pretty">
            {chartsData[0].data[0].month} {chartsData[0].data[0].year} -{" "}
            {chartsData[0].data[chartsData[0].data.length - 1].month}{" "}
            {chartsData[0].data[chartsData[0].data.length - 1].year}
          </p>
          <p className="text-neutral-500 dark:text-neutral-300 text-xs text-pretty">
            {chartsData[0].description}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center mt-4">
        <ChartContainer config={chartConfig} className="h-56 w-full">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 10,
              right: 10,
            }}
          >
            <CartesianGrid
              vertical={true}
              horizontal={false}
              strokeDasharray="3 3"
              className="stroke-neutral-300 dark:stroke-neutral-800"
            />
            <XAxis
              dataKey="period"
              tickLine={true}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent />}
              labelClassName="w-36 dark:text-neutral-100"
            />
            <Line
              dataKey="totalUsers"
              type="monotone"
              stroke="var(--color-totalUsers)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="activeUsers"
              type="monotone"
              stroke="var(--color-activeUsers)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </div>
    </div>
  );
}

export function PieChartComponent() {
  const chartConfig = {
    amount: {
      label: "Amount",
    },
  } satisfies ChartConfig;
  const colorShades = [
    "#FFB699",
    "#CC4621",
    "#FFA280",
    "#993619",
    "#FF7A4C",
    "#E64F25",
    "#FF8D66",
    "#B33E1D",
  ];
  const chartData = chartsData[1].data.map((entry, index) => ({
    ...entry,
    fill: `${colorShades[index]}`,
    stroke: `${colorShades[index]}`,
  }));
  return (
    <div
      className={`rounded-xl border dark:border-neutral-700/70 p-4 flex flex-col justify-between hover:shadow-sm hover:bg-accent/10 hover:border-accent/50 overflow-hidden relative`}
    >
      <div className="flex gap-3 items-start justify-between">
        <div className="rounded-full aspect-square flex items-center justify-center mt-1 order-2">
          <ChartPie size={18} color="#FE5829" />
        </div>
        <div>
          <h4 className="font-medium dark:text-neutral-100">
            {chartsData[1].title}
          </h4>
          <p className="text-neutral-500 dark:text-neutral-300 text-xs text-pretty">
            {chartsData[1].description}
          </p>
        </div>
      </div>
      <ChartContainer
        config={chartConfig}
        className="h-64 [&_.recharts-pie-label-text]:red"
      >
        <PieChart>
          <ChartTooltip
            content={
              <ChartTooltipContent labelClassName="dark:text-neutral-100" />
            }
            labelClassName="w-[250px] truncate"
          />
          <ChartLegend
            content={<ChartLegendContent nameKey="source" />}
            className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center text-neutral-950"
          />
          <Pie
            data={chartData}
            dataKey="amount"
            label={({ value }) =>
              value.toLocaleString("en-US", { maximumFractionDigits: 0 })
            }
            nameKey="source"
            strokeWidth={1.5}
            strokeDasharray={0}
            strokeDashoffset={4}
            fillOpacity={0}
            stroke="#333"
            className="font-semibold"
          />
        </PieChart>
      </ChartContainer>
    </div>
  );
}

export function VerticalBarChartComponent() {
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
        <ChartContainer
          config={chartConfig}
          className="h-[300px] w-full"
        >
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
              className="font-medium text-ellipsis"
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
    </div>
  );
}

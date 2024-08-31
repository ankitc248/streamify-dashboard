import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import { Pie, PieChart } from "recharts";
import { chartsData } from "@/DummyData";
import { TrendingUp, ChartPie, Crown } from "lucide-react";
import { Bar, BarChart, LabelList, YAxis } from "recharts";
import { AbbreviateNumber } from "@/helpers/Helpers";
import { Rectangle } from "recharts";
export default function DataVisualization() {
  return (
    <section className="p-4 py-8 border-b dark:border-neutral-700/70">
      <h3 className="font-medium mb-8 dark:text-neutral-100 text-xl">
        Data Visualization
      </h3>
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
      <div className="flex gap-3 items-start">
        <div className="rounded-full aspect-square flex items-center justify-center mt-1">
          <TrendingUp size={18} color="#FE5829" />
        </div>
        <div className="w-full">
          <h4 className="font-medium dark:text-neutral-100">
            {chartsData[0].title}
          </h4>
          <p className="text-sm font-medium mb-1 text-pretty dark:text-neutral-100">
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
    "#FFB699", // Lighter 4
    "#CC4621", // Darker 2
    "#FFA280", // Lighter 3
    "#993619", // Darker 4
    "#FF7A4C", // Lighter 1
    "#E64F25", // Darker 1
    "#FF8D66", // Lighter 2
    "#B33E1D", // Darker 3
  ];
  const chartData = chartsData[1].data.map((entry, index) => ({
    ...entry,
    fill: `${colorShades[index]}`,
  }));
  console.log(chartData);
  return (
    <div
      className={`rounded-xl border dark:border-neutral-700/70 p-4 flex flex-col justify-between hover:shadow-sm hover:bg-accent/10 hover:border-accent/50 overflow-hidden relative`}
    >
      <div className="flex gap-3 items-start">
        <div className="rounded-full aspect-square flex items-center justify-center mt-1">
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
      <ChartContainer config={chartConfig} className="h-64 w-full">
        <PieChart>
          <ChartTooltip
            content={
              <ChartTooltipContent labelClassName="dark:text-neutral-100" />
            }
          />
          <Pie
            data={chartData}
            dataKey="amount"
            label={({ value, name }) =>
              value.toLocaleString("en-US", { maximumFractionDigits: 0 }) +
              " | " +
              name
            }
            nameKey="source"
            stroke="#33333399"
            strokeDasharray={4}
            strokeDashoffset={4}
            fillOpacity={0.8}
            className="font-semibold"
          />
        </PieChart>
      </ChartContainer>
    </div>
  );
}

export function HorizontalBarChartComponent() {
  const chartData = chartsData[2].data;
  const chartConfig = {
    streams: {
      label: "Streams",
      color: "#FE5829",
    },
    label: {
      color: "hsl(var(--background))",
    },
  } satisfies ChartConfig;
  return (
    <div
      className={`rounded-xl border dark:border-neutral-700/70 p-4 flex flex-col justify-between hover:shadow-sm hover:bg-accent/10 hover:border-accent/50 overflow-hidden relative`}
    >
      <div className="flex gap-3 items-start">
        <div className="rounded-full aspect-square flex items-center justify-center mt-1">
          <Crown size={18} color="#FE5829" />
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
        <ChartContainer config={chartConfig} className="h-56">
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              right: 16,
            }}
          >
            {/* <CartesianGrid horizontal={false} /> */}
            <YAxis
              dataKey="artist"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              hide
            />
            <XAxis dataKey="streams" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="line"
                  labelClassName="dark:text-neutral-100"
                />
              }
            />
            <Bar
              dataKey="streams"
              layout="vertical"
              fill="var(--color-streams)"
              radius={[0, 10, 10, 0]}
              barSize={36}
            >
              <LabelList
                dataKey="song"
                position="insideLeft"
                offset={8}
                className="fill-[--color-label]"
                fontSize={12}
              />
              <LabelList
                dataKey="streams"
                position="right"
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

export function VerticalBarChartComponent() {
  const chartData = chartsData[2].data;
  const chartConfig = {
    streams: {
      label: "Streams",
      color: "#FE5829",
    },
  } satisfies ChartConfig;
  return (
    <div
      className={`rounded-xl border dark:border-neutral-700/70 p-4 flex flex-col justify-between hover:shadow-sm hover:bg-accent/10 hover:border-accent/50 overflow-hidden relative`}
    >
      <div className="flex gap-3 items-start">
        <div className="rounded-full aspect-square flex items-center justify-center mt-1">
          <Crown size={18} color="#FE5829" />
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
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
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
              activeIndex={2}
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
                formatter={(value: number) => value.toLocaleString()}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </div>
    </div>
  );
}

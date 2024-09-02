import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import { chartsData } from "@/DummyData";
import { TrendingUp } from "lucide-react";

export function LineChartBlock() {
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
              
              strokeDasharray="2"
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
            />
          </LineChart>
        </ChartContainer>
      </div>
    </div>
  );
}

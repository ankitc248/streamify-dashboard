import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
} from "@/components/ui/chart";
import { Pie, PieChart } from "recharts";
import { chartsData } from "@/DummyData";
import { ChartPie } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useState, useEffect } from "react";
import { useCurrency } from "@/mycomponents/CurrencyProvider";

export function PieChartBlock() {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
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
  const { getCurrencyDetails } = useCurrency();
  const currencyRates = getCurrencyDetails();
  const chartData = chartsData[1].data.map((entry, index) => ({
    ...entry,
    amount: entry?.amount !== undefined ? entry.amount * currencyRates[0] : 0,
    fill: `${colorShades[index]}`,
    stroke: `${colorShades[index]}`,
  }));
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
          <div className="grid grid-cols-2 w-3/12 aspect-square rounded-full overflow-hidden items-center justify-center mt-8 self-center gap-1">
            <Skeleton className="rounded-none aspect-square delay-75" />
            <Skeleton className="rounded-none aspect-square delay-100" />
            <Skeleton className="rounded-none aspect-square delay-150" />
            <Skeleton className="rounded-none aspect-square" />
          </div>
        </div>
      )}
      {!loading && (
        <>
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
            className="h-64 [&_.recharts-pie-label-text]:fill-neutral-950 dark:[&_.recharts-pie-label-text]:fill-neutral-300"
          >
            <PieChart>
              <ChartTooltip
                content={<ChartTooltipContent />}
                labelClassName="w-[250px] truncate dark:text-neutral-100"
              />
              <Pie
                data={chartData}
                dataKey="amount"
                label={({ value }) =>
                  value.toLocaleString("en-US", { maximumFractionDigits: 0 })
                }
                nameKey="source"
                strokeWidth={1.25}
                strokeDasharray={0}
                fillOpacity={0.5}
                className="font-semibold"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={2}
              >
                <ChartLegend></ChartLegend>
              </Pie>
            </PieChart>
          </ChartContainer>
        </>
      )}
    </div>
  );
}

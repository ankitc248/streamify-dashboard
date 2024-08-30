import {
  ChartArea,
  Box,
  Table2,
  DiamondPlus,
  LucideIcon,
  UsersRound,
  UserCheck,
  HandCoins,
  Disc3,
  MicVocal,
} from "lucide-react";

interface SideBarLink {
  title: string;
  path: string;
  icon: LucideIcon;
}

const sideBarLinksData: SideBarLink[] = [
  { title: "Key Metrics", path: "/", icon: Box },
  { title: "Data Visualization", path: "/", icon: ChartArea },
  { title: "Data Table", path: "/", icon: Table2 },
  { title: "Bonus", path: "/", icon: DiamondPlus },
];

interface KeyMetricsLink {
  title: string;
  value: number;
  description: string;
  icon: LucideIcon;
  artist?: string;
  song?: string;
  higherThanPredicted?: boolean;
}

const keyMetricsData: KeyMetricsLink[] = [
  {
    title: "Total Users",
    value: 1203040,
    description: "The total number of registered users on the platform.",
    icon: UsersRound,
    higherThanPredicted: true,
  },
  {
    title: "Active Users",
    value: 20045,
    description:
      "The number of users who have streamed at least one song in the last 30 days",
    icon: UserCheck,
    higherThanPredicted: false,
  },
  {
    title: "Total Streams",
    value: 2115673091,
    description: "The total number of song streams on the platform",
    icon: Disc3,
    higherThanPredicted: true,
  },
  {
    title: "Revenue",
    value: 50940212.75,
    description:
      "The total revenue generated from subscriptions and advertisements",
    icon: HandCoins,
    higherThanPredicted: false,
  },
  {
    title: "Top Artist",
    value: 1203040,
    description: "The artist with the most streams in the past 30 days",
    icon: MicVocal,
    artist: "Sabrina Carpenter",
    song: "Expresso",
  },
];

export { sideBarLinksData, keyMetricsData };

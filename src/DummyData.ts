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

interface ChartsLink {
  title: string;
  description: string;
  type: string;
  data: {
    month?: string;
    year?: string;
    activeUsers?: number;
    totalUsers?: number;
    source?: string;
    amount?: number;
    song?: string;
    artist?: string;
    streams?: number;
    period?: string;
    fill?: string;
  }[];
}

const chartsData: ChartsLink[] = [
  {
    title: "User Growth",
    description:
      "The number of total users and active users over the past 12 months",
    type: "Line",
    data: [
      { month: "Oct", year: "2023", activeUsers: 12345, totalUsers: 24890 },
      { month: "Nov", year: "2023", activeUsers: 14567, totalUsers: 25567 },
      { month: "Dec", year: "2023", activeUsers: 16789, totalUsers: 26780 },
      { month: "Jan", year: "2024", activeUsers: 1023, totalUsers: 26900 },
      { month: "Feb", year: "2024", activeUsers: 15987, totalUsers: 27145 },
      { month: "Mar", year: "2024", activeUsers: 13950, totalUsers: 27689 },
      { month: "Apr", year: "2024", activeUsers: 18500, totalUsers: 29034 },
      { month: "May", year: "2024", activeUsers: 17123, totalUsers: 30012 },
      { month: "Jun", year: "2024", activeUsers: 15432, totalUsers: 30756 },
      { month: "Jul", year: "2024", activeUsers: 19087, totalUsers: 31420 },
      { month: "Aug", year: "2024", activeUsers: 14560, totalUsers: 32005 },
      { month: "Sep", year: "2024", activeUsers: 985, totalUsers: 32560 },
    ],
  },
  {
    title: "Revenue Distribution",
    description: "Breakdown of revenue from different sources",
    type: "Pie",
    data: [
      { source: "Subscriptions", amount: 54890.15 },
      { source: "Advertising", amount: 23500.75 },
      { source: "Rentals", amount: 12980.4 },
      {
        source: "Partnerships and Sponsorships",
        amount: 15200.2,
      },
      { source: "Data Monetization", amount: 6200.1 },
      { source: "Merchandise Sales", amount: 7800.95 },
      { source: "Affiliate Marketing", amount: 4650.3 },
    ],
  },
  {
    title: "Most Streamed Songs",
    description: "The top 5 most-streamed songs over the past 30 days.",
    type: "Bar",
    data: [
      { song: "Levitating", artist: "Dua Lipa", streams: 2984573 },
      { song: "Save Your Tears", artist: "The Weeknd", streams: 3156784 },
      { song: "Espresso", artist: "Sabrina Carpenter", streams: 5427189 },
      { song: "Good 4 U", artist: "Olivia Rodrigo", streams: 2834567 },
      { song: "Peaches", artist: "Justin Bieber", streams: 2708923 },
    ],
  },
];

interface RecentStreamsLink {
  songName: string;
  artist: string;
  dateStreamed: string;
  streamCount: number;
  userId: string;
}
const recentStreamsData: RecentStreamsLink[] = [
  {
    songName: "Blinding Lights",
    artist: "The Weeknd",
    dateStreamed: "2024-08-01",
    streamCount: 189,
    userId: "U12345",
  },
  {
    songName: "Levitating",
    artist: "Dua Lipa",
    dateStreamed: "2024-08-01",
    streamCount: 207,
    userId: "U12346",
  },
  {
    songName: "Save Your Tears",
    artist: "The Weeknd",
    dateStreamed: "2024-08-02",
    streamCount: 143,
    userId: "U12347",
  },
  {
    songName: "Peaches",
    artist: "Justin Bieber",
    dateStreamed: "2024-08-03",
    streamCount: 156,
    userId: "U12348",
  },
  {
    songName: "Good 4 U",
    artist: "Olivia Rodrigo",
    dateStreamed: "2024-08-03",
    streamCount: 172,
    userId: "U12349",
  },
  {
    songName: "MONTERO",
    artist: "Lil Nas X",
    dateStreamed: "2024-08-04",
    streamCount: 132,
    userId: "U12350",
  },
  {
    songName: "Stay",
    artist: "The Kid LAROI",
    dateStreamed: "2024-08-05",
    streamCount: 194,
    userId: "U12351",
  },
  {
    songName: "Watermelon Sugar",
    artist: "Harry Styles",
    dateStreamed: "2024-08-06",
    streamCount: 168,
    userId: "U12352",
  },
  {
    songName: "Dynamite",
    artist: "BTS",
    dateStreamed: "2024-08-07",
    streamCount: 212,
    userId: "U12353",
  },
  {
    songName: "drivers license",
    artist: "Olivia Rodrigo",
    dateStreamed: "2024-08-08",
    streamCount: 158,
    userId: "U12354",
  },
  {
    songName: "Shape of You",
    artist: "Ed Sheeran",
    dateStreamed: "2024-08-09",
    streamCount: 180,
    userId: "U12355",
  },
  {
    songName: "Industry Baby",
    artist: "Lil Nas X",
    dateStreamed: "2024-08-10",
    streamCount: 147,
    userId: "U12356",
  },
  {
    songName: "Bad Habits",
    artist: "Ed Sheeran",
    dateStreamed: "2024-08-11",
    streamCount: 173,
    userId: "U12357",
  },
  {
    songName: "Butter",
    artist: "BTS",
    dateStreamed: "2024-08-12",
    streamCount: 198,
    userId: "U12358",
  },
  {
    songName: "As It Was",
    artist: "Harry Styles",
    dateStreamed: "2024-08-13",
    streamCount: 169,
    userId: "U12359",
  },
  {
    songName: "Deja Vu",
    artist: "Olivia Rodrigo",
    dateStreamed: "2024-08-14",
    streamCount: 155,
    userId: "U12360",
  },
  {
    songName: "Shivers",
    artist: "Ed Sheeran",
    dateStreamed: "2024-08-15",
    streamCount: 191,
    userId: "U12361",
  },
  {
    songName: "Blinding Lights",
    artist: "The Weeknd",
    dateStreamed: "2024-08-16",
    streamCount: 188,
    userId: "U12362",
  },
  {
    songName: "Levitating",
    artist: "Dua Lipa",
    dateStreamed: "2024-08-17",
    streamCount: 204,
    userId: "U12363",
  },
  {
    songName: "Good 4 U",
    artist: "Olivia Rodrigo",
    dateStreamed: "2024-08-18",
    streamCount: 170,
    userId: "U12364",
  },
  {
    songName: "Stay",
    artist: "The Kid LAROI",
    dateStreamed: "2024-08-19",
    streamCount: 195,
    userId: "U12365",
  },
  {
    songName: "Peaches",
    artist: "Justin Bieber",
    dateStreamed: "2024-08-20",
    streamCount: 159,
    userId: "U12366",
  },
  {
    songName: "drivers license",
    artist: "Olivia Rodrigo",
    dateStreamed: "2024-08-21",
    streamCount: 162,
    userId: "U12367",
  },
  {
    songName: "Shape of You",
    artist: "Ed Sheeran",
    dateStreamed: "2024-08-22",
    streamCount: 177,
    userId: "U12368",
  },
  {
    songName: "Watermelon Sugar",
    artist: "Harry Styles",
    dateStreamed: "2024-08-23",
    streamCount: 170,
    userId: "U12369",
  },
  {
    songName: "MONTERO",
    artist: "Lil Nas X",
    dateStreamed: "2024-08-24",
    streamCount: 134,
    userId: "U12370",
  },
  {
    songName: "Butter",
    artist: "BTS",
    dateStreamed: "2024-08-25",
    streamCount: 200,
    userId: "U12371",
  },
  {
    songName: "Deja Vu",
    artist: "Olivia Rodrigo",
    dateStreamed: "2024-08-26",
    streamCount: 152,
    userId: "U12372",
  },
  {
    songName: "Industry Baby",
    artist: "Lil Nas X",
    dateStreamed: "2024-08-27",
    streamCount: 145,
    userId: "U12373",
  },
  {
    songName: "Bad Habits",
    artist: "Ed Sheeran",
    dateStreamed: "2024-08-28",
    streamCount: 176,
    userId: "U12374",
  },
];

export { sideBarLinksData, keyMetricsData, chartsData, recentStreamsData };

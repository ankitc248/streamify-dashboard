import { Search, X } from "lucide-react";
import { useState } from "react";

export default function SearchPopup() {
  const [searchPopupOpen, setSearchPopupOpen] = useState<boolean>(false);
  if (!searchPopupOpen) return null;
  const searchData = [
    {
      title: "Key Metrics",
      blocks: [
        {
          blockTitle: "All Users",
          blockDescription: "The total number of registered users",
        },
        {
          blockTitle: "Active Users",
          blockDescription:
            "The number of users who have streamed at least one song in the last 30 days",
        },
        {
          blockTitle: "Total Streams",
          blockDescription: "The total number of song streams",
        },
        {
          blockTitle: "Revenue",
          blockDescription:
            "The total revenue generated from subscriptions and advertisements",
        },
      ],
    },
    {
      title: "Data Visualization",
      Description: "Interactive charts for your data",
      blocks: [
        {
          blockTitle: "User Growth",
          blockDescription:
            "The number of total users and active users over the past 12 months",
        },
        {
          blockTitle: "Revenue Distribution",
          blockDescription: "Breakdown of revenue from different sources",
        },
        {
          blockTitle: "Most Streamed Songs",
          blockDescription:
            "The top 5 most-streamed songs over the past 30 days.",
        },
      ],
    },
    {
      title: "Data Table",
      Description: "Record of recent streams",
    },
  ];
  return (
    <div className="fixed w-full h-full bg-neutral-950/80 z-50 flex items-center justify-center">
      <div className="flex h-64 w-4/12 flex-col rounded-lg bg-neutral-50 shadow-lg shadow-neutral-950/50 overflow-hidden">
        <div className="flex w-full items-center border-b px-2">
          <Search size={20} color="#FE5829" />{" "}
          <input
            type="text"
            placeholder="Search across sections"
            className="flex-1 bg-neutral-50 min-h-8 text-sm p-2 py-4 ring-0 outline-0 focus-visible:ring-0 focus:ring-0 hover:ring-0"
            autoFocus
          ></input>
          <button
            type="button"
            className="h-full"
            onClick={() => setSearchPopupOpen(false)}
          >
            <X size={20} />
          </button>
        </div>
        <div className="flex flex-col text-sm overflow-y-auto">
          {searchData.map((data) => (
            <>
              <h1 className="border-b p-2 text-neutral-500 text-xs">
                {data.title}
              </h1>
              <ul className="">
                {data?.blocks?.map((block) => (
                  <li key={block.blockTitle} className="border-b p-2 px-4">
                    {block.blockTitle}
                  </li>
                ))}
              </ul>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

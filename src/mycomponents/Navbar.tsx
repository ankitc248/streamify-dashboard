import { Music, AudioLines, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeSwitcher } from "../mycomponents/ThemeSwitcher";
import CurrencySelector from "./CurrencySelector";
export default function Navbar() {
  return (
    <nav className="navbar w-full min-h-12 border-b dark:border-neutral-700/70 flex items-center justify-center">
      <div className="flex items-center justify-between px-4 w-full gap-2 flex-wrap">
        <div className="uppercase font-bold text-accent tracking-wide text-xl flex gap-1 items-center">
          <span className="hidden sm:inline">Streamify</span>
          <Music size={20} />
          <AudioLines size={12} />
        </div>
        <div className="flex gap-0.5 items-center flex-1 sm:flex-initial justify-end">
          <button className="hidden items-center text-xs min-w-32 bg-neutral-50 p-1 px-2 mr-2 h-6 rounded border shadow-inner text-neutral-500 flex-1 sm:flex-initial dark:bg-neutral-800 dark:border-neutral-600">
            <Search size={12} />
            <span className="ml-1 truncate">Search...</span>
          </button>
          <CurrencySelector />
          <ThemeSwitcher />
          <Avatar className="w-7 h-7 shadow ml-1">
            <AvatarImage
              src="/assets/images/user.jpeg"
              className="contrast-150 saturate-150"
            />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  );
}

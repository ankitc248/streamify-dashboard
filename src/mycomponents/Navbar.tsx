import { Music, AudioLines } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeSwitcher } from "../mycomponents/ThemeSwitcher";

export default function Navbar() {
  return (
    <nav className="navbar w-full h-12 border-b dark:border-neutral-700/70 flex items-center justify-between px-4">
      <div className="uppercase font-bold text-accent tracking-wide text-lg flex gap-1 items-center">
        Streamify
        <Music size={20} />
        <AudioLines size={12} />
      </div>
      <div className="flex gap-2 items-center">
        <Avatar className="w-8 h-8 border-2 border-neutral-900 dark:border-neutral-100 shadow-sm">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <ThemeSwitcher />
      </div>
    </nav>
  );
}

import { Music, AudioLines } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeSwitcher } from "../mycomponents/ThemeSwitcher";

export default function Navbar() {
  return (
    <nav className="navbar w-full h-12 border-b dark:border-neutral-700/70 flex items-center justify-center">
      <div className="max-w-screen-2xl flex items-center justify-between px-4 w-full">
        <div className="uppercase font-bold text-accent tracking-wide text-xl flex gap-1 items-center">
          Streamify
          <Music size={20} />
          <AudioLines size={12} />
        </div>
        <div className="flex gap-2 items-center">
          <Avatar className="w-8 h-8 shadow">
            <AvatarImage
              src="/assets/images/user.jpeg"
              className="contrast-150 saturate-150"
            />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
}

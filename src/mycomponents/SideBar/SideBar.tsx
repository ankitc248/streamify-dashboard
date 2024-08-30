import ButtonWithIconAndTooltip from "../ButtonWithIconAndTooltip";
import { LogOut } from "lucide-react";
import { sideBarLinksData } from "@/DummyData";
// import { useState } from "react";
export default function SideBar() {
  // const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);
  return (
    <nav className="h-full w-56 border-r p-2">
      <div className="flex justify-between items-center p-2 pr-0">
        <h2 className="text-sm font-semibold text-neutral-900">Sections</h2>
        <ButtonWithIconAndTooltip tooltipText="Collapse">
          <LogOut
            size={16}
            className="rotate-180 contrast-50 group-hover:contrast-100 group-focus:contrast-100"
          />
        </ButtonWithIconAndTooltip>
      </div>
      <div className="flex flex-col gap-1">
        {sideBarLinksData.map((link, index) => {
          return (
            <a
              key={index}
              href={"#" + link.path}
              className="flex text-xs items-center gap-2 p-2 hover:bg-accent/15 rounded-md transition"
            >
              <link.icon size={16} />
              {link.title}
            </a>
          );
        })}
      </div>
    </nav>
  );
}

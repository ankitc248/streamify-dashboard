import { LogOut } from "lucide-react";
import { sideBarLinksData } from "@/DummyData";
import { useState } from "react";
import ButtonWithIconAndTooltip, {
  CustomTooltipContainer,
} from "./ButtonWithIconAndTooltip";
export default function SideBar({
  currentlyInView,
}: Readonly<{
  currentlyInView: string;
}>) {
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(true);
  return (
    <nav
      className={`h-full sticky top-0 border-b bg-white/50 z-10 dark:bg-neutral-950/50 backdrop-blur dark:border-neutral-700/70 p-2 w-full ${
        sideBarOpen ? "lg:w-56" : "lg:w-16"
      } lg:border-b-0`}
    >
      <div className="justify-between items-center p-2 pr-0 hidden lg:flex">
        <h2
          className={`text-lg font-semibold text-neutral-900 dark:text-neutral-100 ${
            !sideBarOpen && "hidden"
          }`}
        >
          Sections
        </h2>
        {sideBarOpen ? (
          <ButtonWithIconAndTooltip
            tooltipText="Collapse"
            onClick={() => setSideBarOpen(!sideBarOpen)}
          >
            <LogOut size={16} className="rotate-180 dark:text-neutral-100" />
          </ButtonWithIconAndTooltip>
        ) : (
          <ButtonWithIconAndTooltip
            tooltipText="Expand"
            onClick={() => setSideBarOpen(!sideBarOpen)}
          >
            <LogOut size={16} className="dark:text-neutral-100" />
          </ButtonWithIconAndTooltip>
        )}
      </div>
      <div
        className={`flex gap-1 lg:flex-col overflow-x-auto lg:overflow-hidden lg:py-2 ${
          !sideBarOpen ? "items-center" : ""
        }`}
      >
        {sideBarLinksData.map((link) => {
          return (
            <a
              key={link.id}
              href={"#" + link.id}
              className={`flex text-sm items-center gap-2 p-2 hover:bg-accent/10 focus-visible:bg-accent/10 rounded-md transition duration-75 dark:text-neutral-100 dark:hover:bg-accent/30 dark:focus-visible:bg-accent/30 ${
                currentlyInView === link.id
                  ? "bg-accent/30 dark:bg-accent/50"
                  : ""
              }`}
            >
              {sideBarOpen ? (
                <>
                  <link.icon size={16} />
                  <span className="inline-block whitespace-nowrap">
                    {link.title}
                  </span>
                </>
              ) : (
                <CustomTooltipContainer tooltipText={link.title}>
                  <link.icon size={20} />
                </CustomTooltipContainer>
              )}
            </a>
          );
        })}
      </div>
    </nav>
  );
}

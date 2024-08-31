import ButtonWithIconAndTooltip from "../ButtonWithIconAndTooltip";
import { LogOut } from "lucide-react";
import { sideBarLinksData } from "@/DummyData";
import { useState } from "react";
import { CustomTooltipContainer } from "../ButtonWithIconAndTooltip";
export default function SideBar() {
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);
  return (
    <nav
      className={`h-full border-b dark:border-neutral-700/70 p-2 w-full ${
        sideBarOpen ? "md:w-56" : "md:w-16"
      } md:border-b-0 overflow-hidden`}
    >
      <div className="justify-between items-center p-2 pr-0 hidden md:flex">
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
            <LogOut
              size={16}
              className="rotate-180 contrast-50 group-hover:contrast-100 group-focus:contrast-100 dark:text-neutral-100"
            />
          </ButtonWithIconAndTooltip>
        ) : (
          <ButtonWithIconAndTooltip
            tooltipText="Expand"
            onClick={() => setSideBarOpen(!sideBarOpen)}
          >
            <LogOut
              size={16}
              className="contrast-50 group-hover:contrast-100 group-focus:contrast-100 dark:text-neutral-100"
            />
          </ButtonWithIconAndTooltip>
        )}
      </div>
      <div
        className={`flex gap-1 md:flex-col overflow-x-auto md:overflow-hidden md:py-2 ${
          !sideBarOpen ? "items-center" : ""
        }`}
      >
        {sideBarLinksData.map((link, index) => {
          return (
            <a
              key={index}
              href={"#" + link.path}
              className="flex text-sm items-center gap-2 p-2 hover:bg-accent/15 focus-visible:bg-accent/15 rounded-md transition duration-75 dark:text-neutral-100 dark:hover:bg-accent/30"
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

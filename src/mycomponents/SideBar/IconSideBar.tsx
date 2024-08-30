import { sideBarLinksData } from "../../DummyData";
import ButtonWithIconAndTooltip from "../ButtonWithIconAndTooltip";
function IconSideBar() {
  return (
    <div className="flex flex-col items-start gap-4">
      {sideBarLinksData.map((link, index) => {
        return (
          <a
            key={index}
            href={"#" + link.path}
            className="flex text-xs items-center gap-2 hover:bg-accent/15 rounded-md transition"
          >
            <ButtonWithIconAndTooltip tooltipText={link.title}>
              <link.icon size={16} />
            </ButtonWithIconAndTooltip>
          </a>
        );
      })}
    </div>
  );
}

export default IconSideBar;

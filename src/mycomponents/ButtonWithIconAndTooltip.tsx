import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { ReactElement } from "react";

interface ButtonProps {
  tooltipText: string;
  children: ReactElement;
}
const ButtonWithIconAndTooltip = ({ tooltipText, children }: ButtonProps) => {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size={"icon"} className="w-8 h-8 group">
            {children}
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p className="">{tooltipText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const TootlipContainer = ({ tooltipText, children }: ButtonProps) => {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent side="right">
          <p className="">{tooltipText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export { TootlipContainer };
export default ButtonWithIconAndTooltip;

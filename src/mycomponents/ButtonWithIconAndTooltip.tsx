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
  onClick?: () => void;
  variant?: "ghost" | "link";
}
const ButtonWithIconAndTooltip = ({
  tooltipText,
  children,
  onClick,
  variant = "ghost",
}: ButtonProps) => {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant={variant}
            size={"icon"}
            className="w-8 h-8 group"
            onClick={() => {
              if (onClick) onClick();
            }}
          >
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

const CustomTooltipContainer = ({ tooltipText, children }: ButtonProps) => {
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

export { CustomTooltipContainer };
export default ButtonWithIconAndTooltip;

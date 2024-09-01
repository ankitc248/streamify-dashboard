import TaskPage from "@/mycomponents/tasks/page";
import SectionContainer from "./SectionContainer";

export default function DataTable({
  setCurrentlyInView,
  sectionID,
}: {
  setCurrentlyInView: (arg0: string) => void;
  sectionID: string;
}) {
  return (
    <SectionContainer
      setCurrentlyInView={setCurrentlyInView}
      sectionID={sectionID}
    >
      <h3 className="font-semibold dark:text-neutral-100 text-xl">
        Data Table
      </h3>
      <p className="text-neutral-500 dark:text-neutral-300 text-sm">
        Record of recent streams
      </p>
      <TaskPage />
    </SectionContainer>
  );
}

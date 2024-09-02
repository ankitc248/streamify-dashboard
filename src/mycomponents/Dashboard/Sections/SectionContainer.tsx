import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
export default function SectionContainer({
  setCurrentlyInView,
  sectionID,
  children,
}: {
  setCurrentlyInView: (arg0: string) => void;
  sectionID: string;
  children: React.ReactNode;
}) {
  const { ref, inView } = useInView({
    rootMargin: "-50% 0% -50% 0%"
  });
  useEffect(() => {
    if (inView) setCurrentlyInView(sectionID);
  }, [inView, setCurrentlyInView, sectionID]);
  return (
    <section
      className="p-4 py-8 dark:border-neutral-700/70 border-dashed"
      id={sectionID}
      ref={ref}
    >
      {children}
    </section>
  );
}

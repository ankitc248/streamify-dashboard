import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
export default function StreamsLiveCount({
  number,
}: {
  readonly number: number;
}) {
  const [liveCount, setLiveCount] = useState<number>(number);
  const [oldLiveCount, setOldLiveCount] = useState<number>(0);
  const liveCountInterval = useRef<any | null>(null); //eslint-disable-line

  useEffect(() => {
    liveCountInterval.current = setInterval(async () => {
      const makeNewCountRequest = async () => {
        try {
          const response = await fetch("https://mock.com/get_live_count", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ live_count: liveCount }),
          });
          const responseBody = await response.json();
          return responseBody.live_count;
        } catch {
          const new_count = liveCount + Math.floor(Math.random() * 1000);
          return new_count;
        }
      };

      const newCount = await makeNewCountRequest();
      setOldLiveCount(liveCount);
      setLiveCount(newCount);
    }, 3000);
    return () => {
      clearInterval(liveCountInterval.current);
    };
  }, [liveCount, oldLiveCount]);

  let textSize = "text-3xl";
  if (number > 9999999999) textSize = "text-2xl";
  return (
    <p
      className={`${textSize} font-bold text-neutral-800 text-accent/90 drop-shadow-sm truncate dark:text-neutral-100`}
    >
      <CountUp end={liveCount} duration={1} start={oldLiveCount} />
    </p>
  );
}

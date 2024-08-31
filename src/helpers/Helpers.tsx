import CountUp from "react-countup";

const PrettyNumber = ({
  number,
  count = 0,
  extraBefore = "",
  precision = 0,
}: {
  number: number;
  count?: number;
  extraBefore?: string;
  precision?: number;
}) => {
  let textSize = "text-3xl";
  if (number > 9999999999 && extraBefore === "") textSize = "text-2xl";
  if (number > 9999999 && extraBefore !== "") textSize = "text-2xl";
  if (number > 99999999 && precision >= 2) textSize = "text-xl";
  return (
    <p
      className={`${textSize} font-bold text-neutral-800 text-accent/90 drop-shadow-sm text-ellipsis overflow-hidden w-full dark:text-neutral-100`}
    >
      {extraBefore}
      <CountUp
        end={number}
        decimals={precision}
        duration={1}
        delay={count * 0}
        start={number - number / 100}
      />
    </p>
  );
};

//Function to format numbers with K, M, B, T suffixes
const AbbreviateNumber = (number: number) => {
  if (number === 0) return "0";
  const suffixes = ["K", "M", "B", "T"];
  const magnitude = Math.floor(Math.log10(Math.abs(number)) / 3);
  if (magnitude === 0) return number.toString();
  const shortValue = Math.round(number / Math.pow(10, magnitude * 3));
  const suffix = suffixes[magnitude - 1];
  return `${shortValue}${suffix}`;
};

const GetInitials = (name: string) => {
  name = name.trim();
  const words = name.split(/\s+/);
  let initials = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 0) {
      initials += words[i][0].toUpperCase();
    }
    if (i === 1 && words.length > 2) {
      break;
    }
  }
  return initials;
};

export { PrettyNumber, AbbreviateNumber, GetInitials };

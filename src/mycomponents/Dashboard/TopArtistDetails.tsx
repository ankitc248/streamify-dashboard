import { GetInitials, AbbreviateNumber } from "@/helpers/Helpers";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TootlipContainer } from "../ButtonWithIconAndTooltip";
import { AudioLines } from "lucide-react";

const TopArtistDetails = () => {
  const topSongs = [
    { title: "Espresso", streams: 1158296460 },
    { title: "Nonsense", streams: 961496783 },
    { title: "On My Way", streams: 702344427 },
  ];
  const artist = {
    name: "Sabrina Carpenter",
    streams: 8443302125,
    image: "src/assets/images/sabrina-carpenter.jpg",
  };
  return (
    <div className="rounded-lg border shadow-sm border-accent/40 mt-4 overflow-hidden">
      <div className="flex gap-2 items-center text-sm font-medium p-1 bg-accent/15 border-b border-accent/40 justify-between">
        <div className="flex gap-2 items-center">
          <Avatar className="w-8 h-8 self-start">
            <AvatarImage src="src/assets/images/sabrina-carpenter.jpg" />
            <AvatarFallback>{GetInitials(artist.name)}</AvatarFallback>
          </Avatar>
          <span>{artist.name}</span>
        </div>
        <TootlipContainer
          tooltipText={`${artist.streams.toLocaleString()} streams`}
        >
          <div className="flex items-center gap-1">
            <span>{AbbreviateNumber(8443302125)}</span>
            <AudioLines size={14} />
          </div>
        </TootlipContainer>
      </div>
      {topSongs.map((song, index) => (
        <div
          key={index}
          className="text-xs p-1 px-2 bg-accent/5 justify-between flex border-b last:border-b-0 border-accent/30"
        >
          <span className="font-medium">{song.title}</span>
          <span className="font-base tracking-wide">
            {AbbreviateNumber(song.streams)}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TopArtistDetails;

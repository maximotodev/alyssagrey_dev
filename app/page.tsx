import getTracks from "./components/getTracks";
import Link from "next/link";
import Image from "next/image";
import { Track } from "@/lib/types";

export default async function Home() {
  const { tracks } = await getTracks();
  return (
    <>
      {tracks?.map((track: Track) => (
        <Link href={track.songUrl} key={track.songUrl}>
          <h1>{track.title}</h1>
          <Image
            priority
            width={100}
            height={100}
            src={track.albumArtUrl}
            alt={track.title}
          />
        </Link>
      ))}
    </>
  );
}

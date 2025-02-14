// import Link from "next/link";
// import Image from "next/image";
// import { Track } from "@/lib/types";

import Tracks from "./components/Tracks";

// async function getTracks() {
//   const res = await fetch("http://127.0.0.1:3000/api/");
//   return res.json();
// }

export default function Home() {
  // const { tracks } = await getTracks();
  return (
    <>
      <Tracks />
      {/* {tracks?.map((track: Track) => (
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
      ))} */}
    </>
  );
}

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Track } from "@/lib/types";

async function getTracks() {
  const res = await fetch("http://127.0.0.1:3000/api/", { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch tracks");
  }
  return res.json();
}
export default async function Tracks() {
  const { tracks } = await getTracks();
  return (
    <div>
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
    </div>
  );
}

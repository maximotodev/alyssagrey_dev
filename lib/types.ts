import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Url } from "url";

export type Song = {
  songUrl: string;
  artist: string;
  title: string;
};
export type Track = {
  artist: string;
  songUrl: string;
  title: string;
  album: string;
  albumArtUrl: string;
};

import { getTopTracks } from "@/lib/spotify";

export async function GET() {
  const res = await getTopTracks();
  const { items } = await res.json();

  const tracks = items.slice(0, 10).map((track) => ({
    artist: track.artists.map((_artist) => _artist.name).join(", "),
    songUrl: track.external_urls.spotify,
    title: track.name,
    album: track.album.name,
    albumArtUrl: track.album.images[1].url,
  }));

  return Response.json({ tracks });
}

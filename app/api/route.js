import { getTopTracks } from "@/lib/spotify";

export async function GET() {
  try {
    const res = await getTopTracks();

    if (!res.ok) {
      console.error("Spotify API Error:", await res.text());
      return Response.json(
        { error: "Failed to fetch tracks" },
        { status: 500 }
      );
    }

    const { items } = await res.json();

    const tracks = items.slice(0, 10).map((track) => ({
      artist: track.artists.map((_artist) => _artist.name).join(", "),
      songUrl: track.external_urls.spotify,
      title: track.name,
      album: track.album.name,
      albumArtUrl: track.album.images[1].url,
    }));

    return Response.json({ tracks });
  } catch (error) {
    console.error("API Route Error:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

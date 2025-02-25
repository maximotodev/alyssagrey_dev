import React from "react";
import TracksCarousel from "./TracksCarousel"; // Import client component
import { Track } from "@/lib/types";

// Function to fetch tracks from the API (server-side)
async function getTracks(): Promise<{ tracks: Track[] }> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch tracks");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching tracks:", error);
    return { tracks: [] }; // Return empty array on failure
  }
}

export default async function Tracks() {
  const { tracks } = await getTracks(); // Fetch track data

  return (
    <div>
      <h1 className="text-5xl text-white text-center m-10">MUSIC</h1>
      {/* Pass the fetched tracks to the client-side carousel component */}
      <TracksCarousel tracks={tracks} />
    </div>
  );
}

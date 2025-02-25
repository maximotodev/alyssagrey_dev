import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl font-bold hover:text-pink-400">
        Store page coming soon...
      </h1>
      <Link
        href={"/"}
        className="px-6 py-3 bg-pink-300 text-black rounded-lg shadow-md hover:bg-pink-400 transition"
      >
        Go back
      </Link>
    </div>
  );
}

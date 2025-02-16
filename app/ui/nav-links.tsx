"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export function Links() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-row items-center justify-between bg-dark-100 p-4">
      <Link
        className={`mr-4 text-white-700 hover:text-blue-500 ${
          pathname === "/" ? "active" : ""
        }`}
        href="/"
      >
        home
      </Link>
      <Link
        className={`mr-4 text-white-700 hover:text-blue-500 ${
          pathname === "/videos" ? "active" : ""
        }`}
        href="/videos"
      >
        videos
      </Link>
      <Link
        className={`mr-4 text-white-700 hover:text-blue-500 ${
          pathname === "/music" ? "active" : ""
        }`}
        href="/music"
      >
        music
      </Link>
      <Link
        className={`mr-4 text-white-700 hover:text-blue-500 ${
          pathname === "/events" ? "active" : ""
        }`}
        href="/events"
      >
        events
      </Link>
      <Link
        className={`mr-4 text-white-700 hover:text-blue-500 ${
          pathname === "/store" ? "active" : ""
        }`}
        href="/store"
      >
        store
      </Link>
    </nav>
  );
}

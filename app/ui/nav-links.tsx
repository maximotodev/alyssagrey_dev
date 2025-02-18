"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

// Define an array of navigation links with their respective paths and labels
const navLinks = [
  { href: "/", label: "home" },
  { href: "/videos", label: "videos" },
  { href: "/music", label: "music" },
  { href: "/events", label: "events" },
  { href: "/store", label: "store" },
];

export function Links() {
  // Get the current pathname using Next.js navigation hook
  const pathname = usePathname();

  return (
    <nav className="flex flex-row items-center justify-between bg-dark-100 p-4">
      {/* Map through the navLinks array to generate navigation links dynamically */}
      {navLinks.map(({ href, label }) => (
        <Link
          key={href} // Unique key for each link
          href={href} // Navigation path
          className={`mr-4 text-white-700 hover:text-blue-500 ${
            pathname === href ? "text-blue-500 font-bold" : ""
          }`} // Apply active styling if the pathname matches the link
        >
          {label} {/* Display the label for each link */}
        </Link>
      ))}
    </nav>
  );
}

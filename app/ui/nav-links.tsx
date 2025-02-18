"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

// Define an array of navigation links with their respective paths and labels
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/videos", label: "Videos" },
  { href: "/music", label: "Music" },
  { href: "/events", label: "Events" },
  { href: "/store", label: "Store" },
];

export function Links() {
  // Get the current pathname using Next.js navigation hook
  const pathname = usePathname();

  return (
    <nav className="flex flex-row items-center justify-center bg-dark-100 p-4 w-full text-center">
      {/* Map through the navLinks array to generate navigation links dynamically */}
      {navLinks.map(({ href, label }) => (
        <Link
          key={href} // Unique key for each link
          href={href} // Navigation path
          className={`mx-4 my-2 md:my-0 text-white-700 hover:text-pink-300 uppercase ${
            pathname === href ? "text-pink-400 font-bold" : ""
          }`} // Apply active styling if the pathname matches the link
        >
          {label} {/* Display the label for each link */}
        </Link>
      ))}
    </nav>
  );
}

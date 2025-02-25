"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

// Define navigation links
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/videos", label: "Videos" },
  { href: "/music", label: "Music" },
  { href: "/events", label: "Events" },
  { href: "/store", label: "Store" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  // Function for smooth scrolling & dynamic URL updates
  const handleNavigation = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      router.push(`#${id}`, undefined);
    }
  };

  return (
    <nav className="bg-black p-4 w-full fixed top-0 left-0 z-50">
      <div className="container mx-auto flex flex-row items-center justify-between px-4 md:px-12 lg:px-24 xl:px-36">
        {navLinks.map(({ href, label }) => {
          if (label === "Store") {
            return (
              <Link
                key={href}
                href={href}
                className={`text-white uppercase font-semibold text-sm md:text-lg lg:text-xl xl:text-2xl transition-colors duration-300 hover:text-pink-300 ${
                  pathname === href ? "text-pink-400 underline" : ""
                }`}
              >
                {label}
              </Link>
            );
          }

          return (
            <button
              key={href}
              onClick={() => handleNavigation(label.toLowerCase())}
              className="text-white uppercase font-semibold text-sm md:text-lg lg:text-xl xl:text-2xl transition-colors duration-300 hover:text-pink-400"
            >
              {label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

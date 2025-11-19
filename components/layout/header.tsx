"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { name: "About", href: "#about" },
  { name: "Mission", href: "#mission" },
  { name: "FAQs", href: "#faqs" },
] as const;

export function Header() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "mission", "faqs", "contact", "footer"];
      const scrollPosition = window.scrollY + 100;

      let foundActiveSection = false;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            foundActiveSection = true;
            break;
          }
        }
      }

      if (!foundActiveSection) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-4xl font-bold text-primary">
          <div className="flex items-center gap-2 text-customBg">Verta Limited</div>
        </Link>
        <nav className="hidden items-center justify-center gap-10 md:flex">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className={`text-xl font-medium transition-colors hover:text-customHover ${
                activeSection === item.href.slice(1) ? "text-customHover" : "text-customText"
              }`}
            >
              {item.name}
            </button>
          ))}
          <Button
            size="xl"
            onClick={() => handleNavClick("#contact")}
            className="hidden text-lg font-medium md:inline-flex bg-customBg hover:bg-customHover"
          >
            Contact
          </Button>
        </nav>
      </div>
    </header>
  );
}

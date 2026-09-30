"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { SITE } from "@/lib/site";

const NAV = [
  ["Features", "/#features"],
  ["How it works", "/#how-it-works"],
  ["Security", "/#security"],
  ["FAQ", "/#faq"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/90 backdrop-blur transition-colors ${
        scrolled || open ? "border-line" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" aria-label="Lasan Grow home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 text-[15px] text-muted md:flex" aria-label="Main">
          {NAV.map(([label, href]) => (
            <Link key={href} href={href} className="transition-colors hover:text-fg">
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a href={SITE.signInUrl} className="rounded-md px-3.5 py-2 text-[15px] font-medium text-muted transition-colors hover:text-fg">
            Sign in
          </a>
          <Link
            href="/#contact"
            className="rounded-md bg-brand-500 px-4 py-2 text-[15px] font-semibold text-white shadow-card transition-colors hover:bg-brand-600"
          >
            Book a free demo
          </Link>
        </div>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-md text-fg hover:bg-soft md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-white px-4 pb-5 pt-2 md:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            {NAV.map(([label, href]) => (
              <Link key={href} href={href} onClick={() => setOpen(false)} className="border-b border-line py-3.5 text-base text-fg">
                {label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <a href={SITE.signInUrl} className="rounded-md border border-line py-2.5 text-center font-medium">
              Sign in
            </a>
            <Link href="/#contact" onClick={() => setOpen(false)} className="rounded-md bg-brand-500 py-2.5 text-center font-semibold text-white">
              Book a demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

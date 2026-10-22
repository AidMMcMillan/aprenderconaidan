"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { bookingUrl, navItems } from "@/config/NavItems";

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const heroRef = useRef<HTMLElement | null>(null);
  const stickyNavRef = useRef<HTMLElement | null>(null);

  const [showSticky, setShowSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!isHomePage) return;

    heroRef.current = document.querySelector<HTMLElement>("#home");

    const update = () => {
      const heroH = heroRef.current?.offsetHeight ?? 0;
      const navH = stickyNavRef.current?.offsetHeight ?? 0;
      const trigger = Math.max(0, heroH - navH);
      setShowSticky(window.scrollY >= trigger);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });

    const ro = new ResizeObserver(update);
    if (heroRef.current) ro.observe(heroRef.current);
    if (stickyNavRef.current) ro.observe(stickyNavRef.current);

    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      ro.disconnect();
    };
  }, [isHomePage]);

  // Non-home pages: always show sticky nav
  if (!isHomePage) {
    return (
      <nav className="fixed left-0 top-0 w-full px-6 md:px-12 py-4 md:py-6 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
        <NavInner
          variant="dark"
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />
        {mobileOpen && (
          <MobileDropdown variant="dark" onNavigate={() => setMobileOpen(false)} />
        )}
      </nav>
    );
  }

  return (
    <>
      {/* HERO NAV (scrolls away with banner) */}
      {!showSticky && (
        <nav
          className={[
            "absolute left-0 top-0 w-full py-4 md:py-6 z-40",
            mobileOpen
              ? "bg-black/40 backdrop-blur"
              : "bg-transparent",
          ].join(" ")}
        >
          <NavInner
            variant="light"
            mobileOpen={mobileOpen}
            setMobileOpen={setMobileOpen}
          />
          {mobileOpen && (
            <MobileDropdown variant="light" onNavigate={() => setMobileOpen(false)} />
          )}
        </nav>
      )}

      {/* STICKY NAV */}
      <nav
        ref={stickyNavRef}
        className={[
          "fixed left-0 top-0 w-full py-4 md:py-6 z-50",
          "transition-all duration-300",
          "bg-white/95 backdrop-blur border-b border-slate-200",
          showSticky
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none",
        ].join(" ")}
      >
        <NavInner
          variant="dark"
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />
        {mobileOpen && (
          <MobileDropdown variant="dark" onNavigate={() => setMobileOpen(false)} />
        )}
      </nav>
    </>
  );
}

function NavInner({
  variant,
  mobileOpen,
  setMobileOpen,
}: {
  variant: "light" | "dark";
  mobileOpen: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="w-full px-6 md:px-12 flex justify-between items-center">
      <Logo variant={variant} onClick={() => setMobileOpen(false)} />

      {/* Desktop menu */}
      <div className="hidden md:block">
        <Menu variant={variant} onNavigate={() => setMobileOpen(false)} />
      </div>

      {/* Mobile button */}
      <button
        type="button"
        className={[
          "md:hidden inline-flex items-center justify-center",
          "h-10 w-10 rounded-lg",
          variant === "light"
            ? "text-white hover:bg-white/10"
            : "text-slate-900 hover:bg-slate-100",
          "transition",
        ].join(" ")}
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen((v) => !v)}
      >
        <span className="text-2xl leading-none">{mobileOpen ? "✕" : "☰"}</span>
      </button>
    </div>
  );
}

function MobileDropdown({
  variant,
  onNavigate,
}: {
  variant: "light" | "dark";
  onNavigate: () => void;
}) {
  return (
    <div className="transparent md:hidden w-full">
      <div className="px-6 py-4">
        <Menu variant={variant} mobile onNavigate={onNavigate} />
      </div>
    </div>
  );
}

function Logo({
  variant,
  onClick,
}: {
  variant: "light" | "dark";
  onClick?: () => void;
}) {
  return (
    <a href="#home" onClick={onClick} className="flex items-center gap-3">
      <Image
        src="/images/logo.png"
        alt="Aprender con Aidan logo"
        width={300}
        height={300}
        className="h-10 md:h-14 w-auto"
        priority
      />
      <span
        className={[
          "font-semibold tracking-wide text-lg transition-colors",
          variant === "light" ? "text-white" : "text-slate-900",
        ].join(" ")}
      >
        AVÍSPESE SPANISH
      </span>
    </a>
  );
}

function Menu({
  variant,
  mobile,
  onNavigate,
}: {
  variant: "light" | "dark";
  mobile?: boolean;
  onNavigate?: () => void;
}) {
  const linkBase =
    "text-sm md:text-base lg:text-lg relative pb-1 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:transition-all hover:after:w-full";

  const linkColors =
    variant === "light"
      ? "text-white after:bg-zinc-300"
      : "text-slate-900 after:bg-slate-900";

  if (mobile) {
    return (
      <ul className="flex flex-col gap-3">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              onClick={onNavigate}
              className={[
                "block w-full rounded-lg px-3 py-3 text-base font-medium",
                variant === "light"
                  ? "text-white hover:bg-white/10"
                  : "text-slate-900 hover:bg-slate-100",
                "transition",
              ].join(" ")}
            >
              {item.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
            onClick={onNavigate}
            className={[
              "block w-full rounded-lg border px-3 py-3 text-center text-base font-semibold",
              variant === "light"
                ? "border-white text-white hover:bg-white/10"
                : "border-slate-900 text-slate-900 hover:bg-slate-100",
              "transition",
            ].join(" ")}
          >
            BOOK
          </a>
        </li>
      </ul>
    );
  }

  return (
    <ul className="flex items-center gap-4 md:gap-6">
      {navItems.map((item) => (
        <li key={item.href}>
          <a href={item.href} className={`${linkBase} ${linkColors}`}>
            {item.label}
          </a>
        </li>
      ))}
      <li>
        <a
          href={bookingUrl}
          target="_blank"
          rel="noreferrer"
          className={[
            "inline-flex items-center rounded-lg border px-4 py-1.5 text-sm md:text-base lg:text-lg font-semibold transition",
            variant === "light"
              ? "border-white text-white hover:bg-white/15"
              : "border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white",
          ].join(" ")}
        >
          BOOK
        </a>
      </li>
    </ul>
  );
}
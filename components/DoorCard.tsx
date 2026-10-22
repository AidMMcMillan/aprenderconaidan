"use client";

import { useEffect, useRef, useState, type ReactNode, type RefObject } from "react";

// A lesson card styled like a painted Antioquian door: a decorative top
// (carved frieze, pagoda lintel or spoked fanlight), a thick painted frame, the door color
// behind a raised panel, a brass handle, and a stone step at the bottom.
// A fixed width and minimum height keep it door-shaped at every screen size.

const PEEK_MS = 900;

type DoorColors = {
  trim: string; // cornice and frame
  door: string; // door body behind the panel
  accent: string; // panel border, badge and button
};

type DoorTop = "frieze" | "pagoda" | "fanlight";

export default function DoorCard({
  colors,
  top,
  title,
  prices,
  deal,
  bookingUrl,
  children,
}: {
  colors: DoorColors;
  top: DoorTop;
  title: string;
  prices: ReactNode;
  deal: string;
  bookingUrl: string;
  children: ReactNode;
}) {
  const doorway = useRef<HTMLDivElement>(null);
  const peeking = usePeekOnScroll(doorway);

  return (
    <div className="mx-auto flex min-h-[504px] w-full max-w-[280px] flex-col md:min-h-[612px] md:max-w-[340px]">
      {/* Both tops share one height so cards in a row stay aligned */}
      <div className="flex h-16 md:h-20 flex-col justify-end">
        {top === "frieze" && <FriezeTop colors={colors} />}
        {top === "pagoda" && <PagodaTop colors={colors} />}
        {top === "fanlight" && <FanlightTop colors={colors} />}
      </div>
      <div className="h-1" style={{ background: colors.trim, filter: "brightness(0.8)" }} />

      {/* Frame → dark interior → door (swings out when Book Session is hovered, or once on scroll on phones) */}
      <div className="flex flex-1 flex-col p-3 md:p-4" style={{ background: colors.trim }}>
        <div
          ref={doorway}
          className="group/door relative flex flex-1 flex-col bg-[linear-gradient(90deg,#1c130d,#3b2a1e)] [perspective:1200px]"
        >
          <div
            className={`relative flex flex-1 flex-col origin-left p-2 md:pr-6 transition-[transform,box-shadow] duration-500 ease-out group-has-[a:hover]/door:[transform:rotateY(-18deg)] group-has-[a:hover]/door:shadow-[12px_8px_24px_rgba(0,0,0,0.45)] group-has-[a:focus-visible]/door:[transform:rotateY(-18deg)] motion-reduce:transition-none ${peeking ? "[transform:rotateY(-18deg)] shadow-[12px_8px_24px_rgba(0,0,0,0.45)]" : ""}`}
            style={{ background: colors.door }}
          >
            {/* Brass handle */}
            <span
              aria-hidden="true"
              className="absolute right-1.5 top-1/2 hidden h-12 w-2 md:block -translate-y-1/2 rounded-full bg-[#E8C766] shadow-[inset_-1px_-2px_0_rgba(0,0,0,0.3),1px_1px_2px_rgba(0,0,0,0.35)]"
            />
            <div
              className="flex flex-1 flex-col border-4 bg-black/10 px-5 py-5"
              style={{ borderColor: colors.accent }}
            >
              <h3 className="text-2xl md:text-[28px] font-semibold">{title}</h3>
              <p className="mt-1 text-lg md:text-xl">{prices}</p>
              <p className="mt-2">
                <span
                  className="inline-block rounded px-2 py-0.5 text-sm font-semibold text-slate-900"
                  style={{ background: colors.accent }}
                >
                  {deal}
                </span>
              </p>
              <p className="mt-3 flex-1 text-sm md:text-base font-light leading-relaxed">
                {children}
              </p>

              {/* Visible button; it swings with the door. The real link sits below. */}
              <span
                aria-hidden="true"
                className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-md text-sm md:text-base font-semibold tracking-wide text-slate-900 transition group-has-[a:hover]/door:brightness-110"
                style={{ background: colors.accent }}
              >
                Book Session
              </span>
            </div>
          </div>

          {/* The real link stays put over the button's resting spot, so the
              hover doesn't flicker while the door swings away from the cursor. */}
          <a
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Book a session: ${title}`}
            className="absolute bottom-8 left-8 right-8 h-11 md:right-12 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          />
        </div>
      </div>

      {/* Stone step */}
      <div className="-mx-2 h-2 bg-[#CFC8BE]" />
    </div>
  );
}

// On touch screens there's no hover, so each door swings open once, briefly,
// the first time it scrolls well into view.
function usePeekOnScroll(target: RefObject<HTMLElement | null>) {
  const [peeking, setPeeking] = useState(false);

  useEffect(() => {
    const el = target.current;
    if (!el) return;
    const canHover = window.matchMedia("(hover: hover)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (canHover || reducedMotion) return;

    let timer: ReturnType<typeof setTimeout> | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        setPeeking(true);
        timer = setTimeout(() => setPeeking(false), PEEK_MS);
      },
      { threshold: 0.6 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [target]);

  return peeking;
}

// Carved frieze with a diamond lattice under a wide cornice.
function FriezeTop({ colors }: { colors: DoorColors }) {
  const lattice = encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="${colors.accent}" stroke-width="2"><path d="M0 12 L12 3 L24 12 M0 12 L12 21 L24 12"/></svg>`,
  );
  return (
    <>
      <div className="-mx-3 h-3 rounded-t-sm" style={{ background: colors.trim }} />
      <div className="-mx-3 h-1" style={{ background: colors.trim, filter: "brightness(0.8)" }} />
      <div
        className="-mx-1 h-8 md:h-10 bg-center bg-repeat-x"
        style={{
          backgroundColor: colors.trim,
          backgroundImage: `url("data:image/svg+xml,${lattice}")`,
          backgroundSize: "24px 24px",
        }}
      />
    </>
  );
}

// Swooping pagoda lintel topped with a little painted flower.
function PagodaTop({ colors }: { colors: DoorColors }) {
  return (
    <div className="relative -mx-4">
      <svg
        viewBox="0 0 34 30"
        className="absolute bottom-full left-1/2 mb-[-2px] h-9 md:h-11 w-auto -translate-x-1/2"
        aria-hidden="true"
      >
        <path d="M17 30 V16" stroke="#3E8E41" strokeWidth="2" />
        <path d="M17 24 Q10 20 8 24 Q12 27 17 24 Z" fill="#3E8E41" />
        <path d="M17 24 Q24 20 26 24 Q22 27 17 24 Z" fill="#3E8E41" />
        {[0, 72, 144, 216, 288].map((deg) => (
          <ellipse
            key={deg}
            cx="17"
            cy="5"
            rx="3"
            ry="5"
            fill="#E63946"
            transform={`rotate(${deg} 17 10)`}
          />
        ))}
        <circle cx="17" cy="10" r="2.6" fill="#FBF6EC" />
      </svg>
      <svg
        viewBox="0 0 300 30"
        preserveAspectRatio="none"
        className="block h-7 md:h-9 w-full"
        aria-hidden="true"
      >
        <path d="M0 30 Q50 28 78 2 H222 Q250 28 300 30 Z" fill={colors.trim} />
      </svg>
    </div>
  );
}

// Half-round fanlight with colorful spokes radiating from a hub, like the
// arched doors in the street border. It stretches to the door's width, so
// strokes keep their thickness with non-scaling-stroke.
function FanlightTop({ colors }: { colors: DoorColors }) {
  const spokes = Array.from({ length: 9 }, (_, k) => 10 + k * 20);
  return (
    <svg
      viewBox="0 0 300 80"
      preserveAspectRatio="none"
      className="block h-16 md:h-20 w-full"
      aria-hidden="true"
    >
      {/* Glass, then spokes, then the arch on top so the spokes tuck behind it */}
      <path d="M0 80 A150 80 0 0 1 300 80 Z" fill="#2B3A4A" />
      {spokes.map((deg, k) => {
        const rad = (deg * Math.PI) / 180;
        return (
          <line
            key={deg}
            x1={150 + 26 * Math.cos(rad)}
            y1={80 - 16 * Math.sin(rad)}
            x2={150 + 142 * Math.cos(rad)}
            y2={80 - 75 * Math.sin(rad)}
            stroke={k % 2 ? colors.door : colors.accent}
            strokeWidth="5"
            vectorEffect="non-scaling-stroke"
          />
        );
      })}
      <path
        d="M0 80 A150 80 0 0 1 300 80 Z M16 80 A134 68 0 0 1 284 80 Z"
        fill={colors.trim}
        fillRule="evenodd"
      />
      <path d="M122 80 A28 18 0 0 1 178 80 Z" fill={colors.accent} />
      <path d="M136 80 A14 9 0 0 1 164 80 Z" fill={colors.door} />
    </svg>
  );
}

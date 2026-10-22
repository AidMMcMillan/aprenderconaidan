import type { ReactNode } from "react";

// A lesson card styled like a painted Antioquian door: a decorative top
// (carved frieze or pagoda lintel), a thick painted frame, the door color
// behind a raised panel, a brass handle, and a stone step at the bottom.

type DoorColors = {
  trim: string; // cornice and frame
  door: string; // door body behind the panel
  accent: string; // panel border, badge and button
};

type DoorTop = "frieze" | "pagoda";

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
  return (
    <div className="flex flex-col">
      {/* Both tops share one height so cards in a row stay aligned */}
      <div className="flex h-16 md:h-20 flex-col justify-end">
        {top === "frieze" ? <FriezeTop colors={colors} /> : <PagodaTop colors={colors} />}
      </div>
      <div className="h-1" style={{ background: colors.trim, filter: "brightness(0.8)" }} />

      {/* Frame → dark interior → door (swings out toward you when Book Session is hovered) */}
      <div className="flex flex-1 flex-col p-3 md:p-4" style={{ background: colors.trim }}>
        <div className="group/door relative flex flex-1 flex-col bg-[linear-gradient(90deg,#1c130d,#3b2a1e)] [perspective:1200px]">
          <div
            className="relative flex flex-1 flex-col origin-left p-2 md:pr-6 transition-[transform,box-shadow] duration-500 ease-out group-has-[a:hover]/door:[transform:rotateY(-18deg)] group-has-[a:hover]/door:shadow-[12px_8px_24px_rgba(0,0,0,0.45)] group-has-[a:focus-visible]/door:[transform:rotateY(-18deg)] motion-reduce:transition-none"
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

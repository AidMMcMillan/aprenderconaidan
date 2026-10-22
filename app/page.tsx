import Image from "next/image";
import PuertasPaisas from "@/components/PuertasPaisas";
import { bookingUrl } from "@/config/NavItems";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* HEADER / HERO */}
      <header
        id="home"
        className="flex min-h-screen w-full flex-wrap items-center justify-between bg-[linear-gradient(rgba(4,9,30,0.55),rgba(4,9,30,0.55)),url('/images/banner.png')] bg-cover bg-center"
      >
        {/* HERO CONTENT */}
        <div className="w-full px-[7.5%] pb-10 pt-10">
          <div className="max-w-4xl text-white">
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              ¡Hola, me llamo Aidan!
            </h1>
            <p className="mt-4 text-lg md:text-2xl font-medium">
              Private &amp; group Spanish lessons for students and adults, at
              every level.
            </p>
            <p className="mt-4 mb-10 text-base md:text-lg font-light leading-relaxed text-white/85">
              Want to finally charm your partner&apos;s family at dinner? Joke
              around with your coworkers? Actually understand the Bad Bunny
              song you&apos;ve been singing along to, or get lost in the magical
              realism of García Márquez the way he wrote it?{" "}
              <span className="font-semibold text-white">
                Spanish opens all of it up to you. Let&apos;s get you there.
              </span>
            </p>

            <div className="flex h-12 w-[300px] md:w-[345px] items-center justify-between gap-4">
              <a
                href="#about"
                className="
                  inline-flex h-full w-[140px] md:w-[150px]
                  items-center justify-center
                  rounded-lg border border-zinc-300
                  text-sm md:text-lg font-semibold tracking-wide text-white
                  transition-all duration-300
                  backdrop-blur-[0px]
                  hover:backdrop-blur-[3px]
                "
              >
                Learn More
              </a>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex h-full w-[140px] md:w-[150px]
                  items-center justify-center
                  rounded-lg border border-zinc-300
                  text-sm md:text-lg font-semibold tracking-wide text-white
                  transition-all duration-300
                  backdrop-blur-[0px]
                  hover:backdrop-blur-[3px]
                "
              >
                Book Session
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="scroll-mt-18 md:scroll-mt-26 flex w-full items-center justify-center bg-white"
      >
        <div className="w-[85%] py-14 text-slate-900">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center">
            <div className="flex justify-center lg:flex-shrink-0 lg:w-[300px] lg:h-[300px]">
              <Image
                src="/images/profile_pic.png"
                alt="Aidan McMillan"
                width={300}
                height={300}
                className="h-52 w-52 md:h-[300px] md:w-[300px] rounded-full object-cover"
              />
            </div>

            <div className="lg:pl-12 text-center lg:text-left">
              <h2 className="text-3xl md:text-[55px] font-semibold">
                About Me
              </h2>
              <p className="mt-4 text-sm md:text-base font-light leading-relaxed md:pr-4">
                My name is Aidan McMillan and I offer private and group Spanish
                lessons to any level of learner! I&apos;m a Middlebury College
                graduate now living in New York City. At Middlebury, I worked
                as a Spanish tutor with the college and volunteered weekly as a
                medical interpreter for migrant workers in Addison County.
                I also spent a year working at Literacy Volunteers
                in New Britain, CT.
                <br />
                <br />
                After various years learning French in school, I found myself
                frustrated with the way languages were taught in public school.
                After researching methods to better learn languages, I decided I
                would learn Spanish on my own. I was surprised that after a few
                months of this new method of maximum immersion, I could already
                hold a decent conversation in the language. I soon fell in love
                with the language and after meeting a language exchange partner
                from Colombia, picked up the Colombian dialect and idioms. I
                later studied abroad in Colombia and have been back many times
                since, further deepening my cultural knowledge! Language is like a key that opens you to a
                whole new world of culture and ideas. I hope that my methods of
                teaching and learning can be <b>your</b> key to that world!
              </p>
            </div>
          </div>

          {/* GALLERY */}
          <div className="mt-10 flex w-full flex-wrap items-center justify-center gap-4 text-center">
            <Image
              src="/images/gallery1.jpg"
              alt="A statue in a colonial courtyard"
              width={300}
              height={300}
              className="h-60 w-60 object-cover"
            />
            <Image
              src="/images/gallery2.jpg"
              alt="Fruit piled high at a market stall"
              width={300}
              height={300}
              className="h-60 w-60 object-cover"
            />
            <Image
              src="/images/gallery3.jpg"
              alt="Cyclists riding down a city street"
              width={300}
              height={300}
              className="h-60 w-60 object-cover"
            />
          </div>
        </div>
      </section>

      <PuertasPaisas />

      {/* HOW I TEACH SECTION */}
      <section
        id="how-i-teach"
        className="scroll-mt-18 md:scroll-mt-26 flex w-full items-center justify-center bg-slate-50"
      >
        <div className="w-[85%] max-w-5xl py-14 text-center text-slate-900">
          <h2 className="text-3xl md:text-[55px] font-semibold">
            How I Teach
          </h2>
          <p className="mt-3 text-lg md:text-2xl font-medium">
            Real Spanish, not school Spanish.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-sm md:text-base font-light leading-relaxed">
            Every lesson is one-on-one or with your own group, so there&apos;s
            no fixed curriculum to keep up with. The goal isn&apos;t passing a
            class, it&apos;s getting good at the language. When that clicks,
            everything else follows, including the grades and exam scores.
          </p>

          <div className="mt-12 flex flex-col items-center gap-6 md:flex-row md:items-start md:gap-4">
            <div className="max-w-xs md:flex-1">
              <h3 className="text-xl md:text-2xl font-semibold">We talk</h3>
              <p className="mt-2 text-sm md:text-base font-light leading-relaxed">
                In our first session I get a feel for where your Spanish is
                and what you want to do with it.
              </p>
            </div>
            <FlowArrow />
            <div className="max-w-xs md:flex-1">
              <h3 className="text-xl md:text-2xl font-semibold">
                I tailor a plan
              </h3>
              <p className="mt-2 text-sm md:text-base font-light leading-relaxed">
                We set concrete goals together, like getting through a family
                dinner, a work meeting, or a trip, and build every lesson
                around your level and those goals.
              </p>
            </div>
            <FlowArrow />
            <div className="max-w-xs md:flex-1">
              <h3 className="text-xl md:text-2xl font-semibold">
                You actually use it
              </h3>
              <p className="mt-2 text-sm md:text-base font-light leading-relaxed">
                We speak as much as possible, because conversation is the
                fastest way to real fluency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LESSONS SECTION */}
      <section
        id="lessons"
        className="scroll-mt-18 md:scroll-mt-26 flex min-h-[700px] w-full items-center justify-center bg-[linear-gradient(rgba(4,9,30,0.55),rgba(4,9,30,0.55)),url('/images/banner2.png')] bg-cover bg-center md:bg-fixed"
      >
        <div className="w-[85%] max-w-4xl py-14 text-center text-white">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-[55px] font-semibold mb-8">
              Lessons
            </h2>

            <div className="grid gap-6 md:grid-cols-2 text-left">
              <div className="flex flex-col rounded-lg border border-zinc-300 bg-black/20 px-6 py-6 backdrop-blur-[3px]">
                <h3 className="text-2xl md:text-[28px] font-semibold">
                  Private Lessons
                </h3>
                <p className="mt-1 text-lg md:text-xl">
                  <span className="font-semibold">$45</span>{" "}
                  <span className="font-light">/ 1 hour in person</span>
                  <br />
                  <span className="font-semibold">$35</span>{" "}
                  <span className="font-light">/ 1 hour online</span>
                </p>
                <p className="mt-1 text-sm md:text-base font-medium text-[#F6C445]">
                  First lesson: $20
                </p>
                <p className="mt-3 flex-1 text-sm md:text-base font-light leading-relaxed">
                  The full package, at any level. Each lesson mixes teaching
                  and drills on grammar and vocab with real conversation
                  practice, all tailored to your goals. Includes everything in
                  Conversation Practice. Great for students too.
                </p>
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-lg border border-zinc-300 text-sm md:text-base font-semibold tracking-wide text-white transition-all duration-300 hover:bg-white/10 hover:backdrop-blur-[3px]"
                >
                  Book Session
                </a>
              </div>
              <div className="flex flex-col rounded-lg border border-zinc-300 bg-black/20 px-6 py-6 backdrop-blur-[3px]">
                <h3 className="text-2xl md:text-[28px] font-semibold">
                  Conversation Practice
                </h3>
                <p className="mt-1 text-lg md:text-xl">
                  <span className="font-semibold">$15</span>{" "}
                  <span className="font-light">/ 30 minutes</span>
                  <br />
                  <span className="font-light">In person or online</span>
                </p>
                <p className="mt-1 text-sm md:text-base font-medium text-[#F6C445]">
                  First session: $10
                </p>
                <p className="mt-3 flex-1 text-sm md:text-base font-light leading-relaxed">
                  Just talking, at any level. As we chat I note new vocab and
                  corrections, we go over them briefly at the end, and I send
                  them to you afterward so you can review.
                </p>
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-lg border border-zinc-300 text-sm md:text-base font-semibold tracking-wide text-white transition-all duration-300 hover:bg-white/10 hover:backdrop-blur-[3px]"
                >
                  Book Session
                </a>
              </div>
            </div>
            <p className="mt-6 text-sm md:text-base font-light leading-relaxed">
              Online, or in person in New York City, at your home or a café,
              wherever works for you.
              <br />
              Group lessons: add <span className="font-medium">$10</span> for
              each extra person.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="flex w-full flex-col items-center border-t border-slate-200 pt-6">
        <p className="px-4 pb-8 pt-2 text-center text-base leading-relaxed">
          Email:{" "}
          <a
            href="mailto:aidmmcmillan@gmail.com"
            className="text-blue-600 underline-offset-2 hover:underline"
          >
            aidmmcmillan@gmail.com
          </a>
          <br />
          Phone:{" "}
          <a
            href="tel:8607597424"
            className="text-blue-600 underline-offset-2 hover:underline"
          >
            (860)759-7424
          </a>
          <br />
          <span className="text-sm text-slate-500">
            © 2026 Avíspese Spanish · Photos by Aidan McMillan
          </span>
        </p>
      </footer>
    </div>
  );
}

function FlowArrow() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 24"
      className="h-6 w-12 flex-shrink-0 rotate-90 text-slate-400 md:mt-3 md:rotate-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12h42M34 4l10 8-10 8" />
    </svg>
  );
}

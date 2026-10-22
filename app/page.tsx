import Image from "next/image";
import PuertasPaisas from "@/components/PuertasPaisas";

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
                href="https://forms.gle/k8jC5A2Je27fJfeM6"
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
              <h1 className="text-3xl md:text-[55px] font-semibold">
                About Me
              </h1>
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
              alt="Spanish learning gallery 1"
              width={300}
              height={300}
              className="h-60 w-60 object-cover"
            />
            <Image
              src="/images/gallery2.jpg"
              alt="Spanish learning gallery 2"
              width={300}
              height={300}
              className="h-60 w-60 object-cover"
            />
            <Image
              src="/images/gallery3.jpg"
              alt="Spanish learning gallery 3"
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
            everything else follows.
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
                Lessons are built around your level and your goals, whether
                that&apos;s travel, family, work, music, or school.
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
        className="scroll-mt-18 md:scroll-mt-26 flex min-h-[700px] w-full items-center justify-center bg-[linear-gradient(rgba(4,9,30,0.55),rgba(4,9,30,0.55)),url('/images/banner2.png')] bg-cover bg-center bg-fixed"
      >
        <div className="w-[85%] max-w-4xl py-14 text-center text-white">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-[55px] font-semibold mb-8">
              Lessons
            </h2>

            <div className="grid gap-6 md:grid-cols-2 text-left">
              <div className="rounded-lg border border-zinc-300 bg-black/20 px-6 py-6 backdrop-blur-[3px]">
                <h3 className="text-2xl md:text-[28px] font-semibold">
                  Private Lessons
                </h3>
                <p className="mt-1 text-lg md:text-xl">
                  <span className="font-semibold">$45</span>{" "}
                  <span className="font-light">/ 1 hour</span>
                </p>
                <p className="mt-3 text-sm md:text-base font-light leading-relaxed">
                  Lessons tailored to you. We start by finding your level and
                  goals, then build each session around them, from first words
                  to advanced conversation. Great for students too.
                </p>
              </div>
              <div className="rounded-lg border border-zinc-300 bg-black/20 px-6 py-6 backdrop-blur-[3px]">
                <h3 className="text-2xl md:text-[28px] font-semibold">
                  Conversation Practice
                </h3>
                <p className="mt-1 text-lg md:text-xl">
                  <span className="font-semibold">$20</span>{" "}
                  <span className="font-light">/ 30 minutes</span>
                </p>
                <p className="mt-3 text-sm md:text-base font-light leading-relaxed">
                  Just talking. For anyone who already knows some Spanish and
                  needs more time speaking it. I&apos;ll correct mistakes and
                  bring in new vocab as it comes up.
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm md:text-base font-light">
              Group lessons: add <span className="font-medium">$10</span> for
              each extra person.
            </p>
          </div>

          <div className="mt-10 flex h-12 w-full items-center justify-center">
            <a
              href="https://forms.gle/k8jC5A2Je27fJfeM6"
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
      </section>

      {/* STUDENTS & PARENTS SECTION */}
      <section
        id="parents"
        className="scroll-mt-18 md:scroll-mt-26 flex w-full items-center justify-center bg-white"
      >
        <div className="w-[85%] max-w-3xl py-14 text-center text-slate-900">
          <h2 className="text-3xl md:text-[55px] font-semibold">
            For Students &amp; Parents
          </h2>
          <p className="mt-6 text-lg md:text-2xl font-medium leading-snug">
            I&apos;m not here to cram for the next quiz. I help students
            actually get good at Spanish: speaking it, understanding it,
            thinking in it.
          </p>
          <p className="mt-4 text-sm md:text-base font-light leading-relaxed">
            When that clicks, the grades and exam scores take care of
            themselves. I learned this firsthand: years of French classes never
            got me speaking, but immersion had me holding conversations in
            Spanish within months. Lessons are tailored to each student, so
            they can line up with what&apos;s being covered in class while
            going further than the textbook.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="flex w-full flex-col items-center border-t border-slate-200 pt-5">
        <div className="flex items-center justify-center">
          <a
            href="http://instagram.com/_u/aidmmcmillan/"
            target="_blank"
            rel="noreferrer"
            className="p-2"
          >
            <Image
              src="/images/insta.png"
              alt="Instagram"
              width={30}
              height={30}
            />
          </a>
          <a
            href="https://facebook.com/aidan.mcmillan.965/"
            target="_blank"
            rel="noreferrer"
            className="p-2"
          >
            <Image
              src="/images/fb.png"
              alt="Facebook"
              width={30}
              height={30}
            />
          </a>
        </div>
        <p className="px-4 pb-8 pt-2 text-center text-base leading-relaxed">
          Author and images by: Aidan McMillan
          <br />
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

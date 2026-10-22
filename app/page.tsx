import Image from "next/image";

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
              Private &amp; group Spanish lessons for every level.
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
          <div className="mt-10 flex w-full flex-wrap items-center justify-center gap-4 pb-10 text-center">
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

      {/* COURSES SECTION */}
      <section
        id="courses"
        className="scroll-mt-18 md:scroll-mt-26 flex min-h-[700px] w-full items-center justify-center bg-[linear-gradient(rgba(4,9,30,0.55),rgba(4,9,30,0.55)),url('/images/banner2.png')] bg-cover bg-center bg-fixed"
      >
        <div className="w-[85%] max-w-4xl py-14 text-center text-white">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl md:text-[55px] font-semibold mb-8">
              Courses
            </h1>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl md:text-[35px] font-semibold">
                  Level 1: Principiante
                </h2>
                <p className="mt-2 text-sm md:text-base font-light leading-relaxed">
                  This level is for beginners. In these lessons we will go over
                  the basics of pronunciation and build basic grammar by
                  memorizing the most frequently used words. We will work
                  through the basic sentence structure and grammar including
                  simple verb conjugations and gender agreement.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-[35px] font-semibold">
                  Level 2: Intermedio
                </h2>
                <p className="mt-2 text-sm md:text-base font-light leading-relaxed">
                  This level is for intermediate learners. In these lessons we
                  will work to improve pronunciation and build up a more complex
                  and robust set of vocab through conversation, and learn more
                  specialized terms based on your topics of interest. We will
                  work on more complex grammar including subjunctive,
                  preterite/imperfect and more.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-[35px] font-semibold">
                  Level 3: Avanzado
                </h2>
                <p className="mt-2 text-sm md:text-base font-light leading-relaxed">
                  This level is for the more advanced learners. These lessons
                  will be very conversation heavy, as conversation is a huge key
                  to reaching fluency. I will explain errors or new concepts as
                  they arise. These lessons are for those who have the
                  fundamentals down and are looking to bring their Spanish to
                  the next level.
                </p>
              </div>

              <h2 className="pt-4 text-2xl md:text-[35px] font-semibold">
                Pricing
              </h2>
              <div className="mx-auto mt-2 max-w-md rounded-lg border border-zinc-300 bg-black/20 px-6 py-5 backdrop-blur-[3px]">
                <p className="text-base md:text-lg font-light leading-relaxed">
                  All lessons are 1 hour long.
                  <br />
                  <span className="font-medium">$25</span> per lesson, plus{" "}
                  <span className="font-medium">$10</span> for each extra
                  person in a group lesson.
                </p>
              </div>
            </div>
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

      {/* FOOTER */}
      <footer className="mt-5 flex w-full flex-col items-center">
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

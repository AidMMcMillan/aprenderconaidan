"use client";

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
          <div className="max-w-xl text-white">
            <h1 className="text-3xl md:text-4xl font-semibold">
              ¡Hola, me llamo Aidan!
            </h1>
            <p className="mt-5 mb-10 text-base md:text-lg font-light leading-relaxed">
              I am a Spanish language tutor who is passionate about teaching and
              learning languages. I have multiple years of experience as a
              Spanish tutor at Middlebury College as well as first hand
              experience reaching fluency in Spanish! This summer I am offering
              private or group Spanish lessons in Burlington, VT for all levels
              of learners. If you are interested in improving your Spanish
              conversational skills or are looking to begin your Spanish
              journey, contact me to set up a session!
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
                  hover:backdrop-blur-[33px]
                "
              >
                Learn More
              </a>
              <a
                href="#courses"
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
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
            <div className="flex justify-center md:flex-shrink-0 md:w-[300px] md:h-[300px]">
              <Image
                src="/images/profile_pic.png"
                alt="Aidan McMillan"
                width={300}
                height={300}
                className="h-52 w-52 md:h-[300px] md:w-[300px] rounded-full object-cover"
              />
            </div>

            <div className="md:pl-12 text-center md:text-left">
              <h1 className="text-3xl md:text-[55px] font-semibold">
                About Me
              </h1>
              <p className="mt-4 text-sm md:text-base font-light leading-relaxed md:pr-4">
                My name is Aidan McMillan and I&apos;m currently a student at
                Middlebury College in Vermont. This summer of 2023 I am living
                in Burlington and offering private and group Spanish lessons to
                any level of learner! During the school year, I work as a
                Spanish tutor with the college, furthermore I volunteer weekly
                as a medical interpreter for migrant workers in Addison county.
                <br />
                <br />
                After various years learning French in school, I found myself
                frustrated with the way languages were taught in public school.
                After researching methods to better learn languages, I decided I
                would learn Spanish on my own. I was surprised that after a few
                months of this new method of maximum immersion, I could already
                hold a decent conversation in the language. I soon fell in love
                with the language and after meeting a language exchange partner
                from Colombia, picked up the Colombian dialect and idioms. Last
                year, I studied abroad in Colombia and further deepened my
                cultural knowledge! Language is like a key that opens you to a
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

              <h3 className="pt-4 text-base md:text-lg font-medium">
                All lessons are 1hr long. Each lesson is 25$ plus 10$ for each
                extra person added if you wish to do a group lesson.
              </h3>
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

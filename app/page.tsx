// app/page.tsx
"use client";

import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    const anchorlinks = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');

    const handler = (e: Event) => {
      const target = e.currentTarget as HTMLAnchorElement;
      const hashval = target.getAttribute("href");
      if (!hashval) return;

      const el = document.querySelector(hashval);
      if (!el) return;

      e.preventDefault();
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      history.pushState(null, "", hashval);
    };

    anchorlinks.forEach((item) => item.addEventListener("click", handler));

    return () => {
      anchorlinks.forEach((item) => item.removeEventListener("click", handler));
    };
  }, []);

  return (
    <>
      <header id="home" className="header">
        <nav>
          <a href="#home">
            <img src="/images/logo.png" alt="Aprender con Aidan logo" />
          </a>
          <div className="nav-links">
            <ul>
              <li>
                <a href="#home">HOME</a>
              </li>
              <li>
                <a href="#about">ABOUT</a>
              </li>
              <li>
                <a href="#courses">COURSES</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="home-content">
          <h1>¡Hola, me llamo Aidan!</h1>
          <p>
            I am a Spanish language tutor who is passionate about teaching and
            learning languages. I have multiple years of experience as a
            Spanish tutor at Middlebury College as well as first hand experience
            reaching fluency in Spanish! This summer I am offering private or
            group Spanish lessons in Burlington, VT for all levels of learners.
            If you are interested in improving your Spanish conversational
            skills or are looking to begin your Spanish journey, contact me to
            set up a session!
          </p>
          <div className="button-box">
            <a href="#about">Learn More</a>
            <a href="#courses">Book Session</a>
          </div>
        </div>
      </header>

      <section id="about" className="about">
        <div className="about-content">
          <div className="about-info">
            <img
              src="/images/profile_pic.png"
              className="rounded"
              alt="Aidan McMillan"
            />
            <div className="about-text">
              <h1>About Me</h1>
              <p>
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
                would learn Spanish on my own. I was suprised that after a few
                months of this new method of maximum immersion, I could already
                hold a decent conversation in the language. I soon fell in love
                with the language and after meeting a language exchange partner
                from Colombia, picked up the Colombian dialect and idioms. Last
                year, I studied abroad in Colombia and further deepend my
                cultural knowledge! Language is like a key that opens you to a
                whole new world of culture and ideas. I hope that my methods of
                teaching and learning can be <b>your</b> key to that world!
              </p>
            </div>
          </div>
          <div className="about-gallery">
            <img
              src="/images/gallery1.jpg"
              className="gallery"
              alt="Spanish learning gallery 1"
            />
            <img
              src="/images/gallery2.jpg"
              className="gallery"
              alt="Spanish learning gallery 2"
            />
            <img
              src="/images/gallery3.jpg"
              className="gallery"
              alt="Spanish learning gallery 3"
            />
          </div>
        </div>
      </section>

      <section id="courses" className="courses">
        <div className="courses-content">
          <div className="courses-info">
            <h1>Courses</h1>
            <h2>Level 1: Principiante</h2>
            <p>
              This level is for beginers. In these lessons we will go over the
              basics of pronunciation and build basic grammar by memorizing the
              most frequently used words. We will work through the basic
              sentence structure and grammar including simple verb conjugations
              and gender agreement.
            </p>
            <h2>Level 2: Intermedio</h2>
            <p>
              This level is for intermediate learners. In these lessons we will
              work to improve pronunciation and build up a more complex and
              robust set of vocab through conversation, and learn more
              specialized terms based on your topics of interest. We will work
              on more complex grammar including subjunctive,
              preterite/imperfect and more.
            </p>
            <h2>Level 3: Avanzado</h2>
            <p>
              This level is for the more advanced learners. These lessons will
              be very conversation heavy, as conversation is a huge key to
              reaching fluency. I will explain errors or new concepts as they
              arise. These lessons are for those who have the fundamentals down
              and are looking to bring their Spanish to the next level.
            </p>
            <h3>
              All lessons are 1hr long. Each lesson is 25$ plus 10$ for each
              extra person added if you wish to do a group lesson.
            </h3>
          </div>
          <div className="button-box">
            <a
              href="https://forms.gle/k8jC5A2Je27fJfeM6"
              target="_blank"
              rel="noreferrer"
            >
              Book Session
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="contact">
          <a
            href="http://instagram.com/_u/aidmmcmillan/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/images/insta.png" alt="Instagram" />
          </a>
          <a
            href="https://facebook.com/aidan.mcmillan.965/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/images/fb.png" alt="Facebook" />
          </a>
        </div>
        <p>
          Author and images by: Aidan McMillan
          <br />
          Email:{" "}
          <a href="mailto:aidmmcmillan@gmail.com">
            aidmmcmillan@gmail.com
          </a>
          <br />
          Phone: <a href="tel:8607597424">(860)759-7424</a>
        </p>
      </footer>
    </>
  );
}
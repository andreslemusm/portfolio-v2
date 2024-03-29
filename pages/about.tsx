import { Anchor, IconAnchor } from "@components/lib/buttons";
import { SocialNetworks } from "@utils/constants";
import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

const About = () => (
  <Fragment>
    <Head>
      {/* <!-- Primary Meta Tags --> */}
      <title>About | Andres Lemus</title>
      <meta name="title" content="About | Andres Lemus" />
      <meta name="description" content="All about Andres Lemus" />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://andreslemus.dev/about" />
      <meta property="og:title" content="About | Andres Lemus" />
      <meta property="og:description" content="All about Andres Lemus" />
      <meta property="og:image" content="https://andreslemus.dev/preview.png" />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://andreslemus.dev/about" />
      <meta property="twitter:title" content="About | Andres Lemus" />
      <meta property="twitter:description" content="All about Andres Lemus" />
      <meta
        property="twitter:image"
        content="https://andreslemus.dev/preview.png"
      />
    </Head>
    <h1 className="mt-10 text-5xl text-white font-bold tracking-tighter">
      Hi, I&apos;m Andres 👋
    </h1>
    <p className="mt-6 text-lg">
      I&apos;m a Front-end engineer. I was born in 1998 (you can do the math)
      and grew up in the city of Montería,{" "}
      <a href="https://www.colombia.travel/en" className="group">
        <span className="transition-colors text-yellow-300 group-hover:text-yellow-400">
          Co
        </span>
        <span className="transition-colors text-blue-400 group-hover:text-blue-500">
          lom
        </span>
        <span className="transition-colors text-red-500 group-hover:text-red-600">
          bia
        </span>
      </a>
      .
    </p>
    <section className="mt-32 grid gap-y-20 md:grid-cols-2 md:gap-x-12 lg:gap-x-44">
      <article className="prose prose-lg">
        <h2 id="me">
          <a href="#me">#</a> Me
        </h2>
        <p>
          I went to the{" "}
          <a href="https://unal.edu.co/en.html">
            National University of Colombia
          </a>{" "}
          where I studied <strong>Systems Engineer</strong> with an emphasis in
          Networking (yes, I&apos;m a big fan of the internet 🤷‍♂️). I didn&apos;t
          graduate and probably never will since I already learned the topics
          that would make a difference in my career (OOP, FP, data structures,
          and compilers). Also, today companies don&apos;t require you to have a
          degree, so it isn&apos;t worth investing time.
        </p>
        <p>
          After deciding to focus on learning everything related to front-end
          development (I used{" "}
          <a href="https://roadmap.sh/frontend">this roadmap</a> to track the
          topics I needed to learn), I spent almost 3 months learning everything
          from HTML up to ReactJS. Finally, I got my first job in May 2020 at{" "}
          <a href="https://fluidattacks.com/">Fluid Attacks</a>.
        </p>
        <p>Like everyone, I had difficulties in my learning process:</p>
        <ul>
          <li>Something didn&apos;t click immediately.</li>
          <li>
            I forgot about something I supposedly learned a week before. 😕
          </li>
          <li>
            Sometimes it was just that the topic was too difficult to wrap my
            head around it.
          </li>
        </ul>
        <p>
          My advice if you&apos;re having the same difficulties is to take{" "}
          <a href="https://www.coursera.org/learn/learning-how-to-learn">
            this course
          </a>
          . It&apos;ll give you powerful tools to improve your learning ability,
          and the best thing, is freemium! 🥳.
        </p>
      </article>
      <article className="prose prose-lg">
        <h2 id="now">
          <a href="#now">#</a> Now
        </h2>
        <p>
          I now work as a Frontend Tech Lead for the Ottomoto account at{" "}
          <a href="https://www.leangroup.com/solutions/leantech">Lean Tech</a>.
          I&apos;ve been developing websites from{" "}
          <a href="https://fithub.com.co/">e-commerce sites</a> to{" "}
          <a href="https://v2.ottomotoapp.com/">web applications</a>{" "}
          for more than 1 year.
        </p>
        <p>
          I continue spending a lot of time learning new technologies, patterns,
          libraries, etc. And I&apos;m trying different ways to find a balance
          within that, my current hobbies (CrossFit, videogames, and movies) and
          the ones I&apos;m trying to build (traveling, cooking and writing).
        </p>
        <p>
          I&apos;m going to start{" "}
          <Link href="/blog" passHref>
            <a>creating content</a>
          </Link>{" "}
          about frontend development, so I invite you to maintain contact
          through my social networks:
        </p>
        <div className="flex gap-x-5">
          <a href={SocialNetworks.twitter}>
            <AiFillTwitterCircle className="h-14 w-14" />
          </a>
          <a href={SocialNetworks.github}>
            <AiFillGithub className="h-14 w-14 " />
          </a>
          <a href={SocialNetworks.linkedin}>
            <AiFillLinkedin className="h-14 w-14" />
          </a>
        </div>
      </article>
    </section>
  </Fragment>
);

export default About;

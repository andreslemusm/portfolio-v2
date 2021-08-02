import reactLogo from "@assets/react.svg";
import profilePicture from "@assets/profile-picture.jpg";
import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import { React } from "@assets/react";

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Andres Lemus</title>
      </Head>
      <div className="mt-10 h-16 w-16 rounded-full overflow-hidden">
        <Image src={profilePicture} alt="Andres Lemus at Monserrate" />
      </div>

      <article className="pt-5">
        <h1 className="pl-1 font-normal text-green-300 md:text-lg">
          Hi, my name is
        </h1>
        <h2 className="pt-5 font-semibold text-4xl md:text-5xl lg:text-6xl">
          Andres Lemus.
        </h2>
        <h3 className="pt-2 text-gray-400 font-semibold text-4xl md:text-5xl md:pt-3 lg:text-6xl">
          I build things with{" "}
          <span className="text-[#61dafb]">
            React <React className="h-8 w-8 inline-block" />
          </span>
          .
        </h3>
        <p className="pt-5 text-gray-400 prose md:pt-7 md:prose-lg">
          I&apos;m a Front-end Engineer specializing in building exceptional web
          applications. In my free time, I&apos;m probably working on personal
          projects or learning new things. BUT, you could find me doing
          Calisthenics, Traveling, Reading, playing Videogames and recently
          cooking.
        </p>
      </article>
    </Fragment>
  );
};

export default Home;

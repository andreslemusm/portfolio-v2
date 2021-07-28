import profilePicture from "@assets/profile-picture.jpg";
import { Button } from "@components/lib/buttons";
import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Andres Lemus</title>
      </Head>
      <div className="mt-10 h-16 w-16 rounded-full overflow-hidden">
        <Image src={profilePicture} alt="Andres Lemus at Monserrate" />
      </div>
      <h1 className="mt-6 text-5xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
        Hi, <br className="sm:hidden" />
        I&apos;m <span className="text-green-300">Andres</span>.
      </h1>
      <p className="mt-3 font-semibold text-gray-300 text-3xl md:text-4xl lg:text-5xl">
        Frontend Engineer in Colombia 🇨🇴.
      </p>
      <p className="mt-5 text-gray-400 prose">
        My awesome description Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Animi consectetur nesciunt iste et accusamus est
        corrupti vitae voluptas incidunt deserunt sit, quaerat laborum odio?
        Corporis reiciendis veritatis doloremque eveniet saepe.
      </p>
    </Fragment>
  );
};

export default Home;

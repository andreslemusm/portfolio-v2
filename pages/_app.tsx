import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Brand } from "@assets/index";
import Link from "next/link";
import { Anchor } from "@components/lib/buttons";
import { NavLink } from "@components/lib/nav-link";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { SocialNetworks } from "@utils/constants";

const navItems = ["about", "blog"];

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container mx-auto px-5">
      <header className="flex justify-between py-10">
        <Link href="/" passHref>
          <a>
            <Brand className="h-14 w-14 md:h-20 md:w-20" />
          </a>
        </Link>
        <div className="hidden md:flex gap-x-5 items-center">
          {navItems.map((navItem) => (
            <NavLink
              key={navItem}
              href={`/${navItem}`}
              baseClassName="transition-colors items-center justify-center border font-medium inline-flex rounded-sm text-sm capitalize leading-4 px-3 py-2 border-transparent focus:outline-none focus:ring-2 focus:ring-green-300"
              activeClassName="text-green-300"
              inactiveClassName="text-white hover:text-green-300"
            >
              <a>{navItem}</a>
            </NavLink>
          ))}
          <Anchor href="/contact" appearance="primary">
            Contact
          </Anchor>
        </div>
      </header>
      <main className="px-1 md:px-2">
        <Component {...pageProps} />
      </main>
      <footer className="pt-20 pb-12 flex flex-col items-center gap-y-5 md:flex-row md:justify-between">
        <p className="text-center">© 2020 Andres Lemus. All rights reserved.</p>
        <div className="flex gap-x-5 order-first md:order-last">
          <a href={SocialNetworks.twitter} className="hover:text-green-300">
            <AiOutlineTwitter className="h-6 w-6" />
          </a>
          <a href={SocialNetworks.github} className="hover:text-green-300">
            <AiOutlineGithub className="h-6 w-6 " />
          </a>
          <a href={SocialNetworks.linkedin} className="hover:text-green-300">
            <AiFillLinkedin className="h-6 w-6" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default MyApp;

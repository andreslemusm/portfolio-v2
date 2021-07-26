import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Brand } from "@assets/index";
import Link from "next/link";
import { Anchor, IconButton } from "@components/lib/buttons";
import { NavLink } from "@components/lib/nav-link";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { SocialNetworks } from "@utils/constants";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

const navItems = ["about", "blog"];

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="container mx-auto px-5">
      <header className="flex justify-between items-center py-10">
        <Link href="/" passHref>
          <a className="relative">
            <Brand className="relative z-10 text-[#1092ba] mix-blend-difference h-14 w-14 md:h-20 md:w-20" />

            {/* Gradient animation */}
            <div className="absolute z-0 inset-0">
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="w-full h-full overflow-visible"
              >
                <defs>
                  <radialGradient
                    id="Gradient1"
                    cx="50%"
                    cy="50%"
                    fx="0.441602%"
                    fy="50%"
                    r=".5"
                  >
                    <animate
                      attributeName="fx"
                      dur="34s"
                      values="0%;3%;0%"
                      repeatCount="indefinite"
                    ></animate>
                    <stop offset="0%" stopColor="rgba(255, 0, 0, 1)"></stop>
                    <stop offset="100%" stopColor="rgba(255, 0, 255, 0)"></stop>
                  </radialGradient>
                  <radialGradient
                    id="Gradient2"
                    cx="50%"
                    cy="50%"
                    fx="2.68147%"
                    fy="50%"
                    r=".5"
                  >
                    <animate
                      attributeName="fx"
                      dur="23.5s"
                      values="0%;3%;0%"
                      repeatCount="indefinite"
                    ></animate>
                    <stop offset="0%" stopColor="rgba(255, 255, 0, 1)"></stop>
                    <stop offset="100%" stopColor="rgba(255, 255, 0, 0)"></stop>
                  </radialGradient>
                  <radialGradient
                    id="Gradient3"
                    cx="50%"
                    cy="50%"
                    fx="0.836536%"
                    fy="50%"
                    r=".5"
                  >
                    <animate
                      attributeName="fx"
                      dur="21.5s"
                      values="0%;3%;0%"
                      repeatCount="indefinite"
                    ></animate>
                    <stop offset="0%" stopColor="rgba(0, 255, 255, 1)"></stop>
                    <stop offset="100%" stopColor="rgba(0, 255, 255, 0)"></stop>
                  </radialGradient>
                  <radialGradient
                    id="Gradient4"
                    cx="50%"
                    cy="50%"
                    fx="4.56417%"
                    fy="50%"
                    r=".5"
                  >
                    <animate
                      attributeName="fx"
                      dur="23s"
                      values="0%;5%;0%"
                      repeatCount="indefinite"
                    ></animate>
                    <stop offset="0%" stopColor="rgba(0, 255, 0, 1)"></stop>
                    <stop offset="100%" stopColor="rgba(0, 255, 0, 0)"></stop>
                  </radialGradient>
                  <radialGradient
                    id="Gradient5"
                    cx="50%"
                    cy="50%"
                    fx="2.65405%"
                    fy="50%"
                    r=".5"
                  >
                    <animate
                      attributeName="fx"
                      dur="24.5s"
                      values="0%;5%;0%"
                      repeatCount="indefinite"
                    ></animate>
                    <stop offset="0%" stopColor="rgba(0,0,255, 1)"></stop>
                    <stop offset="100%" stopColor="rgba(0,0,255, 0)"></stop>
                  </radialGradient>
                  <radialGradient
                    id="Gradient6"
                    cx="50%"
                    cy="50%"
                    fx="0.981338%"
                    fy="50%"
                    r=".5"
                  >
                    <animate
                      attributeName="fx"
                      dur="25.5s"
                      values="0%;5%;0%"
                      repeatCount="indefinite"
                    ></animate>
                    <stop offset="0%" stopColor="rgba(255,0,255, 1)"></stop>
                    <stop offset="100%" stopColor="rgba(255,0,0, 0)"></stop>
                  </radialGradient>
                </defs>
                <rect
                  x="13.744%"
                  y="1.18473%"
                  width="100%"
                  height="100%"
                  fill="url(#Gradient1)"
                  transform="rotate(334.41 50 50)"
                  strokeDasharray="400"
                  strokeDashoffset="400"
                  style={{ strokeDashoffset: "0px" }}
                >
                  <animate
                    attributeName="x"
                    dur="20s"
                    values="25%;0%;25%"
                    repeatCount="indefinite"
                  ></animate>
                  <animate
                    attributeName="y"
                    dur="21s"
                    values="0%;25%;0%"
                    repeatCount="indefinite"
                  ></animate>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 50 50"
                    to="360 50 50"
                    dur="7s"
                    repeatCount="indefinite"
                  ></animateTransform>
                </rect>
                <rect
                  x="-2.17916%"
                  y="35.4267%"
                  width="100%"
                  height="100%"
                  fill="url(#Gradient2)"
                  transform="rotate(255.072 50 50)"
                  strokeDasharray="400"
                  strokeDashoffset="400"
                  style={{ strokeDashoffset: "0px" }}
                >
                  <animate
                    attributeName="x"
                    dur="23s"
                    values="-25%;0%;-25%"
                    repeatCount="indefinite"
                  ></animate>
                  <animate
                    attributeName="y"
                    dur="24s"
                    values="0%;50%;0%"
                    repeatCount="indefinite"
                  ></animate>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 50 50"
                    to="360 50 50"
                    dur="12s"
                    repeatCount="indefinite"
                  ></animateTransform>
                </rect>
                <rect
                  x="9.00483%"
                  y="14.5733%"
                  width="100%"
                  height="100%"
                  fill="url(#Gradient3)"
                  transform="rotate(139.903 50 50)"
                  strokeDasharray="400"
                  strokeDashoffset="400"
                  style={{ strokeDashoffset: "0px" }}
                >
                  <animate
                    attributeName="x"
                    dur="25s"
                    values="0%;25%;0%"
                    repeatCount="indefinite"
                  ></animate>
                  <animate
                    attributeName="y"
                    dur="12s"
                    values="0%;25%;0%"
                    repeatCount="indefinite"
                  ></animate>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="360 50 50"
                    to="0 50 50"
                    dur="9s"
                    repeatCount="indefinite"
                  ></animateTransform>
                </rect>
              </svg>
            </div>
          </a>
        </Link>

        {/* Navigation */}
        <div className="md:hidden">
          <Popover>
            {({ open }) => (
              <Fragment>
                <Popover.Button as={Fragment}>
                  <IconButton
                    icon={HiOutlineMenu}
                    aria-label="Open navigation menu"
                    appearance="secondary"
                    size="lg"
                  />
                </Popover.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  enter="duration-150 ease-out"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="duration-100 ease-in"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Popover.Panel
                    focus
                    static
                    className="absolute top-0 inset-x-0 z-20 p-2 transition transform origin-top-right"
                  >
                    <div className="rounded-lg shadow-md bg-gray-700 ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="px-5 pt-4 flex items-center justify-between">
                        <div>
                          <Brand className="h-8 w-auto" />
                        </div>
                        <div className="-mr-2">
                          <Popover.Button as={Fragment}>
                            <IconButton
                              icon={HiX}
                              aria-label="Close navigation menu"
                            />
                          </Popover.Button>
                        </div>
                      </div>
                      <div className="px-2 pt-2 pb-3 space-y-1">
                        {navItems.map((item) => (
                          <a
                            key={item}
                            href={item}
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                          >
                            {item}
                          </a>
                        ))}
                      </div>
                      <a
                        href="#"
                        className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                      >
                        Log in
                      </a>
                    </div>
                  </Popover.Panel>
                </Transition>
              </Fragment>
            )}
          </Popover>
        </div>
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
        <p className="text-center">
          © {new Date().getFullYear()} Andres Lemus. All rights reserved.
        </p>
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
};

export default App;

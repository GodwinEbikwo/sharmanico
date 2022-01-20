import Link from "next/link";
import { useEffect, useRef } from "react";
import s from "./header.module.css";
import { MenuToggle } from "../Menu/menu-toggle";
import {
  useLocomotiveScroll,
  LocomotiveScrollProvider,
} from "react-locomotive-scroll";
import Menu from "../Menu/menu";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { useMenu } from "@/context/app-context";
import ThemeSwitch from "../switcher";
import Image from "next/image";
import { options } from "@/helpers/scrollConfig";

export default function Header() {
  const containerRef = useRef(null);
  const { scroll } = useLocomotiveScroll();
  const { menuOpen, setMenuOpen } = useMenu();

  useEffect(() => {
    scroll &&
      scroll.on("scroll", (func) => {
        document.documentElement.setAttribute("data-direction", func.direction);
      });
  });

  return (
    <LazyMotion features={domAnimation}>
      <LocomotiveScrollProvider
        options={options}
        containerRef={containerRef}
        watch={[]}
      >
        <header
          data-scroll
          data-scroll-sticky
          data-scroll-target="#scroll-container"
          className={s.headerContainer}
        >
          <div className={`${s.headerBoxAnimation} header-box_animation`}>
            <div className={s.headerInner}>
              <m.aside
                initial={false}
                animate={menuOpen ? "enter" : "exit"}
                exit="exit"
                className={s.header_inner_right}
              >
                <MenuToggle toggle={() => setMenuOpen(!menuOpen)} />
                <Menu />
              </m.aside>

              <aside className={s.logo}>
                <Link href="/" passHref>
                  <svg
                    width="92"
                    height="19"
                    viewBox="0 0 92 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.03844 18V4.36H0.978438V18H5.03844ZM25.3894 14.12C25.3894 11.3 23.6294 9.94 19.7094 9.72L12.2694 9.28C11.0294 9.2 10.5094 9.08 10.5094 8.32C10.5094 7.5 11.0494 7.3 14.7294 7.3C18.1494 7.3 21.7494 7.68 24.0694 8.14L24.7294 5.08C22.0294 4.5 18.0894 4.12 15.6694 4.12C9.34938 4.12 6.66938 5.36 6.66938 8.42C6.66938 10.96 8.20938 12.32 12.4494 12.52L19.9894 12.96C21.0494 13.06 21.5494 13.16 21.5494 14C21.5494 14.82 20.9694 15.08 17.7694 15.08C13.6694 15.08 10.2694 14.54 7.46938 13.92L6.88938 17.18C9.34938 17.78 13.2894 18.26 16.6894 18.26C23.4294 18.26 25.3894 17 25.3894 14.12ZM37.6638 0.419999L35.0238 3.44H38.6438L42.3438 0.419999H37.6638ZM45.2238 18V14.82H31.0838V12.42H44.8438V9.8H31.0838V7.54H45.2238V4.36H27.0238V18H45.2238ZM51.04 18V4.36H46.98V18H51.04ZM71.3909 14.12C71.3909 11.3 69.6309 9.94 65.7109 9.72L58.2709 9.28C57.0309 9.2 56.5109 9.08 56.5109 8.32C56.5109 7.5 57.0509 7.3 60.7309 7.3C64.1509 7.3 67.7509 7.68 70.0709 8.14L70.7309 5.08C68.0309 4.5 64.0909 4.12 61.6709 4.12C55.3509 4.12 52.6709 5.36 52.6709 8.42C52.6709 10.96 54.2109 12.32 58.4509 12.52L65.9909 12.96C67.0509 13.06 67.5509 13.16 67.5509 14C67.5509 14.82 66.9709 15.08 63.7709 15.08C59.6709 15.08 56.2709 14.54 53.4709 13.92L52.8909 17.18C55.3509 17.78 59.2909 18.26 62.6909 18.26C69.4309 18.26 71.3909 17 71.3909 14.12ZM83.6653 0.419999L81.0253 3.44H84.6453L88.3453 0.419999H83.6653ZM91.2253 18V14.82H77.0853V12.42H90.8453V9.8H77.0853V7.54H91.2253V4.36H73.0253V18H91.2253Z"
                      fill="var(--text-color)"
                    />
                  </svg>
                </Link>
              </aside>

              <m.aside
                initial={false}
                animate={menuOpen ? "enter" : "exit"}
                exit="exit"
                className={s.header_inner_right}
              >
                {/* <div style={{ marginRight: "1.5rem" }}>
                  <ThemeSwitch />
                </div> */}

                <MenuToggle toggle={() => setMenuOpen(!menuOpen)} />
                <Menu />
              </m.aside>
            </div>
          </div>
        </header>
      </LocomotiveScrollProvider>
    </LazyMotion>
  );
}

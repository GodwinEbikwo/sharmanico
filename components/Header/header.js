import Link from "next/link";
import { useEffect } from "react";
import s from "./header.module.css";
import { MenuToggle } from "../Menu/menu-toggle";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import Menu from "../Menu/menu";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { useMenu } from "@/context/app-context";
import ThemeSwitch from "../switcher";

export default function Header() {
  const { scroll } = useLocomotiveScroll();
  const { menuOpen, setMenuOpen } = useMenu();

  // useEffect(() => {
  //   scroll &&
  //     scroll.on("scroll", (func) => {
  //       document.documentElement.setAttribute("data-direction", func.direction);
  //     });
  // });

  return (
    <LazyMotion features={domAnimation}>
      <header
        data-scroll
        data-scroll-sticky
        data-scroll-target="#scroll-container"
        className={s.headerContainer}
      >
        <div className={`${s.headerBoxAnimation} header-box_animation`}>
          <div className={s.headerInner}>
            <aside>
              <Link href="/" passHref>
                <h5 className={s.headerLogoTitle}>NS</h5>
              </Link>
            </aside>
            <ThemeSwitch />
            <m.aside
              initial={false}
              animate={menuOpen ? "enter" : "exit"}
              exit="exit"
            >
              <MenuToggle toggle={() => setMenuOpen(!menuOpen)} />
              <Menu />
            </m.aside>
          </div>
        </div>
      </header>
    </LazyMotion>
  );
}

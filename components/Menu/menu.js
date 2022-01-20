import Link from "next/link";
import cn from "classnames";
import FancySpan from "../fancy-span";
import { m } from "framer-motion";
import { variantsAni, menuInOut } from "@/helpers/transitions";
import Div100vh from "react-div-100vh";
import { useMenu } from "context/app-context";

function List({ href, onClick, children, a11y }) {
  return (
    <li className="menu-list_item">
      <Link href={href ? href : "/"}>
        <a aria-label={a11y} onClick={onClick}>
          <FancySpan>{children}</FancySpan>
        </a>
      </Link>
    </li>
  );
}

export default function Menu() {
  const { menuOpen, setMenuOpen } = useMenu();
  return (
    <Div100vh className={cn("menu", { open: menuOpen })}>
      <m.div
        initial={false}
        animate={menuOpen ? "enter" : "exit"}
        exit="exit"
        variants={variantsAni}
      >
        <nav className="flex flex-wrap menu_container">
          <ul className="menu_hover">
            <List
              a11y="go to home page"
              href="/"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <m.div variants={menuInOut} className="menu_list-title">
                Home
              </m.div>
            </List>

            <List
              a11y="go to about page"
              href="/"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <m.div variants={menuInOut} className="menu_list-title">
                About
              </m.div>
            </List>

            <List
              a11y="go to contact page"
              href="/"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <m.div variants={menuInOut} className="menu_list-title">
                Contact
              </m.div>
            </List>

            <List
              a11y="go to site-credits page"
              href="/"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <m.div variants={menuInOut} className="menu_list-title">
                Site Credits
              </m.div>
            </List>
          </ul>
        </nav>

        {/* <footer>
          <h5>
            <FancySpan>
              <m.div variants={menuInOut} className="text-uppercase">
                site credits
              </m.div>
            </FancySpan>
          </h5>
        </footer> */}
      </m.div>
    </Div100vh>
  );
}

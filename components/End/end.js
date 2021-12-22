import Link from "next/link";
import { use100vh } from "react-div-100vh";
import s from "./end.module.css";

export default function End() {
  const height = use100vh();
  const halfHeight = height ? height / 2 : "50vh";
  return (
    <section
      style={{ height: halfHeight }}
      className="flex align-center justify-center flex-column"
    >
      <h1 className={s.end_title}>Want to create amazing stuff ?</h1>
      <Link href="/">
        <a className="link link--metis">
          <span className="text-uppercase">say hello</span>
        </a>
      </Link>
    </section>
  );
}

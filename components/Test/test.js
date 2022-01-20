import s from "./test.module.css";
import Image from "next/image";
import { data } from "../Gallery/grid";
import FancySpan from "../fancy-span";
import { m, AnimatePresence } from "framer-motion";
import { revealIn, enterUp, variantsAni } from "@/helpers/transitions";
import { use100vh } from "react-div-100vh";
import { useState } from "react";
import Link from "next/link";

const WIDTH = 450;
const HEIGHT = 600;

export function TestHead() {
  return (
    <section
      data-scroll
      className="flex align-center justify-center text-center"
      style={{ marginTop: "4rem" }}
    >
      <m.h2 className={s.shop_title}>
        <FancySpan>
          <m.div variants={revealIn}>
            <span className={s.txt_stroke}>shop all</span> products
          </m.div>
        </FancySpan>
      </m.h2>
    </section>
  );
}

function ImageCard({ src, width, height }) {
  return (
    <Link href="/product">
      <a>
        <li className={s.pc_list}>
          <Image
            src={src}
            width={width ? width : WIDTH}
            height={height ? height : HEIGHT}
            alt="shit stuff"
          />
          <div
            className={`${s.pc_list_bottom} flex flex-row flex-wrap space-between align-center`}
          >
            <span>Flat tray </span>
            <span>£45.00</span>
          </div>
        </li>
      </a>
    </Link>
  );
}

const switchLayout = {
  initial: { opacity: 0, y: 130 },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
  exit: {
    y: 130,
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

export default function TestCard() {
  const [show, setShow] = useState("grid");
  console.log(data);
  return (
    <m.section
      id="products"
      data-scroll
      className={s.productContainer}
      variants={enterUp}
    >
      <article
        className={s.pc_left}
        data-scroll
        data-scroll-sticky
        data-scroll-offsets="-19%, 0"
        data-scroll-target="#products"
      >
        <div className={s.pc_wrapper}>
          {/* <div>
            <h2 className={s.pc_wrapper_title}>Inspiration</h2>
            <p>
              Comfort and ergonomics distinguish the Ribbon collection designed
              by the Norwegian duo Anderssen & Voll. A sinuous game of solids,
              voids, and fluid intuitive turns, create an ideal balance of
              harmonious proportions that seem to arise from an idea of
              ​​perfection. A careful study of shapes and sizes defines a
              precise and recognisable style in different solutions, adaptable
              to multiple spaces and contexts.
            </p>
          </div> */}

          <footer className={s.pc_wrapper_footer}>
            <div className="flex space-between align-center mono">
              <a
                className="link link--metis"
                role="button"
                aria-label="switch to grid layout"
                onClick={() => setShow("grid")}
              >
                GRID
              </a>
              <a
                className="link link--metis"
                role="button"
                aria-label="switch to index layout"
                onClick={() => setShow("index")}
              >
                INDEX
              </a>
            </div>
          </footer>
        </div>
      </article>

      <AnimatePresence initial={false}>
        {show === "grid" && (
          <>
            {/* <m.ul
              key="grid"
              initial="initial"
              animate={show ? "enter" : "exit"}
              exit="exit"
              variants={variantsAni}
              className={s.pc_imageGrid}
            >
              {data.slice(0, 9).map((img, i) => (
                <Link href="/product" key={i}>
                  <a>
                    <m.li className={s.pc_list} variants={switchLayout}>
                      <Image
                        src={img.src}
                        width={WIDTH}
                        height={HEIGHT}
                        alt="shit stuff"
                      />
                      <div
                        className={`${s.pc_list_bottom} flex flex-row flex-wrap space-between align-center`}
                      >
                        <span>Flat tray </span>
                        <span>£45.00</span>
                      </div>
                    </m.li>
                  </a>
                </Link>
              ))}
            </m.ul> */}

            <m.ul key="grid" className={s.pc_imageGrid} variants={switchLayout}>
              {/* <h1>Shop chairs</h1> */}
              {data.slice(0, 3).map((img, i) => (
                <ImageCard key={i} src={img.src} />
              ))}
            </m.ul>

            <m.ul
              key="grid-two"
              className={s.pc_imageGrid}
              variants={switchLayout}
            >
              {/* <h1>Shop incense</h1> */}
              {data.slice(3, 6).map((img, i) => (
                <ImageCard key={i} src={img.src} />
              ))}
            </m.ul>

            <m.ul
              key="grid-three"
              className={s.pc_imageGrid}
              variants={switchLayout}
            >
              {data.slice(6, 10).map((img, i) => (
                <ImageCard key={i} src={img.src} width={1 == 10 ? 900 : 450} />
              ))}
            </m.ul>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence initial={false}>
        {show === "index" && (
          <m.ul
            key="index"
            className={s.pc_imageGridIndex}
            variants={switchLayout}
          >
            {data.map((img, i) => (
              <ImageCard key={i} src={img.src} />
            ))}
          </m.ul>
        )}
      </AnimatePresence>
    </m.section>
  );
}

export function TestCTA() {
  const height = use100vh();
  const halfHeight = height ? height / 2 : "50vh";
  return (
    <section
      className={`${s.testCtaContainer} flex justify-center align-center`}
      style={{ height: halfHeight }}
    >
      <div className="flex justify-center align-center flex-column text-center">
        <span className="text-uppercase">made in </span>
        <h1 className="text-uppercase">LAGOS City</h1>
      </div>
    </section>
  );
}

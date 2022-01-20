import s from "./hero.module.css";
import Image from "next/image";
import FancySpan from "../fancy-span";
import { m } from "framer-motion";
import { revealInOut, fadeDelayHero } from "@/helpers/transitions";

export default function Hero() {
  return (
    <section className={s.heroContainer}>
      <h1 className={s.heroTitle}>
        <FancySpan>
          <m.span className="inline-block" variants={revealInOut}>
            Nicohlas Sharma
          </m.span>
        </FancySpan>
      </h1>
      <div className={s.heroRow}>
        <aside className={s.heroRow_LEFT} data-scroll>
          <Image
            src="/3.jpg"
            width={640}
            height={640}
            alt="jahnavii-sharma"
            className="a-img"
            priority={true}
          />
        </aside>

        <m.aside className={s.heroRow_RIGHT} variants={fadeDelayHero}>
          <div className={s.heroRow_RIGHT_inner}>
            <h3>
              Developing a certain style and telling a visual story through her
              work. Jahnavii loves working on creative art direction and fashion
              styling. Thanks to her broad experiences in the art world, she
              knows how to match ideas and translate them into an on or offline
              experiece. One of the most rewarding parts of my job is
              collaborating with a variety of talents across the world.
            </h3>
          </div>

          <div className={s.heroRow_RIGHT_inner}>
            <h3>
              Together we can create things that none of us would have been able
              to make or even think of on our own.
            </h3>
          </div>
        </m.aside>
      </div>

      <div className={s.heroCenter}>
        <aside className={s.heroCenter_LEFT}>
          <h2 className={s.heroCenter_Subtitle}>Career</h2>

          <div className={s.heroCenter_inner}>
            <ul>
              <li>Someplace london</li>
              <li>Creative Art Diretor</li>
              <li>2021 - Present</li>
            </ul>
          </div>

          <div className={s.heroCenter_inner}>
            <ul>
              <li>Someplace london</li>
              <li>Creative Art Diretor</li>
              <li>2021 - Present</li>
            </ul>
          </div>

          <div className={s.heroCenter_inner}>
            <ul>
              <li>Someplace london</li>
              <li>Creative Art Diretor</li>
              <li>2021 - Present</li>
            </ul>
          </div>
        </aside>

        <aside>
          <h2 className={s.heroCenter_Subtitle}>Education</h2>

          <div className={s.heroCenter_inner}>
            <ul>
              <li>Someplace london</li>
              <li>Creative Art Diretor</li>
              <li>2021 - Present</li>
            </ul>
          </div>

          <div className={s.heroCenter_inner}>
            <ul>
              <li>Someplace london</li>
              <li>Creative Art Diretor</li>
              <li>2021 - Present</li>
            </ul>
          </div>

          <div className={s.heroCenter_inner}>
            <ul>
              <li>Someplace london</li>
              <li>Creative Art Diretor</li>
              <li>2021 - Present</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}

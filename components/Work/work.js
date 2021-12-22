import s from "./work.module.css";
import Image from "next/image";
import Link from "next/link";

const workData = [
  {
    labelOne: "Here is label one",
  },
  {
    labelOne: "Here is label one",
  },
  {
    labelOne: "Here is label one",
  },
  {
    labelOne: "Here is label one",
  },
  {
    labelOne: "Here is label one",
  },
  {
    labelOne: "Here is label one",
  },
];

function WorkCard({ labelOne }) {
  return (
    <li className="flex flex-column relative">
      <Link href="/" passHref>
        <a data-scroll className="relative w-full">
          <div className="overflow-hidden block" data-scroll>
            <Image
              src="/8.jpg"
              width={640}
              height={320}
              quality="85"
              alt="fake-image"
              className="a-img"
            />
          </div>
          <div className="flex space-between">
            <span className="block">{labelOne}</span>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default function Work() {
  return (
    <section className={s.workContainer} data-scroll>
      <div className={s.workTitle}>Selected Work</div>
      <ul className={s.workGrid} data-scroll>
        {workData.map((label, i) => (
          <WorkCard key={i} labelOne={label.labelOne} />
        ))}
      </ul>
    </section>
  );
}

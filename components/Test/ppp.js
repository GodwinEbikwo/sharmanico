import Image from "next/image";
import { m } from "framer-motion";
import s from "./ppp.module.css";
import Carousel from "./carousel";

const WIDTH = 450;
const HEIGHT = 600;

const imgData = [
  {
    id: 0,
    src:
      "https://res.cloudinary.com/godwinebikwo/image/upload/v1640016467/Cantarutti-Yumi-Stool-3.14.0_pwol15.jpg",
  },
  {
    id: 1,
    src:
      "https://res.cloudinary.com/godwinebikwo/image/upload/v1640016467/Cantarutti-Yumi-Stool-3.03.0_mhykjm.jpg",
  },
  {
    id: 2,
    src:
      "https://res.cloudinary.com/godwinebikwo/image/upload/v1640016467/Cantarutti-Yumi-Stool-3.03.0_mhykjm.jpg",
  },
  {
    id: 3,
    src:
      "https://res.cloudinary.com/godwinebikwo/image/upload/v1640016467/Cantarutti-Yumi-Stool-3.03.0_mhykjm.jpg",
  },
  {
    id: 4,
    src:
      "https://res.cloudinary.com/godwinebikwo/image/upload/v1640016467/Cantarutti-Yumi-Stool-3.03.0_mhykjm.jpg",
  },
];

function PImageCard({ src, width, height }) {
  return (
    <div className={s.pp_img_grid}>
      <div className="hide-for-mobile">
        <Image src={src} layout="fill" objectFit="contain" alt="shit stuff" />
      </div>
      <div className="hide-for-desktop">
        <Image
          src={src}
          width={width ? width : WIDTH}
          height={height ? height : HEIGHT}
          alt="shit stuff"
        />
      </div>
    </div>
  );
}

export default function ProductPageForma() {
  return (
    <m.section className={s.pp_container}>
      <div className={s.pp_Grid}>
        <article className={s.pp_Grid_Left} data-scroll id="product-info">
          <div
            data-scroll
            data-scroll-sticky="true"
            data-scroll-target="#product-info"
            className="flex flex-column space-between"
          >
            <header
              className="flex space-between flex-wrap"
              style={{ marginBottom: "1.5rem" }}
            >
              <h4>Yumi Chair O1</h4>
              <h4>$45.00</h4>
            </header>

            <div style={{ marginBottom: "1.5rem" }}>
              <p>
                Comfort and ergonomics distinguish the Ribbon collection
                designed by the Norwegian duo Anderssen & Voll. A sinuous game
                of solids, voids, and fluid intuitive turns, create an ideal
                balance of harmonious proportions that seem to arise from an
                idea of ​​perfection.
              </p>
            </div>

            <div style={{ marginTop: "auto" }}>
              <button className={s.pp_Grid_Left_Button}>Add to cart </button>
            </div>
          </div>
        </article>

        <aside className={s.pp_Grid_Center}>
          {imgData.map((img, i) => (
            <PImageCard key={i} src={img.src} />
          ))}
        </aside>

        <div className={s.pp_Grid_Right}>
          <span>Some shit here</span>
        </div>
      </div>
    </m.section>
  );
}

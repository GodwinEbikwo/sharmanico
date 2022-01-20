import Image from "next/image";
import { m } from "framer-motion";
import s from "./pp.module.css";
import Carousel from "./carousel";

const WIDTH = 450;
const HEIGHT = 600;

const keyStr =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

const triplet = (e1, e2, e3) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63);

const rgbDataURL = (r, g, b) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

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

export default function ProductPage() {
  const id = imgData && imgData.map((p) => p.id).join("");

  return (
    <m.section className={s.pp_container}>
      <div className={s.pp_Grid}>
        <aside className={s.pp_Grid_Left}>
          {imgData.map((img, i) => (
            <PImageCard key={i} src={img.src} />
          ))}
        </aside>

        <article className={s.pp_Grid_Right} data-scroll id="product-info">
          <div
            data-scroll
            data-scroll-sticky="true"
            data-scroll-target="#product-info"
          >
            <header
              className="flex space-between flex-wrap"
              style={{ marginBottom: "1.5rem" }}
            >
              <h1>Yumi Chair O1</h1>
              <h2>$45.00</h2>
            </header>

            <div style={{ marginBottom: "1.5rem" }}>
              <h4>
                Comfort and ergonomics distinguish the Ribbon collection
                designed by the Norwegian duo Anderssen & Voll. A sinuous game
                of solids, voids, and fluid intuitive turns, create an ideal
                balance of harmonious proportions that seem to arise from an
                idea of ​​perfection. A careful study of shapes and sizes
                defines a precise and recognisable style in different solutions,
                adaptable to multiple spaces and contexts.
              </h4>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <h4>
                Comfort and ergonomics distinguish the Ribbon collection
                designed by the Norwegian duo Anderssen & Voll. A sinuous game
                of solids, voids, and fluid intuitive turns, create an ideal
                balance of harmonious proportions that seem to arise from an
                idea of ​​perfection. A careful study of shapes and sizes
                defines a precise and recognisable style in different solutions,
                adaptable to multiple spaces and contexts.
              </h4>
            </div>

            <div>
              <button>Add to cart</button>
            </div>
          </div>
        </article>
      </div>
    </m.section>
  );
}

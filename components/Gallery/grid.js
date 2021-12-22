import React from "react";
import { ImageCard } from "./imageCard";
import s from "./grid.module.css";

const data = [
  {
    src:
      "https://res.cloudinary.com/godwinebikwo/image/upload/v1640016467/Cantarutti-Yumi-Stool-3.14.0_pwol15.jpg",
  },
  {
    src:
      "https://res.cloudinary.com/godwinebikwo/image/upload/v1640016467/Cantarutti-Yumi-Stool-3.15.0_i7ezcj.jpg",
  },
  {
    src:
      "https://res.cloudinary.com/godwinebikwo/image/upload/v1640016467/Cantarutti-Yumi-Stool-3.01.0_sqhusj.jpg",
  },
  {
    src:
      "https://res.cloudinary.com/godwinebikwo/image/upload/v1640016467/Cantarutti-Yumi-Stool-3.07.0_h9gv0y.jpg",
  },
  {
    src:
      "https://res.cloudinary.com/godwinebikwo/image/upload/v1640016466/Cantarutti-Yumi-Armchair-2.07.0_kinu7l.jpg",
  },
  {
    src:
      "https://res.cloudinary.com/godwinebikwo/image/upload/v1640016467/Cantarutti-Yumi-Stool-3.13.0_f1zvcy.jpg",
  },
  {
    src:
      "https://res.cloudinary.com/godwinebikwo/image/upload/v1640016467/Cantarutti-Yumi-Stool-3.03.0_mhykjm.jpg",
  },
  {
    src:
      "https://res.cloudinary.com/godwinebikwo/image/upload/v1640016467/Cantarutti-Yumi-Stool-3.02.0_tmko8j.jpg",
  },
];

export default function ImageGallery() {
  return (
    <section className={s.gridContainer}>
      <ul className={s.grid}>
        {data.map((img, i) => (
          <ImageCard key={i} src={img.src} />
        ))}
      </ul>
    </section>
  );
}

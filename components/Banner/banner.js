import Image from "next/image";
import s from "./banner.module.css";

export default function Banner() {
  return (
    <section className={s.banner_container} data-scroll>
      <div className={`${s.banner_img_box} ${s.banner_img_box1}`} data-scroll>
        <Image
          src="/2.jpg"
          alt="bluu-lime"
          width={328}
          height={238}
          className="a-img"
        />
      </div>

      <div className={`${s.banner_img_box} ${s.banner_img_box2}`} data-scroll>
        <Image
          src="/8.jpg"
          alt="bluu-lime"
          width={328}
          height={238}
          className="a-img"
        />
      </div>

      <div className="center-absolute">
        <div className="flex flex-column align-center justify-center">
          <h1 className={s.banner_title}>I enjoy</h1>
          <h1 className={s.banner_title}>capturing</h1>
          <h1 className={s.banner_title}>people</h1>
        </div>
      </div>

      <aside className={s.banner_services_left}>
        <div className="flex flex-column">
          <h3 className={s.banner_services_title}>Services</h3>
          <ul>
            <li>Still Potraits</li>
            <li>Wedding Photography</li>
            <li>Advertisiment Photography</li>
            <li>Lifestyle Photography</li>
            <li>Product Photography</li>
          </ul>
        </div>
      </aside>

      <aside className={s.banner_services_right}>
        <div className="flex flex-column">
          <h3 className={s.banner_services_title}>Selected Clients</h3>
          <ul>
            <li>Nike</li>
            <li>Adiddas</li>
            <li>Nivea</li>
            <li>AfterGlo</li>
          </ul>
        </div>
      </aside>
    </section>
  );
}

import Div100vh from "react-div-100vh";
import Image from "next/image";

export default function Landing({ src }) {
  return (
    <Div100vh style={{ marginBottom: "var(--spacer)" }}>
      <section data-scroll>
        <div className="bg-full" data-scroll>
          <Image
            className="a-img"
            src={src}
            alt="clay"
            quality="100"
            layout="fill"
            objectFit="cover"
            loading="eager"
          />
        </div>
      </section>
    </Div100vh>
  );
}

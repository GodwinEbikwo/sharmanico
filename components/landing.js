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

export function LandingTwo( ) {
  return (
    <>
      <section data-scroll>
        <div data-scroll>
          <Image
            className="a-img"
            src="https://res.cloudinary.com/godwinebikwo/image/upload/v1627453729/jason-wang-NxAwryAbtIw-unsplash_ltdiyg.jpg"
            alt="clay"
            width={1920}
            height={1080}
            quality="100"
            loading="eager"
          />
        </div>
      </section>
    </>
  );
}

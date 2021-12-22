import { useRef } from "react";
import { m } from "framer-motion";
import Hero from "@/components/Hero/hero";
import { fade, variantsAni } from "@/helpers/transitions";
import Header from "@/components/Header/header";
import Layout from "@/components/Layout/layout";
import s from "@/components/Layout/layout.module.css";
import Landing from "@/components/landing";
import { options } from "@/helpers/scrollConfig";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Work from "@/components/Work/work";
import End from "@/components/End/end";
import Banner from "@/components/Banner/banner";
import Footer from "@/components/Footer/footer";
import ImageGallery from "@/components/Gallery/grid";

export default function HomePage() {
  const containerRef = useRef(null);
  return (
    <Layout>
      <LocomotiveScrollProvider
        options={options}
        containerRef={containerRef}
        watch={[]}
      >
        <Header />
        <main ref={containerRef} data-scroll-container id="scroll-container">
          <div className={s.layoutContainer} data-scroll-section>
            <m.div
              initial="initial"
              animate="enter"
              exit="exit"
              variants={variantsAni}
            >
              <m.div variants={fade}>
                <Hero />
                <Landing src="/6.jpg" />
                <Work />
                <Banner />
                <Landing src="/7.jpg" />
                <End />
                {/* <ImageGallery /> */}
                <Footer />
              </m.div>
            </m.div>
          </div>
        </main>
      </LocomotiveScrollProvider>
    </Layout>
  );
}

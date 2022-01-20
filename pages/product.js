import { useRef } from "react";
import { m } from "framer-motion";
import { fade, variantsAni } from "@/helpers/transitions";
import Header from "@/components/Header/header";
import Layout from "@/components/Layout/layout";
import s from "@/components/Layout/layout.module.css";
import { options } from "@/helpers/scrollConfig";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import ProductPage from "@/components/Test/product-page";
import ProductPageForma from "@/components/Test/ppp";

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
            <m.div initial="initial" animate="enter" exit="exit">
              <m.div variants={fade}>
                <ProductPage />
                {/* <ProductPageForma /> */}
              </m.div>
            </m.div>
          </div>
        </main>
      </LocomotiveScrollProvider>
    </Layout>
  );
}

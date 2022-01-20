import "@/styles/locomotive-scroll.css";
import "@/styles/app-styles.css";
import gsap from "gsap";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loader from "@/components/loader";
import AppProvider from "context/app-context";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const loadingText = document.querySelector(".loading-title");
  // }, []);

  // useEffect(() => {
  //   const overlayPath = document.querySelector(".overlay__path");
  //   const overlay = document.querySelector(".overlay");
  //   loading
  //     ? gsap
  //         .timeline({
  //           onComplete: () => setLoading(false),
  //         })

  //         .set(overlayPath, {
  //           attr: { d: "M 0 100 V 100 Q 50 100 100 100 V 100 z" },
  //         })

  //         .to(
  //           overlayPath,
  //           {
  //             duration: 1,
  //             ease: "power4.in",
  //             attr: { d: "M 0 100 V 50 Q 50 0 100 50 V 100 z" },
  //           },
  //           0
  //         )
  //         .to(overlayPath, {
  //           duration: 0.4,
  //           ease: "power2",
  //           attr: { d: "M 0 100 V 0 Q 50 0 100 0 V 100 z" },
  //         })

  //         .set(overlayPath, {
  //           attr: { d: "M 0 0 V 100 Q 50 100 100 100 V 0 z" },
  //         })

  //         .to(overlayPath, {
  //           duration: 0.4,
  //           ease: "power2.in",
  //           attr: { d: "M 0 0 V 50 Q 50 0 100 50 V 0 z" },
  //         })

  //         .to(overlayPath, {
  //           duration: 1,
  //           ease: "power4",
  //           attr: { d: "M 0 0 V 0 Q 50 0 100 0 V 0 z" },
  //           onComplete: () => {
  //             overlay.classList.add("overlay-hidden");
  //           },
  //         })
  //     : null;
  // }, [loading]);
  return (
    <ThemeProvider
      themes={["light", "dark"]}
      defaultTheme="dark"
      disableTransitionOnChange
    >
      <AppProvider>
        {/* <AnimatePresence exitBeforeEnter>
          {loading ? (
            <Loader />
          ) : (
            <Component {...pageProps} key={router.asPath} />
          )}
        </AnimatePresence> */}
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </AppProvider>
    </ThemeProvider>
  );
}

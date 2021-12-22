import Div100vh from "react-div-100vh";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { logoTransform, logoReveal } from "@/helpers/transitions";

const Loader = () => {
  return (
    <LazyMotion features={domAnimation}>
      <Div100vh className="relative">
        <m.div
          initial="initial"
          animate="show"
          exit="exit"
          className="center-absolute"
          style={{ color: "white", mixBlendMode: "difference" }}
        >
          <m.h1 className="loading-title ls-lg" variants={logoReveal}>
            Nicholas Sharma
          </m.h1>
        </m.div>
        <svg
          className="overlay"
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            className="overlay__path"
            vectorEffect="non-scaling-stroke"
            d="M 0 100 V 100 Q 50 100 100 100 V 100 z"
          />
        </svg>
      </Div100vh>
    </LazyMotion>
  );
};
export default Loader;

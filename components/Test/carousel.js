// import React, { useState, useCallback, useEffect } from "react";
// import { m, AnimatePresence } from "framer-motion";
// import useEmblaCarousel from "embla-carousel-react";
// import cx from "classnames";
// import Image from "next/image";

// function Arrow(props) {
//   const { id = "", name, viewBox = "0 0 100 100", className } = props;
//   return (
//     <svg
//       width={50}
//       height={50}
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox={viewBox}
//       aria-labelledby={`${name.replace(/\s/g, "").toLowerCase()}-${id}`}
//       className={className || "icon"}
//     >
//       <title id={`${name.replace(/\s/g, "").toLowerCase()}-${id}`}>
//         {name}
//       </title>
//       <polygon
//         points="51.829 7.172 46.172 12.828 79.343 46 4 46 4 54 79.343 54 46.172 87.172 51.829 92.828 94.658 50 51.829 7.172"
//         fill="var(--text-color)"
//       />
//     </svg>
//   );
// }

// const flipAnim = {
//   show: {
//     y: ["100%", "0%"],
//     transition: {
//       duration: 1,
//       ease: [0.16, 1, 0.3, 1],
//       when: "beforeChildren",
//     },
//   },
//   hide: {
//     y: ["0%", "-100%"],
//     transition: {
//       duration: 1,
//       ease: [0.16, 1, 0.3, 1],
//       when: "afterChildren",
//     },
//   },
// };

// const Carousel = ({
//   id,
//   hasArrows,
//   hasDots,
//   hasCounter,
//   hasDrag = true,
//   className,
//   children,
// }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [scrollSnaps, setScrollSnaps] = useState([]);

//   const [sliderRef, embla] = useEmblaCarousel({
//     loop: true,
//     draggable: hasDrag,
//   });

//   const scrollPrev = useCallback(() => embla && embla.scrollPrev(), []);
//   const scrollNext = useCallback(() => embla && embla.scrollPrev(), []);
//   const scrollTo = useCallback((index) => embla && embla.scrollTo(index), []);

//   const onSelect = useCallback(() => {
//     if (!embla) return;
//     setCurrentSlide(embla.selectedScrollSnap());
//   }, [embla]);

//   useEffect(() => {
//     if (!embla) return;
//     onSelect();
//     setScrollSnaps(embla.scrollSnapList());
//     embla.on("select", onSelect);
//   }, [embla, setScrollSnaps, onSelect]);

//   return (
//     <m.div className="embla" variants={fade}>
//       <div className="embla__viewport" ref={viewportRef}>
//         <div className="embla__container">
//           <div className="embla__slide">
//             <ImageWrapper src="https://res.cloudinary.com/godwinebikwo/image/upload/v1627317608/inside-weather-OzqieLcs464-unsplash_ipy4fb.jpg" />
//           </div>
//           <div className="embla__slide">
//             <ImageWrapper src="https://res.cloudinary.com/godwinebikwo/image/upload/v1625124905/spacejoy-jfVTVARGCao-unsplash_qxae0d.jpg" />
//           </div>
//           <div className="embla__slide">
//             <ImageWrapper src="https://res.cloudinary.com/godwinebikwo/image/upload/v1623313208/pexels-cottonbro-6739222_z1sbkh.jpg" />
//           </div>
//           <div className="embla__slide">
//             <ImageWrapper src="https://res.cloudinary.com/godwinebikwo/image/upload/v1621008026/tom-crew-XtyxEBiA8D8-unsplash_mjpah4.jpg" />
//           </div>
//           <div className="embla__slide">
//             <ImageWrapper src="https://res.cloudinary.com/godwinebikwo/image/upload/v1625124781/spacejoy-umAXneH4GhA-unsplash_ynu5ej.jpg" />
//           </div>
//           <div className="embla__slide">
//             <ImageWrapper src="https://res.cloudinary.com/godwinebikwo/image/upload/v1625124781/spacejoy-umAXneH4GhA-unsplash_ynu5ej.jpg" />
//           </div>
//         </div>
//       </div>
//     </m.div>
//   );
// };

// export default Carousel;

// function ImageWrapper({ src }) {
//   const newControls = useAnimation();
//   const { ref, inView } = useInView();

//   useEffect(() => {
//     if (inView) {
//       newControls.start("enter");
//     }

//     if (!inView) {
//       newControls.start("hidden");
//     }
//   }, [newControls, inView]);

//   return (
//     <m.div
//       className="py-2"
//       animate={newControls}
//       initial="initial"
//       exit="exit"
//       variants={fadeSmallDelay}
//       ref={ref}
//     >
//       <Image
//         src={src}
//         width={960}
//         height={640}
//         alt="building"
//         className="embla__slide__img will-change"
//       />
//     </m.div>
//   );
// }

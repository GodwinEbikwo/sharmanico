export const fade = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.4 },
  },
};

export const revealInOut = {
  initial: {
    y: "110%",
    opacity: 0,
    rotateX: "-80deg",
    transformPerspective: "600px",
  },
  enter: {
    y: "0%",
    opacity: 1,
    rotateX: "0deg",
    transition: {
      duration: 1.2,
      ease: [0.165, 0.84, 0.44, 1],
    },
  },
  exit: {
    y: "110%",
    transition: { ease: [0.77, 0, 0.175, 1] },
  },
};

export const fadeDelayHero = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.65,
    },
  },
};

export const variantsAni = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
  exit: {
    transition: { staggerChildren: 0.1, staggerDirection: -1 },
  },
};

export const ImageIn = {
  initial: {
    scale: 1.5,
    opacity: 0,
  },
  enter: {
    scale: 1,
    opacity: 1,
    transformOrigin: "50% 50%",
    transition: {
      duration: 1.35,
      ease: [0.83, 0, 0.17, 1],
    },
  },
  exit: {
    opacity: 0,
    transition: { ease: [0.83, 0, 0.17, 1] },
  },
};

export const logoReveal = {
  initial: { opacity: 0, scale: 1.5 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.65,
      ease: [0.77, 0, 0.175, 1],
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.8, ease: [0.77, 0, 0.175, 1] },
  },
};

export const menuInOut = {
  initial: { y: "110%", opacity: 0 },
  enter: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.83, 0, 0.17, 1],
    },
  },
  exit: {
    y: "110%",
    opacity: 0,
    transition: { duration: 0.45, ease: [0.83, 0, 0.17, 1] },
  },
};

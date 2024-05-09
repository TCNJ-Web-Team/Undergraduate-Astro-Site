export const fadeInAnimationVariant = {
  initial: {
    opacity: 0,
    y: -5,
  },
  animate: (delayNumber: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: delayNumber * 0.5,
      ease: "easeOut",
      duration: 0.35,
    },
  }),
};

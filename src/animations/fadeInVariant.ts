export const fadeInAnimationVariant = {
  initial: {
    opacity: 0,
    y: -5,
  },
  animate: (delayNumber: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: delayNumber * 0.35,
      ease: "easeOut",
      duration: 0.35,
    },
  }),
  exit: {
    opacity: 0,
    y: 5, // Moves slightly down when exiting
    transition: {
      ease: "easeInOut",
      duration: 0.25, // Slightly quicker exit
    },
  },
};

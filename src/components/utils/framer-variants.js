export const Variants = {
    hidden: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };
  
  export const containerVariants = {
    hidden: {
      x: "-100vw",
    },
    animate: {
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
    exit: {
      x: "-100vw",
      transition: {
        when: "afterChildren",
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

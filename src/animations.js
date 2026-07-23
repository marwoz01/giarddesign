export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export const staggerParent = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export const LOADER_HOLD = 1.6
export const LOADER_CURTAIN = 0.8
export const LOADER_REVEAL = LOADER_HOLD + LOADER_CURTAIN / 2

export const heroStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: LOADER_REVEAL },
  },
}

export const VIEWPORT = { once: true, margin: '0px 0px -20% 0px' }

export const EASE_OUT = { duration: 0.6, ease: [0.22, 1, 0.36, 1] }

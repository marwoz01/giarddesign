import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { EASE_OUT, LOADER_CURTAIN, LOADER_HOLD } from '../animations'
import Logo from '../assets/icons/logo.svg?react'

function PageLoader() {
  const [loading, setLoading] = useState(true)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), LOADER_HOLD * 1000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!loading) return

    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [loading])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="bg-surface text-ink fixed inset-0 z-100 flex items-center justify-center"
          exit={reduceMotion ? { opacity: 0 } : { y: '-100%' }}
          transition={{ duration: LOADER_CURTAIN, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: EASE_OUT.ease }}
          >
            <Logo className="h-auto w-48" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PageLoader

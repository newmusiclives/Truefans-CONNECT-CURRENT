import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
}

const pageTransition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.3,
}

const PageTransition = ({ children }) => {
  return (
    <StyledMotionMain
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </StyledMotionMain>
  )
}

const StyledMotionMain = styled(motion.main)`
  width: 100%;
  min-height: calc(100vh - 200px); /* Adjust based on header/footer heights */
`

export default PageTransition

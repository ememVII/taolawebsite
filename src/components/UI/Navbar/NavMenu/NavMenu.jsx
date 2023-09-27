import styles from '../Navbar.module.css'
import { motion, useCycle } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { useDimensions } from './use-dimensions'
import Navigation from './Navigation'
import { MenuToggle } from './MenuToggle'

const sidebar = {
  open: {
    // clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) 40px)`,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 1000,
      damping: 60,
    },
  },

  closed: {
    // clipPath: 'circle(0px at calc(100% - 40px) 40px)',
    x: '100%',
    transition: {
      // delay: 0.2,
      type: 'spring',
      stiffness: 1000,
      damping: 60,
    },
  },
}


function NavMenu() {
  const [isOpen, setToggle] = useCycle(false, true)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)
  
  useEffect(() => {
    if(isOpen) {
      document.body.classList.add('disable-scroll')
    } else {
      document.body.classList.remove('disable-scroll')
    }
  
    return () => {
      document.body.classList.remove('disable-scroll')
    }
  }, [isOpen])

  return (
    <>
      <div
        className={isOpen ? styles.overlay : ''}
        onClick={() => setToggle()}
      ></div>
        <motion.nav
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          ref={containerRef}
          custom={height}
          className={isOpen ? styles.navMenu : ''} //fixes what behind nav when closed
        >
          <motion.div
            className={styles.navBackground}
            variants={sidebar}
          ></motion.div>
          <Navigation isOpen={isOpen} toggle={() => setToggle()}/>
          <MenuToggle toggle={() => setToggle()} />
        </motion.nav>
    </>
  )
}

export default NavMenu

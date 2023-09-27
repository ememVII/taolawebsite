import styles from '../Navbar.module.css'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { UpRightArrowDark, UpRightArrowLight } from '../../../../utils/imgs'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
    },
  },

  closed: {
    y: 10,
    opacity: 0, 
  },
}

function MenuItem({ isOpen, route, navItem, toggle }) {
  const location = useLocation()
  const locationCondition = location.pathname === `/${route}`

  if (!isOpen) {
    return null; 
  }
  
  return (
    <>
      <Link to={`/${route}`} className={styles.navLinks}>
        <motion.li
          variants={variants}
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggle}
          className={`${styles.navLinks} ${
            locationCondition ? `${styles.active}` : ''
          }`}
        >
          <span>{navItem}</span>
          {locationCondition ? (
            <img
              src={UpRightArrowLight}
              alt={`${route}`}
              className="navArrow"
            />
          ) : (
            <img src={UpRightArrowDark} alt={`${route}`} className="navArrow" />
          )}
        </motion.li>
      </Link>
    </>
  )
}

export default MenuItem

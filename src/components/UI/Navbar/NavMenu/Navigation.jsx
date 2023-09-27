import { motion } from 'framer-motion'
import MenuItem from './MenuItem'

// const variants = {
//   open: {
//     transition: { staggerChildren: 0.07, delayChildren: 0.2 },
//   },

//   closed: {
//     transition: { staggerChildren: 0.05, staggerDirection: -1 },
//   },
// }

function Navigation({ isOpen, toggle }) {
  
  const navRouting = [
    ['home', 'Home'],
    ['about', 'About Us'],
    ['projects', 'Projects'],
    ['services', 'Services'],
    ['clients', 'Clients'],
    ['contact', 'Contact Us']
  ]
  
  return (
    <motion.ul>
    {navRouting.map(([route, navItem], i) => (
        <MenuItem key={i} isOpen={isOpen} route={route} navItem={navItem} toggle={toggle} />
      ))}
    </motion.ul>
  )
}

export default Navigation

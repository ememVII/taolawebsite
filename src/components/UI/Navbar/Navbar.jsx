import styles from './Navbar.module.css'
import { Logo } from '../../../utils/imgs'
import { Link } from 'react-router-dom'
import NavMenu from './NavMenu/NavMenu'

function Navbar() {
  return (
    <>
      <nav className={`container-fluid justify-content-between`}>
        <Link to="/home">
          <img
            src={Logo}
            alt="taola logo"
            width={167}
            height={80}
            className={styles.logo}
          />
        </Link>
        <NavMenu />
      </nav>
    </>
  )
}

export default Navbar
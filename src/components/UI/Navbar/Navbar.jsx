import styles from './Navbar.module.css'
// import './Nav.css'
import { Logo } from '../../../utils/imgs'
import { Link } from 'react-router-dom'
import NavMenu from './NavMenu/NavMenu'

function Navbar() {
  return (
    <>
      {/* <div className=''>
        <nav className="navbar text-center">
        <div className="container-fluid">
        <Link to='/home'><img src={Logo} alt="taola logo" width={167} height={80}/></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className='position-relative w-100'>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Link
                    </a>
                  </li>
                </ul>
              </div>
          </div>
        </div>
      </nav>
    </div> */}
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

/* 
      <nav className={`container-fluid position-fixed justify-content-between`}>
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
*/

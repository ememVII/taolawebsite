import styles from './Footer.module.css'
import Social from '../Social/Social'
import {footerRouting, socialLinks} from "../../../data/paths_data";
import { footer } from '../../../utils/imgs'
import { Link } from 'react-router-dom'




function Footer() {
  return (
    <>
      <footer className="py-4 container-fluid">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className={`${styles['footerLogo']}`}>
                <img src={footer} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className={`${styles['Links']} p-1`}>
              <ul className="d-flex align-items-center mb-0 gap-3 list-unstyled justify-content-center">
                {footerRouting.map(([path, footerItem], i) => 
                    <li className={`${styles.footerPaths}`} key={i}>
                      <Link to={path} key={i} className={`${styles['link']} text-decoration-none`}>{footerItem}</Link>
                    </li>
                )}
              </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <Social iconSize='fs-4' socialLinks={socialLinks} center={`justify-content-center`} />
            </div>
          </div>
      </footer>
    </>
  )
}

export default Footer

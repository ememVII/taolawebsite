import { homeService01, rightArrowDark } from '../../utils/imgs'
import { Link } from 'react-router-dom'
import ServicesData from '../../data/services.json'
import styles from './Home.module.css'

function OurServices() {
  return (
    <section className={`${styles.services} row justify-content-center gx-5`}>
      <div className={`col-md-4 text-center`}>
        <img src={homeService01} alt="interior design" className="img-fluid" />
      </div>

      <div className={`${styles.servicesDetails} col-md-6`}>
        <h2>
          <Link to={'/services'}>
            Our Services <img src={rightArrowDark} alt="more services" />
          </Link>
        </h2>

        <div className={`${styles.servicesContent} row d-flex gap-1 mt-2`}>
          {ServicesData.servicesList.map((srv, i) => (
            <div className="col-md-3 col-3 text-center" key={i}>
              <img src={srv.logo} alt="services logo" className="img-fluid" />
              <p className="mt-3">{srv.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurServices

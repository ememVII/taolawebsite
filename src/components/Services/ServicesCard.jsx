import styles from './Services.module.css'
import ServicesData from '../../data/services.json'

function Services() {
  return (
    <>
      <section id={styles.services}>
        <div className="container h-100 d-flex justify-content-center align-items-center flex-column gap-3">
          <div className={`${styles['Main_Title']} text-center my-3`}>
            <h2>{ServicesData.title}</h2>
            <p>{ServicesData.description}</p>
          </div>
          <div className="row">
            {ServicesData.servicesList.map((srv, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div
                  className={`${styles['Srv_Box']} p-4 d-flex justify-content-center align-items-center flex-column gap-2 text-center`}
                >
                  <div className="img">
                    <img src={srv.logo} alt="" className="img-fluid" />
                  </div>
                  <h3>{srv.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services

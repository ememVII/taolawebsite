import styles from './Services.module.css'
import ServicesData from '../../data/services.json'

function Services() {
  return (
    <>
      <section id={styles.services}>
        <div className="container h-100 d-flex justify-content-center align-items-center flex-column gap-3 text-center">
          <div className={`${styles['Main_Title']} my-3`}>
            <h1 className='h2'>{ServicesData.title}</h1>
            <p>{ServicesData.description}</p>
          </div>
          <div className="row">
            {ServicesData.servicesList.map((srv, i) => (
              <div className="col-lg-12" key={i}>
                <div
                  className={`${styles['Srv_Box']} p-4 text-center`}
                >
                  <div className="img my-3">
                    <img src={srv.logo} alt={srv.title} />
                  </div>
                  <h1 className='h3'>{srv.title}</h1>
                  <p className='lh-lg'>{srv.description}</p>
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

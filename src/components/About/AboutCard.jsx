import styles from './About.module.css'
import { about, flower, aboutLayer } from '../../utils/imgs'

function About() {
  return (
    <>
      <section id={styles.about}>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-6">
              <div className={styles.content}>
                <div className={`${styles.Main_Title} mb-5`}>
                  <h2>Taola Interiors</h2>
                  <h3>Interior Design & Bespoke Furniture</h3>
                </div>
                <p>
                  Who we are We are Taola Interiors, a Cairo based Interior
                  Design firm. Established in 2009 by Arch. Marwa El-Abd, Arch.
                  Hala El-Shimi and Ms. Nadia El-Hageen.
                </p>
                <p>
                  As a team, we have a shared passion for design and a
                  consistent attention to detail. We are committed to client
                  satisfaction through delivering bespoke interior designs.
                </p>
                <p>
                  Our projects We work on a wide range of Corporate and
                  residential turn key projects. delivering full interior design
                  packages and furniture production. Hospitality In 2019 We have
                  proudly become the interior designer of record for the new
                  renovation of “Sheraton Cairo Hotel & Casino” under the
                  umbrella of Marriott International Global Design.
                </p>
                <p>
                  Our Vision We Aspire to become the leading Egyptian interior
                  design firm of choice for hotels and corporate projects. We
                  seek to add value to every client we work with through our
                  dedication to the design process and our commitment for a
                  superior client experience.
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className={`${styles.section_img} position-relative`}>
                <img src={about} alt="about-pic" className="img-fluid" />
                <div className={`${styles.overlay_box} position-absolute`}>
                  <img src={aboutLayer} alt="overlay" className="img-fluid" />
                </div>
                <div className="flower_img text-end">
                  <img
                    src={flower}
                    alt="flower_pic"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About

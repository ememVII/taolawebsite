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
                  Taola Interiors is Cairo-based interior design firm with a
                  rich history spanning over a decade, since our establishment
                  in 2009. Our company was founded by three partners who brought
                  together their diverse expertise to create Taola Interiors.
                </p>
                <p>
                  One of our esteemed founding partners is Arch. Marwa El-Abd, a
                  seasoned professional with over twenty years of experience in
                  the design field. Marwa's impressive portfolio includes
                  notable projects such as the Urban Regeneration of Downtown
                  Cairo, a project undertaken in collaboration with the
                  Institute de Recherche "IDR" and financed by the European
                  Commission. She has also worked on major design projects with
                  the esteemed firm "Associates Consultants." In addition to her
                  professional accomplishments, Marwa has contributed to the
                  field of design as a teaching assistant at both Cairo
                  University and the American University of Cairo, further
                  enhancing her expertise and knowledge.
                </p>
                <p>
                  Another key partner is Arch. Hala El-Shimi, who hails from a
                  family of renowned Egyptian architects, Dr. Mahmoud Elshimi
                  and Dr. Nagwa Sherif. Following in their illustrious
                  footsteps, Hala embarked on her career as a young interior
                  designer, honing her skills while working alongside Dr.
                  Mohamed Noaman at the prestigious firm "Madar." taking part in
                  some exclusive design projects and working with many
                  international brands (Fendi, Minotti, ... ). Inspired by her
                  experiences, Hala took the leap to establish her own business,
                  co-founding Taola Interiors.
                </p>
                <p>
                  Ms. Nadia El-Hageen, our third partner, brings a unique
                  perspective to our team with her exceptional business acumen
                  and extensive experience as an operations manager at Arab
                  Bank. With a degree in Business and a decade of valuable
                  industry experience, Nadia contributes invaluable insights and
                  expertise to our projects.
                </p>
                <p>
                  Driven by our shared passion for design and unwavering
                  attention to detail, the team at Taola Interiors is dedicated
                  to ensuring client satisfaction by delivering bespoke interior
                  designs that surpass expectations.
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
                  <img src={flower} alt="flower_pic" className="img-fluid" />
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

import { flower, homeIntro } from '../../utils/imgs'
import styles from './Home.module.css'

function Intro() {
  return (
    <section className={`${styles.intro} row`}>
      <div className={`${styles.introDetails} col-sm-12 col-md-8 pb-sm-4`}>
        <h1 className="lh-base">Taola Interiors</h1>
        <p>
          We believe that every person has the right to live in space that
          expresses his true authentic self.. Your home, work place or even you
          commercial project is an extension of who you really are. Its Not an
          imitation nor a trend.. It's an identity unique to each person.. We
          help people create this space…..we help them be THEMSELVES..
        </p>
        <p>
          What we stand for ط.و.ل "طاولة" Is an Arabic word for “Table”.. The
          centerpiece that brings the entire room together, The soul of the room
          that captures the essence of the place and brings together different
          people and different conversations. At طاولة we have embrace this
          concept, Blending tradition with modernity. We firmly believe in the
          power of authenticity and we understand that every client has a unique
          story that needs to be told.
        </p>
        <p>
          It is our mission to translate their individuality into each design we
          create. By staying true to our values, we ensure that our clients’
          personalities shine through in every aspet of their space.
        </p>
      </div>

      <div className="col-md-4">
        <div className="position-relative">
          <img
            src={homeIntro}
            alt="interior design"
            className={`${styles.introImg}`}
          />
          <img src={flower} alt="flower" className={`${styles.IntroFlower}`} />
        </div>
      </div>
    </section>
  )
}

export default Intro

import { Link } from "react-router-dom"
import { flower, homeIntro, rightArrowDark } from "../../utils/imgs"
import styles from './Home.module.css'

function Intro() {
    return (
        <section className={`${styles.intro} row`}>
            
            <div className={`${styles.introDetails} col-sm-12 col-md-8 pb-sm-4`}>
                <h1 className="lh-base">Taola Interiors</h1>
                <h2 className="h3">Interior Design & Bespoke Furniture</h2>
                <p className="lh-lg">Cairo Based Interior Design firm. Established in 2009 By <br/> Arch. Marwa El-Abd, Arch. Hala El-Shimi, Ms. Nadia El-Hageen.</p>
                <span>More <Link to='/about'><img src={rightArrowDark} alt="more info" /></Link></span>
            </div>
            
            <div className='col-md-4'>
                <div className="position-relative">
                    <img src={homeIntro} alt="interior design" className={`${styles.introImg}`} />
                    <img src={flower} alt="flower" className={`${styles.IntroFlower}`}/>
                </div>
            </div>
            
        </section>
    )
}

export default Intro

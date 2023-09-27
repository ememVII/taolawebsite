import Hero from "../../components/Home/Hero"
import Intro from "../../components/Home/Intro"
import OurServices from "../../components/Home/OurServices"
import Projects from "../../components/Home/Projects"

function Home() {
    return (
        <div>
            <Hero/>
            <Intro/>
            <Projects/>
            <OurServices/>
        </div>
    )
}

export default Home

import { Link } from 'react-router-dom'
import {
  homeProject01,
  homeProject02,
  homeProject03,
  homeProject04,
  rightArrowLight,
} from '../../utils/imgs'
import styles from './Home.module.css'

function Projects() {
  return (
    <section className={`${styles.projects} row gx-0`}>
      <h1 className="mb-5">Projects</h1>
      {[
        ['hospitality', 'Hospitality', homeProject01],
        ['corporate', 'Corporate', homeProject02],
        ['residential', 'Residential', homeProject03],
        ['commercial', 'Commercial', homeProject04],
      ].map(([projectId, projectName, projectImg], index) => (
        <div className="col-lg-3 col-6 position-relative bg-black" key={index}>
          <Link to={`/projects/${projectId}`}>
            <h2 className="position-absolute fs-4">{projectName}</h2>
            <img
              src={projectImg}
              alt={projectName}
              className={styles.projectImg}
            />

            <img
              src={rightArrowLight}
              alt={`${projectName} more`}
              className={styles.projectArrow}
            />
          </Link>
        </div>
      ))}
    </section>
  )
}

export default Projects

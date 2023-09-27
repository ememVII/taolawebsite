import { projectsData } from '../../data/projects'
import Projects from './Projects'
import styles from './ProjectsList.module.css'
import { Link} from 'react-router-dom'

function ProjectsList() {
  
  return (
    <>
    {/* <section className={`${styles.projects}`}>
      {projectsData.map((project, i) => (
        <div key={project.id}>
          <div className={`row ${styles.project}`} id={project.projectTitle}>
            <div className="col-md-6">
              <img src={project.projectCover} alt={`${project.projectTitle}`} />
            </div>

            <div
              className={`${styles.projectDetails} ${
                i % 2 !== 0 ? styles.evenChild : ''
              } col-md-6 text-center`}
            >
              <h2>
                {i + 1}. {project.projectTitle}
              </h2>
              <ul className="row text-center px-4">
                {project.subProjects.map((subProject, i) => (
                  <li key={i} className="col-md-6">
                    <Link to={`/${project.id}/${subProject.id}`} className={styles['not-allowed']}>
                      {subProject.title}
                    </Link>{' '}
                    <p>{subProject.info}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </section> */}
    
    <Projects all/>
    </>
  )
}

export default ProjectsList

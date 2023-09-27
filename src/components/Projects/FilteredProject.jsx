import { Link, useParams } from "react-router-dom"
import { projectsData } from "../../data/projects"
import styles from './ProjectsList.module.css'
import Projects from "./Projects"
import NotFound from "../../pages/NotFound/NotFound"


function FilteredProject() {
    const { projectId } = useParams()
    
    const project = projectsData.find(p => p.id === projectId)
    // Check if no projects
    if(!project) {
      return <NotFound/>
    }
    
    return (
    <>
    {/* <section className={styles.projects}>
        {projectsData.filter((p) => p.id === `${projectId}`).map((project, i) => (
        <div key={project.id}>
          <div className={`row ${styles.project}`} id={'project.projectTitle'}>
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
                    <Link to={`/${project.id}/${subProject.id}`}>
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
    
    <Projects filtered projectId={projectId}/>
    </>
    )
}

export default FilteredProject

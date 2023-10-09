import { Link } from 'react-router-dom'
import { projectsData } from '../../data/projects'
import styles from './ProjectsList.module.css'
import { projectsHeader } from '../../utils/imgs'

function Projects({ all, filtered, projectId }) {
  return (
    <>
      {all && (
        <div className="row mt-5">
          <div className={`${styles.projectHeader} col-md-6 mb-5`}>
            <img src={projectsHeader} alt="projects Header" />
          </div>

          <div className="col-md-6">
            <h1 className="h4 text-center">
              Here's a selection of the projects we worked on
            </h1>
            <ul className="mt-5">
              <li className="my-5">
                <span className="fw-bold">- Hospitality:</span> Taola Interiors
                was selected as the interior designer for the renovation project
                at the Sheraton Cairo Hotel & Casino. This project was done
                under the umbrella of Marriott, and it helped establish Taola
                Interiors as a recognized firm in the hospitality field.
              </li>

              <li className="my-5">
                <span className="fw-bold">- Corporate:</span> Taola Interiors
                has worked on various corporate offices, including the
                renovation of CRCICA (Cairo Regional Centre for International
                Commercial Arbitration). The firm transformed the outdated
                1970's design into a modern and state-of-the-art arbitration
                center. The center won a recognized award that same year after
                the renovation. Leading to another 2 major projects with the
                same entity for a full face lift of the conference center and
                the employees area.{' '}
              </li>

              <li className="my-5">
                <span className="fw-bold">- Residential:</span> Taola Interiors
                has a passion for working on residential projects. They aim to
                capture the essence of each client and create authentic and
                genuine spaces that reflect their unique personalities and
                preferences.
              </li>

              <li className="my-5">
                <span className="fw-bold">- Commercial:</span> Taola Interiors
                has experience working on restaurants and lounges. Like the
                anticipated Sheraton Sky lounge to food and beverage projects.
                These projects offer opportunities for creativity and allow for
                the exploration of eccentric and unique design ideas.
              </li>
            </ul>
          </div>
        </div>
      )}
      {all && (
        <section className={`${styles.projects}`}>
          {projectsData.map((project, i) => (
            <div key={project.id}>
              <div
                className={`row ${styles.project}`}
                id={project.projectTitle}
              >
                <div className="col-md-6">
                  <img
                    src={project.projectCover}
                    alt={`${project.projectTitle}`}
                  />
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
                      <li
                        key={i}
                        className={`col-md-6 ${
                          project.notClickable && styles['not-allowed']
                        }`}
                      >
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
        </section>
      )}

      {filtered && (
        <section className={styles.projects}>
          {projectsData
            .filter(p => p.id === `${projectId}`)
            .map((project, i) => (
              <div key={project.id}>
                <div
                  className={`row ${styles.project}`}
                  id={'project.projectTitle'}
                >
                  <div className="col-md-6">
                    <img
                      src={project.projectCover}
                      alt={`${project.projectTitle}`}
                    />
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
                        <li
                          key={i}
                          className={`col-md-6 ${
                            project.notClickable && styles['not-allowed']
                          }`}
                        >
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
        </section>
      )}
    </>
  )
}

export default Projects

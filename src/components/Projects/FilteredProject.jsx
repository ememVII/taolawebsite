import { useParams } from 'react-router-dom'
import { projectsData } from '../../data/projects'
import Projects from './Projects'
import NotFound from '../../pages/NotFound/NotFound'

function FilteredProject() {
  const { projectId } = useParams()

  const project = projectsData.find(p => p.id === projectId)
  // Check if no projects
  if (!project) {
    return <NotFound />
  }

  return (
    <>
      <Projects filtered projectId={projectId} />
    </>
  )
}

export default FilteredProject

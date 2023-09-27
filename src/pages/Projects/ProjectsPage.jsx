import ProjectsList from "../../components/Projects/ProjectsList"
import { useEffect } from "react"
import { useLocation } from "react-router-dom";

function ProjectsPage() {
    // const location = useLocation()
    
    //   useEffect(() => {
    //     const scrollToSection = () => {
    //       const sectionId = location.hash.substring(1);
    //       const section = document.getElementById(sectionId);   
    //       if (section) {
    //         section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    //       }
    //     };
    
    //     scrollToSection();
    
    //     window.addEventListener('hashchange', scrollToSection);
    
    //     return () => {
    //       window.removeEventListener('hashchange', scrollToSection);
    //     };
    //   }, [location.hash]);
    
      
    return (
        <div>
            <ProjectsList/>
        </div>
    )
}

export default ProjectsPage

import { Route, Routes, useNavigation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {
  About,
  Clients,
  Contact,
  Footer,
  Home,
  Loading,
  Navbar,
  ProjectsPage,
  Services,
} from './utils/pages'
import SingleProject from './pages/SingleProject/SingleProject'
import FilteredProject from './components/Projects/FilteredProject'
import NotFound from './pages/NotFound/NotFound'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
  setTimeout(() => {
    setIsLoading(false)
  }, 2000)
  
  if(isLoading) {
    document.body.classList.add('disable-scroll')
  } else {
    document.body.classList.remove('disable-scroll')
  }

  return () => {
    document.body.classList.remove('disable-scroll')
  }
  
  }, [isLoading])
  
  
  return (
    <>
      <Navbar />

      {isLoading ? (
        <Loading />
      ) : (
        <main className="container-fluid">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<ProjectsPage />} />
            
            
            <Route path="/projects/:projectId" element={<FilteredProject/>}/>
            <Route
                path="/:projectId/:subProjectId"
                element={<SingleProject />}
              />
            
            <Route path="*" element={<NotFound/>} />
            
            <Route path="/services" element={<Services />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      )}

      <Footer/>
    </>
  )
}

export default App

/*  
<main className="container-fluid">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<ProjectsPage />} />
            
            
            <Route path="/:projectId" element={<FilteredProject/>}/>
            <Route
                path="/:projectId/:subProjectId"
                element={<SingleProject />}
              />
            
            <Route path="*" element={<NotFound/>} />
            
            <Route path="/services" element={<Services />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
*/
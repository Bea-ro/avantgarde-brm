import { ProjectsListStyled } from './ProjectsListStyled'
import { projects } from '../../../data/projetcs'
import { Project } from '../../../types/project'
import { useLocation  } from 'react-router-dom'

import ProjectCard from '../../ProjectCard/ProjectCard'


const ProjectsList = () => {

    const location = useLocation();
    const currentPath = location.pathname;
    console.log(currentPath)
    const validCurrentPath = currentPath.slice(1, currentPath.length);

  return (
       <ProjectsListStyled>
    {projects.map((project: Project) => ( 
      validCurrentPath === '' ?
      project.main && <ProjectCard key={project.name} project={project}/> :
      <ProjectCard key={project.name} project={project}/>
      )
      )
      }
         </ProjectsListStyled>
  )
}

export default ProjectsList
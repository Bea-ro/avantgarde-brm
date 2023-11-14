import { ProjectsListStyled } from './ProjectsListStyled'
import { projects } from '../../../data/projetcs'
import { Project } from '../../../types/project'
import { useLocation  } from 'react-router-dom'

import ProjectCard from '../../ProjectCard/ProjectCard'


const ProjectsList = ({padding}: Props) => {

    const location = useLocation();
    const currentPath = location.pathname;
    const validCurrentPath = currentPath.slice(1, currentPath.length);

  return (
       <ProjectsListStyled padding={padding}>
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

export type Props = {
  padding?: string
}

export default ProjectsList
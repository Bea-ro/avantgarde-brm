import { ProjectCardStyled } from './ProjectCardStyled'
import { Project } from '../../types/project'

const ProjectCard = ({ project }: Props) => {
  return (
    <ProjectCardStyled>
      <a href={project.projectURL} target="blank" rel="noopener noreferrer">
      <img src={project.image} alt={project.name}/>
      <div className="project-name-link">
      <p className="project-name">{project.name}</p>
      <a className="project-link" target="blank" rel="noopener noreferrer">Ver proyecto »</a>
      </div>
      </a>
    </ProjectCardStyled>
  )
}

export type Props = {
project: Project
}

export default ProjectCard
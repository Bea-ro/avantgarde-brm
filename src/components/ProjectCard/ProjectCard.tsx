import React from 'react'
import { ProjectCardStyled } from './ProjectCardStyled'
import { Project } from '../../types/project'

const ProjectCard = ({ project }: Props) => {
  return (
    <ProjectCardStyled>
      <img src={project.image} alt={project.name}/>
      <p>{project.name}</p>
      <a target="blank" rel="noopener noreferrer">Ver proyecto</a>
    </ProjectCardStyled>
  )
}

export type Props = {
project: Project
}

export default ProjectCard
import { personalData } from '../../data/personalData'
import { projects } from '../../data/projetcs'

import TechIcon from '../../components/TechIcon/TechIcon'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import { HomeStyled } from './HomeStyled'

const Home = () => {
  return (
    <HomeStyled>
    <div className="text-container">
    <p className="uppercase-text">Full Stack Developer con experiencia en Marketing</p>
    <h3>De siempre marketiniana, ahora explorando - y en ello, amando - la programación.</h3>
    <p className="personal-description">Soy una tipa poco común. Uncommon techy. 
      Me gusta el cambio y la innovación y por eso me he metido de lleno en la programación.
     Llevo un año viviendo intensamente "el código".
      </p>
    </div> 

    <ul className="techs-list">
      {(personalData.techs).map((tech) => 
      (<TechIcon key={tech.name} tech={tech}/>))
      }
      </ul>
    
    <h3>Mis retos</h3>
      <p>Mira lo que he estado haciendo últimamente</p>
    
    <ul>
    {projects.map((project) => 
      (<ProjectCard key={project.name} project={project}/>))
      }
         </ul>
    
    <a href="/work">¡Mola! Quiero ver más</a>
    </HomeStyled>
  )
}

export default Home
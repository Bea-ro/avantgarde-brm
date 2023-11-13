import { HomeStyled } from './HomeStyled'
import { personalData } from '../../data/personalData'
import { projects } from '../../data/projetcs'

import TechIcon from '../../components/TechIcon/TechIcon'
import ProjectCard from '../../components/ProjectCard/ProjectCard'


const Home = () => {
  return (
    <HomeStyled>
    <section>
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
      </section> 
    <section>
    <div className="text-container">
    <h3>Mis retos</h3>
      <p>Mira lo que he estado haciendo últimamente</p>
    </div>
    <ul className="projects-list">
    {projects.map((project) => ( 
      project.main && <ProjectCard key={project.name} project={project}/>)
      )
      }
         </ul>
    
    <a href="/work" className="button">¡Mola! Quiero ver más</a>
    </section>
    </HomeStyled>
  )
}

export default Home
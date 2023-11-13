import { HomeStyled } from './HomeStyled'
import { personalData } from '../../data/personalData'

import TechIcon from '../../components/TechIcon/TechIcon'
import ProjectsList from '../../components/ui/ProjectsList/ProjectsList'
import Title from '../../components/ui/Title/Title'


const Home = () => {
  return (
    <HomeStyled>
    <section>
      <img className="personal-img" src="/personal-img.jpg" alt="developer-image" />
    <div className="text-container">
    <p className="uppercase-text">Full Stack Developer con experiencia en Marketing</p>
    <Title text="De siempre marketiniana, ahora explorando - y en ello, amando - la programación."/>
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
    <Title text="Mis retos"/>
      <p>Mira lo que he estado haciendo últimamente</p>
    </div>
    <ProjectsList/>
    <a href="/work" className="button">¡Mola! Quiero ver más</a>
    </section>
    </HomeStyled>
  )
}

export default Home
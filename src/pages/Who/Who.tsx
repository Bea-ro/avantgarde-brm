import { HomeStyled } from '../Home/HomeStyled'
import Title from '../../components/ui/Title/Title'

const Who = () => {
  return (
    <HomeStyled>
    <img className="personal-img" src="/personal-img.jpg" alt="developer-image" />
  <div className="text-container">
  <p className="uppercase-text">About me</p>
  <p className="uppercase-text">Quiero ser #Avantgardian</p>
  <Title text="Exploradora, incansable y sin límites. Techie muy inquieta siempre un paso por delante."/>
  <p className="personal-description">Sí, he copiado vuestros adjetivos, pero es que antes ya me definía como "mente inquieta" (se puede ver en mi perfil de LinkedIn).
    </p>
    </div>
    </HomeStyled>
  )
}

export default Who
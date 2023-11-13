import { HeaderStyled } from './HeaderStyled'
import { personalData } from '../../data/personalData'

import Navbar from '../ui/Navbar/Navbar'

const Header = () => {
  return (
    <HeaderStyled>
       <a href="" target="blank" rel="noopener noreferrer">BRM</a>
       <Navbar></Navbar>
       <a href="contacto" target="blank" rel="noopener noreferrer">Contacto</a>
       <ul className="techs-list">
      {(personalData.profiles).map((profile) => 
      (<a href={profile.link} target="blank" rel="noopener noreferrer">
      <img src={profile.icon} alt={profile.name}/>
      </a>
      ))
      }
      </ul>
    </HeaderStyled>
  )
}

export default Header
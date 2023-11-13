import { HeaderStyled } from './HeaderStyled'
import { personalData } from '../../data/personalData'

import Navbar from '../ui/Navbar/Navbar'

const Header = () => {
  return (
    <HeaderStyled>
       <a className="personal-logo" href={personalData.profiles[2].link} target="blank" rel="noopener noreferrer">BRM</a>
       <Navbar></Navbar>
       <a href="contacto" target="blank" rel="noopener noreferrer">Contacto</a>
       <ul className="profiles-list">
      {(personalData.profiles).map((profile) => 
      (
      <li>
        <a href={profile.link} target="blank" rel="noopener noreferrer">
      <img src={profile.icon} alt={profile.name}/>
      </a>
      </li>
      ))
      }
      </ul>
    </HeaderStyled>
  )
}

export default Header
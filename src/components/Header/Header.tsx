import { HeaderStyled } from './HeaderStyled'
import { personalData } from '../../data/personalData'

import Navbar from '../ui/Navbar/Navbar'
import ProfilesList from '../ui/ProfilesList/ProfilesList'

const Header = () => {
  return (
    <HeaderStyled>
       <a className="personal-logo" href={personalData.profiles[2].link} target="blank" rel="noopener noreferrer">BRM</a>
       <Navbar></Navbar>
       <a className="contact-link" href="/contacto" target="blank" rel="noopener noreferrer">Contacto</a>
       <ProfilesList direction="column" position="fixed" right="0"/>
    </HeaderStyled>
  )
}

export default Header
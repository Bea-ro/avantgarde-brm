import { HeaderStyled } from './HeaderStyled'
import { useState, useRef } from 'react'

import Navbar from '../ui/Navbar/Navbar'
import ProfilesList from '../ui/ProfilesList/ProfilesList'
import MobileMenu from '../ui/MobileMenu/MobileMenu'
import Logo from '../Logo/Logo'


const Header = () => {

  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState<boolean>(false) 
  const burguerRef = useRef<HTMLSpanElement | undefined>(null);


  const openMobileMenu = () => {
    setMobileMenuIsOpen(!mobileMenuIsOpen);
  }

  return (
    <HeaderStyled>
       {!mobileMenuIsOpen && <Logo/>}
       {!mobileMenuIsOpen && <span className="burguer" onClick={openMobileMenu}>☰</span>}
       <MobileMenu mobileMenuIsOpen={mobileMenuIsOpen} openMobileMenu={openMobileMenu}/>
       <Navbar></Navbar>
       <a className="contact-link" href="/contacto" target="blank" rel="noopener noreferrer">Contacto</a>
       <ProfilesList direction="column" position="fixed" right="0"/>
    </HeaderStyled>
  )
}

export default Header
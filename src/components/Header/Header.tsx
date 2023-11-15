import { HeaderStyled } from './HeaderStyled'
import { useState, useRef, useEffect } from 'react'
import { personalData } from '../../data/personalData'

import Navbar from '../ui/Navbar/Navbar'
import ProfilesList from '../ui/ProfilesList/ProfilesList'
import MobileMenu from '../ui/MobileMenu/MobileMenu'


const Header = () => {

  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState<boolean>(false) 
  const burguerRef = useRef<HTMLSpanElement | undefined>(null);


  const openMobileMenu = () => {
    setMobileMenuIsOpen(true);
  }

useEffect(() => {
  if (burguerRef.current) {
    burguerRef.current.hidden = mobileMenuIsOpen;
    console.log(burguerRef.current.className="burguer-hidden")
  }
},[mobileMenuIsOpen])

  return (
    <HeaderStyled>
       <a className="personal-logo" href={personalData.profiles[2].link} target="blank" rel="noopener noreferrer">BRM</a>
       <span className="burguer-menu" onClick={openMobileMenu}
         ref={burguerRef}
       >☰</span>
       <MobileMenu mobileMenuIsOpen={mobileMenuIsOpen}/>
       <Navbar></Navbar>
       <a className="contact-link" href="/contacto" target="blank" rel="noopener noreferrer">Contacto</a>
       <ProfilesList direction="column" position="fixed" right="0"/>
    </HeaderStyled>
  )
}

export default Header
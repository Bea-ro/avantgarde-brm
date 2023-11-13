import React from 'react'
import { HeaderStyled } from './HeaderStyled'
import Navbar from '../ui/Navbar/Navbar'

const Header = () => {
  return (
    <HeaderStyled>
       <a href="" target="blank" rel="noopener noreferrer">BRM</a>
       <Navbar></Navbar>
       <a href="contacto" target="blank" rel="noopener noreferrer">Contacto</a>
    </HeaderStyled>
  )
}

export default Header
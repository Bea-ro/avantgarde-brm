import { NavbarStyled } from './NavbarStyld'

const Navbar = () => {
  return ( 
    <NavbarStyled>
        <ul>
        <li><a href="/home" target="blank" rel="noopener noreferrer">Home</a></li>
        <li><a href="/who" target="blank" rel="noopener noreferrer">Who</a></li>
        <li><a href="/what" target="blank" rel="noopener noreferrer">What</a></li>
        <li><a href="/work" target="blank" rel="noopener noreferrer">Work</a></li>
</ul>
    </NavbarStyled>
  )
}

export default Navbar
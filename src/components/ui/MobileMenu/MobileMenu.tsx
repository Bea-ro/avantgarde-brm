import Logo from '../../Logo/Logo'
import {MobileMenuStyled} from './MobileMenuStyled'

const MobileMenu = ({mobileMenuIsOpen, openMobileMenu}: Props) => {
  return (
    <MobileMenuStyled mobileMenuIsOpen={mobileMenuIsOpen}>
      <div>
        <Logo/>
      <span className="burguer-x" onClick={openMobileMenu}
       >x</span>
       </div>
       <ul>
       <li><a href="/">Home</a></li>
        <li><a href="/who">Who</a></li>
        <li><a href="/work">Work</a></li>
        </ul>
    </MobileMenuStyled>
  )
}
export type Props = {
    mobileMenuIsOpen: boolean
    openMobileMenu: () => void
}
export default MobileMenu
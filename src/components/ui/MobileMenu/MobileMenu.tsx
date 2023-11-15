import {MobileMenuStyled} from './MobileMenuStyled'

const MobileMenu = ({mobileMenuIsOpen}: Props) => {
  return (
    <MobileMenuStyled mobileMenuIsOpen={mobileMenuIsOpen}>
       <li><a href="/">Home</a></li>
        <li><a href="/who">Who</a></li>
        <li><a href="/work">Work</a></li>
    </MobileMenuStyled>
  )
}
export type Props = {
    mobileMenuIsOpen: boolean
}
export default MobileMenu
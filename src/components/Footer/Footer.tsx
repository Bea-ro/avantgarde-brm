import { personalData } from '../../data/personalData'
import { FooterStyled } from './FooterStyled'

const Footer = () => {
  return (
    <FooterStyled>
        <p>
        Página creada por{' '}
        <a
          href={personalData.profiles[1].link}
          target="blank"
          rel="noopener noreferrer"
        >
          Beatriz Rodríguez
        </a>
      </p>
    </FooterStyled>
  )
}

export default Footer
import { TechIconStyled } from './TechIconStyled'
import { Tech } from '../../types/tech'

const TechIcon = ({ tech }: Props) => {
  return (
    <TechIconStyled>
      <figure>
          <p>{tech.name}</p>
      <img src={tech.icon} alt={tech.name}/>
      </figure>
    </TechIconStyled>
  )
}

export type Props = {
tech: Tech
}

export default TechIcon
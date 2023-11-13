import { TitleStyled } from './TitleStyled'

const Title = ({text}: Props) => {
  return ( 
    <TitleStyled>
       {text}
    </TitleStyled>
  )
}

export type Props = {
text: string
align?: string
}
export default Title
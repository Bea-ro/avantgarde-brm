import { TitleStyled } from './TitleStyled'

const Title = ({text, fontSize}: Props) => {
  return ( 
    <TitleStyled fontSize={fontSize}>
       {text}
    </TitleStyled>
  )
}

export type Props = {
text: string
fontSize?: string
}
export default Title
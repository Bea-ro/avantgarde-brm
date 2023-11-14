import { WorkStyled } from './WorkStyled'

import ProjectsList from '../../components/ui/ProjectsList/ProjectsList'
import Title from '../../components/ui/Title/Title'

const Work = () => {
  return (
    <WorkStyled>
    <Title text="Descubre algunos de los trabajos que he hecho ultimamente"/>
<ProjectsList padding="60px"/>  
</WorkStyled>
  )
}

export default Work
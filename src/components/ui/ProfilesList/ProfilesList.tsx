import { ProfilesListStyled } from './ProfilesListStyled'
import { personalData } from '../../../data/personalData'


const ProfilesList = ({direction, position, right}: Props) => {
  return (
    <ProfilesListStyled direction={direction} position={position} right={right}>
         {(personalData.profiles).map((profile) => 
      (
      <li>
        <a href={profile.link} target="blank" rel="noopener noreferrer">
      <img src={profile.icon} alt={profile.name}/>
      </a>
      </li>
      ))
      }
    </ProfilesListStyled>
  )
}

export type Props = {
  direction?: string
  position?: string
  right?: string
}

export default ProfilesList
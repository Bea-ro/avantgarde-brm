import { personalData } from '../../data/personalData'

const Logo = () => {

  return (
    <a  href={personalData.profiles[2].link} target="blank" rel="noopener noreferrer" className="logo">
        BRM
    </a>
  )
}

export default Logo
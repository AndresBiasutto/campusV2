import { Link } from 'react-router-dom'

interface ContainerProps {
  logo: string;
  toLink: string;
}
const ImgLogo: React.FC<ContainerProps> = ({logo, toLink}) => {
  return (
    <Link to={toLink}>
    <img className="h-7 md:h-8" src={logo} alt="Campus Logo" />
  </Link>
  )
}

export default ImgLogo
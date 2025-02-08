import ImgLogo from "../atoms/ImgLogo"

interface FormHeaderProps {
  image: string | "";
  title: string| "";
  path: string | "";
}
const FormHeader: React.FC<FormHeaderProps> = ({image, title, path}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
    <ImgLogo logo={image} toLink={path} />
    <h2>{title}</h2>
  </div>
  )
}

export default FormHeader
import React from 'react'
import Section from '../../layouts/Section'
import NavigationLink from '../atoms/NavigationLink'
import { MdBookmarkAdd } from "react-icons/md";


const CreateFirsCourse:React.FC = () => {
  return (
    <Section bgColor="primary">
    <h2>Crear mi primer curso</h2>
    <p>Estas listo para crear tu primer curso?</p>
    <NavigationLink
      text="si estoy listo"
      pathName="¡Si estoy listo!"
      path="/teach/createcourse"
      icon={<MdBookmarkAdd />}
    />
  </Section>
  )
}

export default CreateFirsCourse
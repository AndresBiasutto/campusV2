import React from 'react'
import Section from '../../layouts/Section'
import ProfileFormOrg from '../organisms/forms/ProfileFormOrg'

const ProfileForm: React.FC = () => {
  return (
    <Section bgColor="secondary">
    <h3>Actualizar perfil</h3>
    <ProfileFormOrg />
  </Section>
  )
}

export default ProfileForm
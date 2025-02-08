import React from "react";
import Container from "../../layouts/Container";
import ProfileCard from "../../components/templates/ProfileCard";
import ProfileForm from "../../components/templates/ProfileForm";

const ProfileSettings: React.FC = () => {
  return (
    <Container>
      <h2>Ajustar perfil</h2>
      <div className="w-full h-full grid grid-rows-2 md:grid-cols-2 gap-2">
        <ProfileCard />
        <ProfileForm />
      </div>
    </Container>
  );
};

export default ProfileSettings;

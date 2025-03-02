import React from "react";
import Section from "../../layouts/Section";
import ProfileCardOrg from "../organisms/cards/ProfileCardOrg";

const ProfileCard: React.FC = () => {
  return (
    <Section bgColor="secondary">
      <ProfileCardOrg />
    </Section>
  );
};

export default ProfileCard;

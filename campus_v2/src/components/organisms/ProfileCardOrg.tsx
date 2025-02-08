import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import ProfileCardHeader from "../molecules/ProfileCardHeader";

const ProfileCardOrg: React.FC = () => {
  const { image, name, email, contactNumber, description } = useSelector(
    (state: RootState) => state.auth
  );
  return (
    <div className="w-full h-full flex flex-col justify-start items-start gap-2">
      <h3>Cuenta</h3>
      <ProfileCardHeader
        image={image}
        email={email}
        contactNumber={contactNumber}
        name={name}
      />
      <p>
        {description}
      </p>
    </div>
  );
};

export default ProfileCardOrg;

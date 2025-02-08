import React from "react";
import AvatarImage from "../atoms/AvatarImage";

interface ProfileCardProps {
  image: string | null;
  email: string | null;
  contactNumber: string | null;
  name: string | null;
}

const ProfileCardHeader: React.FC<ProfileCardProps> = ({
  image,
  email,
  contactNumber,
  name,
}) => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-start items-center md:items-start gap-2">
      <div className=" w-20 h-20  min-w-20 min-h-20">
        <AvatarImage image={image} />
      </div>
      <div className="h-full w-full flex flex-col items-start justify-start">
        <h4 className=" text-center md:text-start">{name} </h4>
        <p className=" text-center md:text-start">{email} </p>
        <p className=" text-center md:text-start">tel: {contactNumber ? contactNumber : "-"} </p>
      </div>
    </div>
  );
};

export default ProfileCardHeader;

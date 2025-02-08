import React from "react";
import FormUploadImg from "../atoms/FormUploadImg";
import AvatarImage from "../atoms/AvatarImage";

interface FormUploadImgProps {
  uploadImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  image: string;
}

const ImgInputAndAvatar: React.FC<FormUploadImgProps> = ({
  uploadImage,
  image,
}) => {
  
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-2">
      {image && (<div className=" min-w-8 min-h-8 w-8 h-8">
        <AvatarImage image={image} />
      </div>)}
      <FormUploadImg uploadImage={uploadImage} onFileSelect={function (): void {
              throw new Error("Function not implemented.");
          } } />
    </div>
  );
};

export default ImgInputAndAvatar;

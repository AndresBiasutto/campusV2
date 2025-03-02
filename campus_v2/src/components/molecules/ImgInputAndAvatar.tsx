import React from "react";
import FormUploadImg from "../atoms/FormUploadImg";
import AvatarImage from "../atoms/AvatarImage";

interface FormUploadImgProps {
  changeImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  imageUrl: string;
}

const ImgInputAndAvatar: React.FC<FormUploadImgProps> = ({
  changeImage,
  imageUrl,
}) => {
  
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-2">
      {imageUrl && (<div className=" min-w-8 min-h-8 w-8 h-8">
        <AvatarImage image={imageUrl} />
      </div>)}
      <FormUploadImg changeImage={changeImage} onFileSelect={function (): void {
              throw new Error("Function not implemented.");
          } } />
    </div>
  );
};

export default ImgInputAndAvatar;

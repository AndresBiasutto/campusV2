import { useState } from "react";
import axios from "../api/axios";

const useImageUpload = () => {
  const [imageUrl, setImageUrl] = useState<string>("");

  const changeImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      console.error("No file selected");
      return;
    }
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "images");

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dvpchtyzq/image/upload",
        formData,
        { withCredentials: false }
      );
      setImageUrl(res.data.secure_url);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return { imageUrl, changeImage };
};

export default useImageUpload;

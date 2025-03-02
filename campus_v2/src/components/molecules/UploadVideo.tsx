import { useState } from "react";
import { RiVideoUploadLine } from "react-icons/ri";

interface UploadVideoProps {
  onUpload: (videoUrl: string) => void;
}

const UploadVideo: React.FC<UploadVideoProps> = ({ onUpload }) => {
  const [uploading, setUploading] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [videoDuration, setVideoDuration] = useState<number | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    const videoElement = document.createElement("video");
    videoElement.preload = "metadata";
    videoElement.src = URL.createObjectURL(file);
    videoElement.onloadedmetadata = () => {
      URL.revokeObjectURL(videoElement.src);
      setVideoDuration(videoElement.duration);
    };

    setUploading(true);
    setUploadProgress(0);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "images"); // Reemplaza con tu upload preset de Cloudinary

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://api.cloudinary.com/v1_1/dvpchtyzq/video/upload", true);
    
    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        setUploadProgress((event.loaded / event.total) * 100);
      }
    };

    xhr.onload = () => {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        setVideoUrl(data.secure_url);
        onUpload(data.secure_url);
      } else {
        console.error("Error subiendo el video", xhr.statusText);
      }
      setUploading(false);
    };
    
    xhr.onerror = () => {
      console.error("Error subiendo el video");
      setUploading(false);
    };
    
    xhr.send(formData);
  };

  return (
    <div className="flex items-center justify-center w-full">
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-20 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-gray-100"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <RiVideoUploadLine className="text-3xl" />
          <p className="mb-2 text-sm text-gray-500">
            <span className="font-semibold">Click para elegir video</span>
          </p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" onChange={handleUpload} accept="video/*" />
      </label>
      {uploading && <p>Subiendo... {uploadProgress.toFixed(2)}%</p>}
      {videoUrl && <p className="text-green-500">Video subido correctamente</p>}
      {videoDuration !== null && <p>Duración del video: {videoDuration.toFixed(2)} segundos</p>}
    </div>
  );
};

export default UploadVideo;

import React, { useState } from "react";
import { notify } from "./Sonner";

function Image({
  title,
  clickMe,
  image,
  HandleIsDone,
}: {
  title: string;
  clickMe: string;
  image: { image: string; id: string };
  HandleIsDone: (image: string, id: string) => void;
}) {
  const [loading, setLoading] = useState(false);
  const convertToBase64 = (file: any) => {
    if (!file) return;
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const HandleAddPicture = async (file: any) => {
    setLoading(true);
    const UploadedImage = (await convertToBase64(
      file.target.files[0]
    )) as string;
    const response = await fetch(
      `/api/image${image.id ? "/" + image.id : ""}`,
      {
        method: image.id ? "PATCH" : "POST",
        body: JSON.stringify({ image: UploadedImage }),
      }
    );
    setLoading(false);
    if (response.ok) {
      const data = await response.json();
      return HandleIsDone(UploadedImage, data._id);
    }
    return notify({ type: "error", message: "Failed to upload image" });
  };

  return (
    <div className="flex-1">
      <h3 className="text-xl text-center font-semibold mt-10 mb-4">{title}</h3>
      <div className="h-96 border border-gray-800 rounded-[1.5rem] overflow-hidden relative">
        <label
          htmlFor="file-upload"
          className="h-full w-full flex items-center justify-center absolute top-0 left-0 cursor-pointer"
        >
          {loading ? (
            "Loading..."
          ) : image.id ? (
            <img src={image.image} className="h-full w-full object-cover" />
          ) : (
            clickMe
          )}
        </label>
        <input
          className="h-full w-full hidden"
          type="file"
          name="file"
          id="file-upload"
          accept=".jpeg, .png, .jpg"
          onChange={HandleAddPicture}
        />
      </div>
    </div>
  );
}

export default Image;

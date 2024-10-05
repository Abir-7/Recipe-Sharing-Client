/* eslint-disable @typescript-eslint/no-explicit-any */
import envConfig from "@/config/envConfig";

export const uploadImageToCloudinary = async (file: any) => {
  try {
    if (!file) throw new Error("No file provided");

    const { cloudinary_preset, cloudinary_cloudname } = envConfig;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", cloudinary_preset as string);
    formData.append("cloud_name", cloudinary_cloudname as string);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudinary_cloudname}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) throw new Error("Image upload failed");

    const data = await response.json();
    return data?.secure_url || null;
  } catch (error) {
    console.error("Error uploading image:", error);
    return null;
  }
};

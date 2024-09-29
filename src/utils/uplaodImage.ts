import envConfig from "@/config/envConfig";

export const uploadImageToCloudinary = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", envConfig.cloudinary_preset as string);
  formData.append("cloud_name", envConfig.cloudinary_cloudname as string);

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${envConfig.cloudinary_cloudname}/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await response.json();

  return data.secure_url;
};

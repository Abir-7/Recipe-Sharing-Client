/* eslint-disable @typescript-eslint/no-explicit-any */
import { uploadImageToCloudinary } from "@/utils/uplaodImage";
import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

// Define a toolbar with image option
const modules = {
  toolbar: {
    container: [
      [{ header: "1" }, { header: "2" }, { font: [] }],

      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ align: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "video"],
      ["clean"],
    ],
    handlers: {
      image: function () {
        // Use a regular function to get proper `this` context
        const input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.click();

        input.onchange = async () => {
          const file = input.files ? input.files[0] : null;
          if (file) {
            try {
              // Resize the image before uploading
              const resizedFile = await resizeImage(file, 400); // Resize to 400px width

              // Call the upload function and wait for the response
              const responseLink = await uploadImageToCloudinary(resizedFile);

              if (responseLink) {
                const quill = (this as any).quill; // Use 'as any' to bypass TypeScript error
                const range = quill.getSelection(true); // Get the current cursor position

                // Insert the image URL directly if the response returns a URL
                quill.insertEmbed(range.index, "image", responseLink); // Insert the image URL
                quill.setSelection(range.index + 1); // Move cursor to the right of the image
              } else {
                console.error("Image upload failed");
              }
            } catch (error) {
              console.error("Error uploading image:", error);
            }
          }
        };
      },
    },
  },
};

// Function to resize the image
const resizeImage = (file: File, maxWidth: number): Promise<File> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();

    reader.onload = (e) => {
      if (e.target?.result) {
        img.src = e.target.result as string;
      }
    };

    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const ratio = img.height / img.width;
        canvas.width = maxWidth;
        canvas.height = maxWidth * ratio;

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // Convert the canvas to a Blob
        canvas.toBlob((blob) => {
          if (blob) {
            // Create a new File object from the Blob
            const resizedFile = new File([blob], file.name, {
              type: file.type,
            });
            resolve(resizedFile);
          } else {
            reject(new Error("Failed to convert canvas to blob"));
          }
        }, file.type);
      }
    };

    img.onerror = (error) => reject(error);
  });
};

interface RichtextEditorProps {
  name: string;
  label: string;
}

const CTextEditor = ({ name, label }: RichtextEditorProps) => {
  const { control } = useFormContext();

  return (
    <div>
      <label>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <ReactQuill
            {...field}
            modules={modules} // Pass custom modules including local image insert
            theme="snow"
          />
        )}
      />
    </div>
  );
};

export default CTextEditor;

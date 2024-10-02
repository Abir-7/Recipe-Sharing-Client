// "use client";
// import { uploadImageToCloudinary } from "@/utils/uplaodImage";
// import React, { useCallback } from "react";
// import { useFormContext, Controller } from "react-hook-form";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";

// // Define a toolbar with image option
// const modules = {
//   toolbar: {
//     container: [
//       [{ header: "1" }, { header: "2" }, { font: [] }],
//       [{ size: [] }],
//       ["bold", "italic", "underline", "strike", "blockquote"],
//       [{ list: "ordered" }, { list: "bullet" }],
//       ["link", "image", "video"],
//       ["clean"],
//     ],
//   },
// };

// // Function to resize the image
// const resizeImage = (
//   file: File,
//   maxWidth: number,
//   maxHeight: number
// ): Promise<Blob> => {
//   return new Promise((resolve, reject) => {
//     const img = new Image();
//     const reader = new FileReader();

//     reader.onload = (event) => {
//       if (event.target) {
//         img.src = event.target.result as string;
//       }
//     };

//     img.onload = () => {
//       const canvas = document.createElement("canvas");
//       const ctx = canvas.getContext("2d");

//       if (ctx) {
//         const aspectRatio = img.width / img.height;

//         // Calculate new dimensions
//         if (maxWidth && maxHeight) {
//           if (img.width > img.height) {
//             canvas.width = maxWidth;
//             canvas.height = maxWidth / aspectRatio;
//           } else {
//             canvas.height = maxHeight;
//             canvas.width = maxHeight * aspectRatio;
//           }
//         }

//         // Draw the resized image on the canvas
//         ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

//         // Convert the canvas to a blob and resolve the promise
//         canvas.toBlob(
//           (blob) => {
//             if (blob) {
//               resolve(blob);
//             } else {
//               reject(new Error("Could not convert canvas to Blob."));
//             }
//           },
//           "image/jpeg",
//           0.8
//         ); // You can adjust the quality as needed
//       }
//     };

//     reader.onerror = (error) => {
//       reject(error);
//     };

//     reader.readAsDataURL(file);
//   });
// };

// const handleImageUpload = async (quill: ReactQuill) => {
//   const input = document.createElement("input");
//   input.setAttribute("type", "file");
//   input.setAttribute("accept", "image/*");
//   input.click();

//   input.onchange = async () => {
//     const file = input.files ? input.files[0] : null;
//     if (file) {
//       try {
//         // Resize the image before uploading
//         const resizedImage = await resizeImage(file, 800, 800);

//         // Call the upload function and wait for the response
//         const responseLink = await uploadImageToCloudinary(resizedImage);

//         if (responseLink) {
//           const range = quill.getEditor().getSelection(true); // Get current cursor position
//           quill.getEditor().insertEmbed(range.index, "image", responseLink); // Insert image URL
//           quill.getEditor().setSelection({
//             index: range.index + 1, // Adjust the cursor position
//             length: 0, // No text selection, just move the cursor
//           }); // Move cursor to the right of the image
//         } else {
//           console.error("Image upload failed");
//         }
//       } catch (error) {
//         console.error("Error uploading image:", error);
//       }
//     }
//   };
// };

// interface RichtextEditorProps {
//   name: string;
//   label: string;
// }

// const CTextEditor: React.FC<RichtextEditorProps> = ({ name, label }) => {
//   const { control } = useFormContext();

//   const handleQuillModules = useCallback(() => {
//     return {
//       ...modules,
//       toolbar: {
//         ...modules.toolbar,
//         handlers: {
//           image: (quillInstance: ReactQuill) =>
//             handleImageUpload(quillInstance),
//         },
//       },
//     };
//   }, []);

//   return (
//     <div>
//       <label>{label}</label>
//       <Controller
//         name={name}
//         control={control}
//         render={({ field }) => (
//           <ReactQuill
//             {...field}
//             modules={handleQuillModules()} // Dynamically apply modules with the image handler
//             theme="snow"
//           />
//         )}
//       />
//     </div>
//   );
// };

// export default CTextEditor;

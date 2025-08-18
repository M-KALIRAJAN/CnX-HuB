// import React, { useRef, useState } from "react";
// import SelectInput from "../utils/SelectInput";
// import { FiUploadCloud } from "react-icons/fi";
// import { FaRegFolderOpen } from "react-icons/fa";
// import { IoIosCloseCircleOutline } from "react-icons/io";
// import { conductFile } from "../api/ApiServices";
// const [category, setCategory] = useState("");
// const [newCategory, setNewCategory] = useState("");

// export default function UploadContact() {
//   const fileInputRef = useRef();
//   const [uploadedFiles, setUploadedFiles] = useState([]);

//   const handleClickUpload = () => {
//     fileInputRef.current.click();

//   };

//   const handleSubmit = async ()=>{
//       if (uploadedFiles.length === 0) {
//     alert("Please select a file to upload.");
//     return;
//   }
//     const formData = new FormData();
//     formData.append("user_id", 3); 

//     if (category === "Add New category") {
//     formData.append("category", category);
//     formData.append("new_category", newCategory);
//   } else {
//     formData.append("category", category);
//   }
//   formData.append("csv_file", uploadedFiles[0]); 
//   try{
//     console.log("***************",formData);

//     await conductFile(formData)
//      setUploadedFiles([]);
//     setCategory("");
//     setNewCategory("");

//   }catch(err){
//     console.log(err.message);

//   }
//   }

//   const handleFileChange = (e) => {
//     const files = Array.from(e.target.files);
//     setUploadedFiles((prev) => [...prev, ...files]);
//   };

//   const handleRemoveFile = (indexToRemove) => {
//     setUploadedFiles((prevFiles) =>
//       prevFiles.filter((_, index) => index !== indexToRemove)
//     );
//   };

//   const Recpicent = [
//     { value: "Add New category ", label: "Add New category" },

//   ];
//     const new_category = [
//     { value: "Dealers", label: "Dealers" },

//   ];

//   return (
//     <div className="border border-gray-400 h-auto w-full p-4 rounded-2xl">
//       <h2 className="font-bold">Upload Contact CSV</h2>

//       <div className="flex gap-3 mt-3">
//         <div className="flex gap-3 items-center">
//           <h2>Select category</h2>
//           <SelectInput
//             options={Recpicent}
//             defaultValue="normaltemplate"
//             onChange={(e) => setCategory(e.target.value)}
//             className="w-[190px] bg-white"
//           />
//         </div>

//         <div className="flex gap-3 items-center">
//           <h2>New category</h2>
//           <SelectInput
//             options={new_category}
//             defaultValue="normaltemplate"
//             onChange={(e) => setNewCategory(e.target.value)}
//             className="w-[190px] bg-white"
//           />
//         </div>
//       </div>

//       <div className="flex gap-3 mt-6">

//         <div className="w-[600px] h-[450px] items-start flex flex-col justify-start p-3 overflow-y-auto gap-2   rounded-xl">
//           {uploadedFiles.length === 0 ? (
//             <p className="text-gray-400 text-sm">No files uploaded yet</p>
//           ) : (
//             uploadedFiles.map((file, index) => (
//               <div
//                 key={index}
//                 className="w-full h-[75px] bg-white rounded-lg shadow-sm flex items-center justify-between px-4"
//               >
//                 <div className="flex items-center gap-2">
//                   <div className="iconbackground bg-amber-400 p-2 rounded-full">
//                     <FaRegFolderOpen size={20} />
//                   </div>
//                   <p className="text-sm text-gray-700">{file.name}</p>
//                 </div>
//                 <IoIosCloseCircleOutline
//                   className="text-red-500 cursor-pointer"
//                   size={22}
//                   onClick={() => handleRemoveFile(index)}
//                 />
//               </div>
//             ))
//           )}
//         </div>

//         {/* Right upload section */}
//         <div className="w-[660px] h-[450px] background rounded-2xl flex flex-col justify-center items-center">
//           <div
//             className="border-[3px] flex flex-col justify-center items-center border-dotted border-gray-300 w-[500px] h-[230px] cursor-pointer"
//             onClick={handleClickUpload}
//           >
//             <div className="iconbackground items-center">
//               <FiUploadCloud size={25} />
//             </div>

//             <h2>
//               <span className="font-bold text-[#905CC1] cursor-pointer">
//                 Click To Upload
//               </span>{" "}
//               or drag and drop
//             </h2>
//             <h2>JPEG, PNG, or PDF</h2>

//             {/* Hidden File Input */}
//             <input
//               type="file"
//               multiple
//               ref={fileInputRef}
//               onChange={handleFileChange}
//               className="hidden"
//               accept=".jpg,.jpeg,.png,.pdf"
//             />
//           </div>

//           <div className="w-[501px] h-[97px] bg-white mt-3 flex flex-col justify-center rounded-2xl">
//             {uploadedFiles.length > 0 ? (
//               <div className="flex justify-between p-3 items-center">
//                 <div className="flex gap-2 items-center">
//                   <div className="iconbackground bg-amber-400">
//                     <FaRegFolderOpen size={25} />
//                   </div>
//                   <p className="text-sm text-gray-700">
//                     {uploadedFiles.length} file(s) uploaded
//                   </p>
//                 </div>
//                 <IoIosCloseCircleOutline
//                   className="text-red-500 cursor-pointer"
//                   size={25}
//                   onClick={() => setUploadedFiles([])}
//                 />
//               </div>
//             ) : (
//               <h2 className="items-center flex justify-center">
//                 NO FILE SELECTED
//               </h2>
//             )}
//           </div>
//         </div>
//           <button
//         onClick={handleSubmit}
//         className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
//       >
//         Upload Contact File
//       </button>
//       </div>
//     </div>
//   );
// }
import { useRef, useState, useEffect } from "react";
import { FiUploadCloud } from "react-icons/fi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaRegFolderOpen } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import SelectInput from "../utils/SelectInput";
import { conductFile } from "../api/ApiServices";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
export default function UploadContact() {
  const fileInputRef = useRef();
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [category, setCategory] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const { userId } = useAuth(); 
  const navigate = useNavigate()

  const Recpicent = [
    { value: "Select Category", label: "Select Category" },
    { value: "Add New Category", label: "Add New Category" },
    { value: "Dealers", label: "Dealers" },
  ];

  useEffect(() => {
    console.log("Category:", category);
    console.log("New Category:", newCategory);
  }, [category, newCategory]);

  const handleClickUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setUploadedFiles((prev) => [...prev, ...files]);
  };

  const handleRemoveFile = (indexToRemove) => {
    setUploadedFiles((prevFiles) =>
      prevFiles.filter((_, index) => index !== indexToRemove)
    );
  };

  const handleSubmit = async () => {
    if (uploadedFiles.length === 0) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("user_id", userId || 3);

    if (category === "Add New Category") {
      if (!newCategory.trim()) {
        alert("Please enter a name for the new category.");
        return;
      }
      formData.append("category", category);
      formData.append("new_category", newCategory);
    } else {
      formData.append("category", category);
    }

    formData.append("csv_file", uploadedFiles[0]);

    for (let pair of formData.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }
console.log("formData",formData);

    try {
      const response = await conductFile(formData);
      console.log("Upload successful:", response);
 toast.success("Upload Contuct successful!");
      setUploadedFiles([]);
      setCategory("");
      setNewCategory("");

     
  setTimeout(() => {
    navigate('/Connections');
  }, 3000);
      
    } catch (err) {
      console.error("Upload error:", err);
      alert("Upload failed. Please check your inputs and try again.");
    }
  };

  return (
    <div className="border border-gray-400 h-auto w-full p-4 rounded-2xl">
      <h2 className="font-bold">Upload Contact CSV</h2>

      <div className="flex gap-3 mt-3">
        <div className="flex gap-3 items-center">
          <h2>Select category</h2>
          <select
            className="w-[190px] bg-white border border-gray-300 px-2 py-1 rounded-md"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {Recpicent.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>


        </div>

        {console.log("Category state:", category)}
        {category === "Add New Category" && (
          <div className="flex gap-3 items-center">
            <h2>New category</h2>
            <input
              type="text"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="w-[190px] bg-white border border-gray-300 px-2 py-1 rounded-md"
              placeholder="Enter new category name"
            />
          </div>
        )}

      </div>

      <div className="flex gap-3 mt-6">
        {/* File list section */}
        <div className="w-[600px] h-[450px] flex flex-col justify-start p-3 overflow-y-auto gap-2 rounded-xl">
          {uploadedFiles.length === 0 ? (
            <p className="text-gray-400 text-sm">No files uploaded yet</p>
          ) : (
            uploadedFiles.map((file, index) => (
              <div
                key={index}
                className="w-full h-[75px] bg-white rounded-lg shadow-sm flex items-center justify-between px-4"
              >
                <div className="flex items-center gap-2">
                  <div className="iconbackground bg-amber-400 p-2 rounded-full">
                    <FaRegFolderOpen size={20} />
                  </div>
                  <p className="text-sm text-gray-700">{file.name}</p>
                </div>
                <IoIosCloseCircleOutline
                  className="text-red-500 cursor-pointer"
                  size={22}
                  onClick={() => handleRemoveFile(index)}
                />
              </div>
            ))
          )}
        </div>

        {/* Right upload section */}
        <div className="w-[660px] h-[450px] background rounded-2xl flex flex-col justify-center items-center">
          <div
            className="border-[3px] flex flex-col justify-center items-center border-dotted border-gray-300 w-[500px] h-[230px] cursor-pointer"
            onClick={handleClickUpload}
          >
            <div className="iconbackground items-center">
              <FiUploadCloud size={25} />
            </div>
            <h2>
              <span className="font-bold text-[#905CC1] cursor-pointer">
                Click To Upload
              </span>{" "}
              or drag and drop
            </h2>
            <h2>CSV files only</h2>
            <input
              type="file"
              multiple
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              accept=".csv"
            />
          </div>

          <div className="w-[501px] h-[97px] bg-white mt-3 flex flex-col justify-center rounded-2xl">
            {uploadedFiles.length > 0 ? (
              <div className="flex justify-between p-3 items-center">
                <div className="flex gap-2 items-center">
                  <div className="iconbackground bg-amber-400">
                    <FaRegFolderOpen size={25} />
                  </div>
                  <p className="text-sm text-gray-700">
                    {uploadedFiles.length} file(s) uploaded
                  </p>
                </div>
                <IoIosCloseCircleOutline
                  className="text-red-500 cursor-pointer"
                  size={25}
                  onClick={() => setUploadedFiles([])}
                />
              </div>
            ) : (
              <h2 className="items-center flex justify-center">
                NO FILE SELECTED
              </h2>
            )}
          </div>
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
      >
        Upload Contact File
      </button>
        <ToastContainer />
    </div>
  );
}



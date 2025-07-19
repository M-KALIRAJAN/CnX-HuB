import React, { useRef, useState } from "react";
import SelectInput from "../utils/SelectInput";
import { FiUploadCloud } from "react-icons/fi";
import { FaRegFolderOpen } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function UploadContact() {
  const fileInputRef = useRef();
  const [uploadedFiles, setUploadedFiles] = useState([]);

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

  const Recpicent = [
    { value: "Use Control List", label: "Normal Template" },
    { value: "+1", label: "+1" },
    { value: "+44", label: "+44" },
    { value: "+61", label: "+61" },
  ];

  return (
    <div className="border border-gray-400 h-auto w-full p-4 rounded-2xl">
      <h2 className="font-bold">Upload Contact CSV</h2>

      <div className="flex gap-3 mt-3">
        <div className="flex gap-3 items-center">
          <h2>Select category</h2>
          <SelectInput
            options={Recpicent}
            defaultValue="normaltemplate"
            onChange={(e) => console.log(e.target.value)}
            className="w-[190px] bg-white"
          />
        </div>

        <div className="flex gap-3 items-center">
          <h2>Select category</h2>
          <SelectInput
            options={Recpicent}
            defaultValue="normaltemplate"
            onChange={(e) => console.log(e.target.value)}
            className="w-[190px] bg-white"
          />
        </div>
      </div>

      <div className="flex gap-3 mt-6">
        
        <div className="w-[600px] h-[450px] items-start flex flex-col justify-start p-3 overflow-y-auto gap-2   rounded-xl">
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
            <h2>JPEG, PNG, or PDF</h2>

            {/* Hidden File Input */}
            <input
              type="file"
              multiple
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              accept=".jpg,.jpeg,.png,.pdf"
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
    </div>
  );
}

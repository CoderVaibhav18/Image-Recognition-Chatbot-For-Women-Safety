// import React from "react";

function ImageUpload() {
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Image uploaded: ", file.name);
    }
  };

  return (
    <div className="relative flex items-center group">
      <input
        type="file"
        accept="image/*"
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        onChange={handleImageUpload}
      />
      <div className="flex items-center justify-center p-2 text-gray-600 bg-white border-2 border-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-200 group-hover:scale-105">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <span className="hidden ml-2 text-sm font-medium md:inline-block">
        <input
              type="file"
              accept="image/*"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              // onChange={handleFileInput}
              id="image-upload"
            />
          Upload
        </span>
      </div>
    </div>
  );
}

export default ImageUpload;

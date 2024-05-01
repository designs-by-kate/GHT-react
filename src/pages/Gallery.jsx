import React from "react";
import ImageGallery from "../components/ImageGallery";

const Experience = () => {
  return (
    <>
      <div
        className="bg-gradient-to-r from-gray-800 to-blue-500 py-24 px-6"
        id="gallery"
      >
        <div>
          <h1 className="text-4xl font-semibold mb-8 text-gray-400">GALLERY</h1>
          <h3 className="text-xl font-semibold text-blue-200 text-center">
            Click on image to find out more
          </h3>
        </div>
        <div>
          <ImageGallery />
        </div>
      </div>
    </>
  );
};

export default Experience;

import React from 'react';
import { X } from "lucide-react";

const ImageModal = ({ image, onClose }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50 mt-20">
          <div className="relative bg-white bg-opacity-50 rounded-lg border border-gray-800 p-2 mb-10">
            <button className="absolute top-0 right-0 text-white text-xl p-8" onClick={onClose}><X /></button>
            <img src={image.src} alt={image.imgTitle} className="w-full h-full rounded-lg" style={{ maxHeight: '400px', maxWidth: '400px' }} />
          </div>
        </div>
    );
};

export default ImageModal;

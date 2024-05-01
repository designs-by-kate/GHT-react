// ImageGallery.js
import React, { useState } from 'react';
import ImageModal from './ImageModal';
import projects from '../../projects.json';

const ImageGallery = ({ projectId }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Find the project with the specified projectId
  const project = projects.find((project) => project.id === projectId);

  if (!project) {
    return <div>No project found with ID {projectId}</div>;
  }

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex">
        <div key={project.id} className="flex-none p-4">
          <div className="flex">
            {project.images.map((image) => (
              <div key={image.src} className="flex-none p-4">
                <div className="relative w-24 h-24">
                  <div className="absolute inset-0 bg-white border border-gray-200 rounded-lg overflow-hidden cursor-pointer" onClick={() => openModal(image)}>
                    <div className="w-full h-full flex items-center justify-center">
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={closeModal} />
      )}
    </div>
  );
};

export default ImageGallery;

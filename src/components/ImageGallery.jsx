import React, { useState } from 'react';
import projects from '../../projects.json'

const ImageGallery = () => {
  const [flippedImage, setFlippedImage] = useState(null);

  const handleClick = (imageSrc) => {
    setFlippedImage(flippedImage === imageSrc ? null : imageSrc);
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex">
        {projects.map(project => (
          <div key={project.id} className="flex-none p-4">
            <div className="flex">
              {project.images.map(image => (
                <div key={image.src} className="flex-none p-4">
                  <div
                    className="relative w-72 h-64 cursor-pointer"
                    onClick={() => handleClick(image.src)}
                  >
                    <div
                      className={`absolute inset-0 bg-white border border-gray-200 rounded-lg overflow-hidden transform ${
                        flippedImage === image.src ? 'rotate-y-180' : ''
                      } transition-transform`}
                    >
                      <div className="w-full h-full flex items-center justify-center">
                        <img
                          src={image.src}
                          alt={image.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div
                      className={`absolute inset-0 bg-white border border-gray-200 rounded-lg overflow-hidden transform rotate-y-180 ${
                        flippedImage === image.src ? '' : 'hidden'
                      } transition-transform`}
                    >
                      <div className="w-full h-full flex items-center justify-center">
                        <p className="text-center">{image.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;


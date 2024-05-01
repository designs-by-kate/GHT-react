import React, { useState } from "react";
import ImgProGallery from "./ImgProGallery";
import { CalendarDays, Building2} from "lucide-react";

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  // Check if project.name is defined before accessing it
  const projectName = project.name ? project.name.toUpperCase() : "";

  return (
    <div className="max-w-xs mx-auto bg-gradient-to-br from-white to-gray-500 rounded-xl shadow-2xl shadow-black overflow-hidden">
      <div className="px-4 py-6">
        {/* Use the conditional projectName instead of project.name directly */}
        <div className="text-gray-600 text-center font-bold text-xl mb-2">
          {projectName}
        </div>
          <div className="text-gray-900 text-base mb-2 pl-2">{project.position}</div>
        <div className="flex bg-gray-200 rounded">
          <Building2 />
          <div className="text-gray-900 text-base font-bold mb-2 pl-2">
            {project.company}
          </div>
        </div>
        <div className="flex">
          <CalendarDays />
          <div className="text-gray-700 text-base mb-2 pl-2">
            {project.duration}
          </div>
        </div>
      </div>
      {/* Replace the image section with the ImageGallery component */}
      <ImgProGallery projectId={project.id} />
      <div className="px-4 pb-4">
        <button
          onClick={toggleExpanded}
          className="bg-blue-500 text-white hover:bg-blue-700 hover:shadow-md font-bold py-2 px-4 rounded m-4"
        >
          {expanded ? "Show Less" : "Find Out More"}
        </button>
      </div>
      {expanded && (
        <div className="px-4 py-2">
          <p>{project.description}</p>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;

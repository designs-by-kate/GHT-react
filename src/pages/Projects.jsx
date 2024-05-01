import React from 'react';
import projectsData from '../../projects.json';
import ProjectCard from '../components/ProjectCard';

const ProjectsPage = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-blue-200 py-24 px-6">
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-white">PROJECTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map(project => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;

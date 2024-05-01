import React from 'react';
import profileImg from '../../public/images/GPimg/1.jpg';

const About = () => {
  return (
    <section className="bg-gradient-to-r from-gray-800 to-blue-500 py-24 px-6" id="about">
      <h2 className="text-4xl font-semibold mb-8 text-gray-400">About</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <img src={profileImg} alt="" className="w-64 h-64 rounded-full shadow-md m-12" />
        <ul className="flex flex-col gap-8">
          {[
            { title: 'Poznan University of Technology', description: 'Master of Engineering (MEng), Civil Engineering (Bridges and Underground Engineering)' },
            { title: 'I LO Leszno', description: 'Liceum Ogólnoksztacáce' },
            { title: 'Course', description: 'ProQual L2 Utylity Avoidance & Location of Buried Services in Construction - NVQ2' },
            { title: 'Course', description: 'Site Management Safety Training Scheme (SMSTS)' },
            { title: 'Course', description: 'Temporary Works Supervisor Training Course (TWC)' },
          ].map((item, index) => (
            <li key={index} className="bg-gradient-to-r from-gray-800 to-blue p-2 rounded-l-lg flex items-center gap-4">
              <img src={profileImg} alt={item.title} className="w-12 h-12 rounded-full shadow-md" />
              <div>
                <h3 className="text-xl font-semibold text-blue-200">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;

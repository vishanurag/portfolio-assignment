import React, { useEffect, useState } from 'react';
import SectionHeading from './assets/SectionHeading';
import ProjectCard from './assets/ProjectCard';

const Projects = () => {
  // State for project list
  const [projectList, setProjectList] = useState([]);

  // Fetch data on component mount
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('./projects.json'); // Ensure the file path is correct
        const data = await response.json(); // Parse JSON
        setProjectList(data); // Set the state with fetched data
      } catch (err) {
        console.error('Failed to fetch projects:', err);
      }
    };

    fetchProjects();
  }, []); // Dependency array ensures it runs only on mount

  return (
    <div id="Projects">
      <SectionHeading title={"Projects"} />
      <div className="project-list flex max-w-[90%] md:max-w-[90%] justify-self-center md:justify-self-auto md:pl-10 flex-wrap justify-evenly ">
        

{
          projectList.map((project, index) => {
            return (
              <ProjectCard key={index} url={project.url} tech={project.tech} desc={project.desc} title={project.title} />
            );
          })
        }
      </div>
    </div>
  );
};

export default Projects;

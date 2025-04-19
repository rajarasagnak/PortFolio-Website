import { useState } from "react";
import HackTrackModal from "./HackTrackModal";
import ProjectDemoModal from "./ProjectDemoModal";

export default function Projects() {
  const [isHackTrackModalOpen, setIsHackTrackModalOpen] = useState(false);
  const [isProjectDemoModalOpen, setIsProjectDemoModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState({
    title: "",
    description: "",
    type: ""
  });

  const openHackTrackModal = () => {
    setIsHackTrackModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeHackTrackModal = () => {
    setIsHackTrackModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const openProjectDemoModal = (project: any) => {
    setCurrentProject({
      title: project.title,
      description: project.description,
      type: project.type
    });
    setIsProjectDemoModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectDemoModal = () => {
    setIsProjectDemoModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const projects = [
    {
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing skills and projects",
      technologies: ["HTML", "CSS", "JavaScript"],
      gradient: "from-primary to-secondary",
      icon: "fas fa-user-circle",
      isPersonal: true
    },
    {
      title: "Hack Track Website",
      description: "A website for students to track events and hackathons occurring in different colleges",
      technologies: ["HTML", "CSS", "JavaScript", "MySQL", "Node.js"],
      gradient: "from-purple-500 to-pink-500",
      icon: "fas fa-calendar-alt",
      isOngoing: true
    },
    {
      title: "Netflix Clone",
      description: "A simple clone of the Netflix website with responsive design",
      technologies: ["HTML", "CSS", "JavaScript"],
      gradient: "from-red-600 to-red-800",
      icon: "fas fa-film",
      type: "netflix"
    },
    {
      title: "Simple Calculator",
      description: "A working calculator with buttons for digits and operations",
      technologies: ["HTML", "CSS", "JavaScript"],
      gradient: "from-green-500 to-teal-500",
      icon: "fas fa-calculator",
      type: "calculator"
    },
    {
      title: "Project Approval System",
      description: "System to streamline project approval workflows",
      technologies: ["HTML", "CSS", "JavaScript", "Python Flask"],
      gradient: "from-yellow-500 to-orange-500",
      icon: "fas fa-tasks",
      type: "approval"
    }
  ];

  return (
    <>
      <section id="projects" className="py-16 bg-neutral-light section-animate">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className={`h-48 bg-gradient-to-r ${project.gradient} flex items-center justify-center`}>
                  <i className={`${project.icon} text-6xl text-white`}></i>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-blue-100 text-primary-dark text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-end">
                    {project.isPersonal && (
                      <button className="text-primary hover:text-primary-dark transition-colors font-medium" disabled>
                        Personal Project
                      </button>
                    )}
                    {project.isOngoing && (
                      <button 
                        onClick={openHackTrackModal}
                        className="text-primary hover:text-primary-dark transition-colors font-medium"
                      >
                        <i className="fas fa-external-link-alt mr-1"></i> View Demo
                      </button>
                    )}
                    {project.type && (
                      <button 
                        onClick={() => openProjectDemoModal(project)}
                        className="text-primary hover:text-primary-dark transition-colors font-medium"
                      >
                        <i className="fas fa-external-link-alt mr-1"></i> View Demo
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HackTrackModal isOpen={isHackTrackModalOpen} onClose={closeHackTrackModal} />
      <ProjectDemoModal 
        isOpen={isProjectDemoModalOpen} 
        onClose={closeProjectDemoModal}
        title={currentProject.title}
        description={currentProject.description}
        type={currentProject.type}
      />
    </>
  );
}

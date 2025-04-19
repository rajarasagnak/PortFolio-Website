interface ProjectDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  type: string;
}

export default function ProjectDemoModal({ isOpen, onClose, title, description, type }: ProjectDemoModalProps) {
  if (!isOpen) return null;

  // Define project demo URLs
  const projectUrls = {
    netflix: "https://rajarasagnak.github.io/NetFlixClone/",
    calculator: "https://rajarasagnak.github.io/SimpleCalculator/",
    approval: "https://rajarasagnak.github.io/ProjectApproalSystem/"
  };

  const renderDemoContent = () => {
    switch (type) {
      case 'netflix':
        return (
          <div className="mt-4 bg-neutral-light p-4 rounded-lg">
            <div className="text-center mb-4">
              <i className="fas fa-film text-6xl text-red-600"></i>
            </div>
            <h4 className="text-lg font-semibold mb-2">Netflix Clone Features:</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Responsive design mimicking Netflix interface</li>
              <li>Movie and TV show thumbnails with hover effects</li>
              <li>Category sections (Trending Now, Popular, etc.)</li>
              <li>Simple navigation system</li>
            </ul>
            <div className="mt-6 flex justify-center">
              <a 
                href={projectUrls.netflix} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md transition duration-300 inline-flex items-center"
              >
                <i className="fas fa-external-link-alt mr-2"></i> Visit Live Demo
              </a>
            </div>
          </div>
        );
      case 'calculator':
        return (
          <div className="mt-4 bg-neutral-light p-4 rounded-lg">
            <div className="text-center mb-4">
              <i className="fas fa-calculator text-6xl text-green-500"></i>
            </div>
            <h4 className="text-lg font-semibold mb-2">Calculator Features:</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Basic mathematical operations</li>
              <li>Responsive design with beautiful UI</li>
              <li>Clear and delete functionality</li>
              <li>Memory functions</li>
            </ul>
            <div className="mt-6 flex justify-center">
              <a 
                href={projectUrls.calculator} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md transition duration-300 inline-flex items-center"
              >
                <i className="fas fa-external-link-alt mr-2"></i> Visit Live Demo
              </a>
            </div>
          </div>
        );
      case 'approval':
        return (
          <div className="mt-4 bg-neutral-light p-4 rounded-lg">
            <div className="text-center mb-4">
              <i className="fas fa-tasks text-6xl text-yellow-500"></i>
            </div>
            <h4 className="text-lg font-semibold mb-2">Project Approval System Features:</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Multi-level approval workflows</li>
              <li>Dashboard for tracking project status</li>
              <li>Notification system for updates</li>
              <li>User role management</li>
            </ul>
            <div className="mt-6 flex justify-center">
              <a 
                href={projectUrls.approval} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-md transition duration-300 inline-flex items-center"
              >
                <i className="fas fa-external-link-alt mr-2"></i> Visit Live Demo
              </a>
            </div>
          </div>
        );
      default:
        return (
          <div className="mt-4 bg-neutral-light p-4 rounded-lg text-center">
            <p>No preview available for this project.</p>
          </div>
        );
    }
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-all duration-300`}>
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <div className="bg-white w-11/12 md:max-w-md mx-auto rounded-lg shadow-lg z-50 overflow-y-auto">
        <div className="py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold text-primary">{title}</p>
            <button onClick={onClose} className="cursor-pointer z-50">
              <i className="fas fa-times text-gray-500 hover:text-gray-800"></i>
            </button>
          </div>
          <div className="mt-4">
            <p className="text-gray-600 mb-4">{description}</p>
            {renderDemoContent()}
          </div>
          <div className="mt-6 flex justify-end">
            <button onClick={onClose} className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition duration-300">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
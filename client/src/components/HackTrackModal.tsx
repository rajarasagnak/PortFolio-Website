interface HackTrackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HackTrackModal({ isOpen, onClose }: HackTrackModalProps) {
  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-all duration-300`}>
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <div className="bg-white w-11/12 md:max-w-md mx-auto rounded-lg shadow-lg z-50 overflow-y-auto">
        <div className="py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold text-primary">Hack Track Website</p>
            <button onClick={onClose} className="cursor-pointer z-50">
              <i className="fas fa-times text-gray-500 hover:text-gray-800"></i>
            </button>
          </div>
          <div className="mt-4">
            <p className="text-gray-600 mb-4">The Hack Track Website is currently under development. This platform will help students track events and hackathons happening across different colleges.</p>
            <p className="text-gray-600 mb-4">Technologies being used:</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-100 text-primary-dark px-3 py-1 rounded-full">HTML</span>
              <span className="bg-blue-100 text-primary-dark px-3 py-1 rounded-full">CSS</span>
              <span className="bg-blue-100 text-primary-dark px-3 py-1 rounded-full">JavaScript</span>
              <span className="bg-blue-100 text-primary-dark px-3 py-1 rounded-full">MySQL</span>
              <span className="bg-blue-100 text-primary-dark px-3 py-1 rounded-full">Node.js</span>
            </div>
            <p className="text-gray-600 italic">Check back soon for updates!</p>
          </div>
          <div className="mt-6 flex justify-end">
            <button onClick={onClose} className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md transition duration-300">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

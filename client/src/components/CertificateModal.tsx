interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  image: string;
}

export default function CertificateModal({ isOpen, onClose, title, image }: CertificateModalProps) {
  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-all duration-300`}>
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <div className="bg-white w-11/12 md:max-w-2xl mx-auto rounded-lg shadow-lg z-50 overflow-y-auto">
        <div className="py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold text-primary">{title}</p>
            <button onClick={onClose} className="cursor-pointer z-50">
              <i className="fas fa-times text-gray-500 hover:text-gray-800"></i>
            </button>
          </div>
          <div className="mt-4">
            <div className="border border-gray-200 rounded-lg p-4 min-h-64 flex items-center justify-center">
              <div className="w-full text-center">
                <p className="text-gray-600 mb-4">Certificate Preview</p>
                <p className="text-sm text-gray-500">
                  Due to PDF rendering limitations, the certificate cannot be displayed directly. 
                  The actual certificate would be displayed here in a real implementation.
                </p>
                <div className="mt-4">
                  <i className="fas fa-certificate text-6xl text-primary-light"></i>
                </div>
              </div>
            </div>
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

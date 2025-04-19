import { useState } from "react";
import CertificateModal from "./CertificateModal";

// Import certificate assets
import javaFundamentalInfosys from "@assets/javaFundatmentalInfosys.pdf";
import introCybersecurity from "@assets/Introduction_to_Cybersecurity_certificate_rajarasagnak-gmail-com_ea4b7468-8ab4-4e22-800d-0cb30b0ea7d1.pdf";
import linuxEssentials from "@assets/Linux_Essentials_certificate_rajarasagnak-gmail-com_4baef7fe-5996-40a0-954a-0f8415be91e9.pdf";
import pythonEssentials from "@assets/Partner-_PCAP_-_Programming_Essentials_in_Python_certificate_rajarasagnak-gmail-com_f18003a3-7384-48f2-bb47-0d86a8df64a5.pdf";
import cEssentials from "@assets/Partner-_CLA_-_Programming_Essentials_in_C_certificate_rajarasagnak-gmail-com_d1b2e999-49ef-4f48-ab4f-a1abc8e79b7c.pdf";

export default function Certificates() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCertificate, setCurrentCertificate] = useState({
    title: "",
    image: ""
  });

  const certificates = [
    {
      title: "UI PATH",
      subtitle: "Academy Automation Explore Training",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/UiPath_Logo.png",
      type: "uipath",
      verifyUrl: "https://credentials.uipath.com/66ffcb60-50f4-4bd6-adc4-1d068cbe10d6#acc.2g3RIBAE"
    },
    {
      title: "INFOSYS SPRINGBOARD",
      subtitle: "Java Programming Fundamentals",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
      type: "java",
      image: javaFundamentalInfosys
    },
    {
      title: "CISCO NETWORK ACADEMY",
      subtitle: "Introduction to Cyber Security",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png",
      type: "cyber",
      image: introCybersecurity
    },
    {
      title: "CISCO NETWORK ACADEMY",
      subtitle: "Linux Essentials",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png",
      type: "linux",
      image: linuxEssentials
    },
    {
      title: "CISCO NETWORK ACADEMY",
      subtitle: "Programming Essentials in Python",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png",
      type: "python",
      image: pythonEssentials
    },
    {
      title: "CISCO NETWORK ACADEMY",
      subtitle: "Programming Essentials in C",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png",
      type: "c",
      image: cEssentials
    }
  ];

  const openCertificateModal = (certificate: any) => {
    setCurrentCertificate({
      title: `${certificate.title} - ${certificate.subtitle}`,
      image: certificate.image
    });
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeCertificateModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <section id="certificates" className="py-16 bg-white section-animate">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Certificates</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {certificates.map((certificate, index) => (
              <div key={index} className="certificate-card">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-primary">{certificate.title}</h3>
                      <p className="text-gray-600">{certificate.subtitle}</p>
                    </div>
                    <img 
                      src={certificate.logo} 
                      alt={`${certificate.title} Logo`} 
                      className="h-12 w-auto" 
                    />
                  </div>
                  <div className="mt-4 flex justify-end">
                    {certificate.verifyUrl ? (
                      <a 
                        href={certificate.verifyUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary-dark transition-colors font-medium"
                      >
                        <i className="fas fa-external-link-alt mr-1"></i> Verify Certificate
                      </a>
                    ) : (
                      <button 
                        onClick={() => openCertificateModal(certificate)} 
                        className="text-primary hover:text-primary-dark transition-colors font-medium"
                      >
                        <i className="fas fa-eye mr-1"></i> View Certificate
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CertificateModal 
        isOpen={isModalOpen}
        onClose={closeCertificateModal}
        title={currentCertificate.title}
        image={currentCertificate.image}
      />
    </>
  );
}

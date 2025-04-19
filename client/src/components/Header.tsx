import { useState, useEffect } from "react";
import { Link } from "wouter";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Function to close mobile menu (for when a link is clicked)
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Function to download resume
  const downloadResume = () => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    // Set the href to the resume PDF location
    link.href = `/resume-rasagna-kattukolu.pdf`; // This would be the actual path to the resume
    // Give the file a name
    link.download = 'Rasagna_Kattukolu_Resume.pdf';
    // Append to the body
    document.body.appendChild(link);
    // Trigger the download
    link.click();
    // Remove the element
    document.body.removeChild(link);

    // Alternative functionality (alert)
    alert('Resume download functionality would be implemented here.');
  };

  // Handle scroll to detect active section and header background
  useEffect(() => {
    const handleScroll = () => {
      // Change header background on scroll
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Find active section by checking which section is in the viewport
      const sections = [
        "hero", "about", "education", "skills", "projects", "certificates", "experience", "contact"
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // The element is considered in view if it's top is in the first 40% of the viewport
          if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= 0) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className={`text-2xl font-semibold ${scrolled ? 'text-primary' : 'text-white'}`}>
          Rasagna K.
        </a>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleMobileMenu} 
          className={`lg:hidden focus:outline-none ${scrolled ? 'text-neutral-dark' : 'text-white'}`}
        >
          <i className="fas fa-bars text-xl"></i>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <a href="#about" className={`nav-link ${scrolled ? 'text-neutral-dark' : 'text-white'} ${activeSection === 'about' ? 'active' : ''}`}>About</a>
          <a href="#education" className={`nav-link ${scrolled ? 'text-neutral-dark' : 'text-white'} ${activeSection === 'education' ? 'active' : ''}`}>Education</a>
          <a href="#skills" className={`nav-link ${scrolled ? 'text-neutral-dark' : 'text-white'} ${activeSection === 'skills' ? 'active' : ''}`}>Skills</a>
          <a href="#projects" className={`nav-link ${scrolled ? 'text-neutral-dark' : 'text-white'} ${activeSection === 'projects' ? 'active' : ''}`}>Projects</a>
          <a href="#certificates" className={`nav-link ${scrolled ? 'text-neutral-dark' : 'text-white'} ${activeSection === 'certificates' ? 'active' : ''}`}>Certificates</a>
          <a href="#contact" className={`nav-link ${scrolled ? 'text-neutral-dark' : 'text-white'} ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a>
          <button 
            onClick={downloadResume} 
            className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md transition duration-300 flex items-center"
          >
            <i className="fas fa-download mr-2"></i> Resume
          </button>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      <nav className={`bg-white w-full shadow-md py-4 lg:hidden transition-all duration-300 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <a href="#about" onClick={closeMobileMenu} className="block py-2 text-neutral-dark hover:text-primary transition-colors">About</a>
          <a href="#education" onClick={closeMobileMenu} className="block py-2 text-neutral-dark hover:text-primary transition-colors">Education</a>
          <a href="#skills" onClick={closeMobileMenu} className="block py-2 text-neutral-dark hover:text-primary transition-colors">Skills</a>
          <a href="#projects" onClick={closeMobileMenu} className="block py-2 text-neutral-dark hover:text-primary transition-colors">Projects</a>
          <a href="#certificates" onClick={closeMobileMenu} className="block py-2 text-neutral-dark hover:text-primary transition-colors">Certificates</a>
          <a href="#contact" onClick={closeMobileMenu} className="block py-2 text-neutral-dark hover:text-primary transition-colors">Contact</a>
          <button 
            onClick={() => {
              downloadResume();
              closeMobileMenu();
            }} 
            className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md transition duration-300 flex items-center"
          >
            <i className="fas fa-download mr-2"></i> Download Resume
          </button>
        </div>
      </nav>
    </header>
  );
}

export default function Footer() {
  return (
    <footer className="bg-neutral-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Rasagna Kattukolu</h2>
            <p className="text-gray-400">B.Tech Computer Science Student | Web Developer</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://linkedin.com/in/kattukolu-rasagna-96a4532a4" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full transition duration-300"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a 
              href="https://github.com/rajarasagnak" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full transition duration-300"
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              href="mailto:rajarasagnak@gmail.com" 
              className="bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full transition duration-300"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a 
              href="tel:+919346952190" 
              className="bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full transition duration-300"
            >
              <i className="fas fa-phone"></i>
            </a>
          </div>
        </div>
        
        <hr className="border-gray-700 my-8" />
        
        <div className="text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Rasagna Kattukolu. All rights reserved.</p>
          <p className="mt-2">Made with <i className="fas fa-heart text-red-500"></i> and passion for web development</p>
        </div>
      </div>
    </footer>
  );
}

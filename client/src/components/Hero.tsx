export default function Hero() {
  return (
    <section id="hero" className="pt-28 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-primary to-primary-dark text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Kattukolu Siva Naga Raja Rasagna</h1>
            <p className="text-xl mb-8 text-blue-100">B.Tech Computer Science Student | Web Developer</p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a href="https://linkedin.com/in/kattukolu-rasagna-96a4532a4" target="_blank" rel="noopener noreferrer" className="bg-white text-primary hover:bg-blue-100 transition duration-300 py-2 px-4 rounded-md flex items-center">
                <i className="fab fa-linkedin mr-2"></i> LinkedIn
              </a>
              <a href="https://github.com/rajarasagnak" target="_blank" rel="noopener noreferrer" className="bg-white text-primary hover:bg-blue-100 transition duration-300 py-2 px-4 rounded-md flex items-center">
                <i className="fab fa-github mr-2"></i> GitHub
              </a>
              <a href="https://leetcode.com/u/rajarasagnak/" target="_blank" rel="noopener noreferrer" className="bg-white text-primary hover:bg-blue-100 transition duration-300 py-2 px-4 rounded-md flex items-center">
                <i className="fas fa-code mr-2"></i> LeetCode
              </a>
              <a href="https://www.geeksforgeeks.org/user/rajarasagnak/" target="_blank" rel="noopener noreferrer" className="bg-white text-primary hover:bg-blue-100 transition duration-300 py-2 px-4 rounded-md flex items-center">
                <i className="fas fa-laptop-code mr-2"></i> GeeksforGeeks
              </a>
            </div>
            <a href="#contact" className="inline-block bg-secondary hover:bg-secondary-dark text-white px-6 py-3 rounded-md transition duration-300">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

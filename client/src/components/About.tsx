export default function About() {
  return (
    <section id="about" className="py-16 bg-white section-animate">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="max-w-3xl mx-auto text-lg">
          <p className="mb-6">
            I am Kattukolu Rasagna, a computer science student at Velagapudi Ramakrishna Siddhartha
            Engineering College with a strong foundation in algorithms, data structures, and programming.
            Passionate about learning and applying new technologies to solve real-world problems.
          </p>
          <p>
            Looking for opportunities to enhance skills and contribute to innovative projects.
            I am proficient in multiple programming languages and actively developing my skills in
            web development and other areas of computer science.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center mt-10 gap-6">
          <div className="bg-blue-50 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <i className="fas fa-user-graduate text-primary mr-2"></i> Education
            </h3>
            <p>B.Tech in Computer Science (2023-2027)</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <i className="fas fa-laptop-code text-primary mr-2"></i> Focus Areas
            </h3>
            <p>Web Development, Algorithms, Problem Solving</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <i className="fas fa-language text-primary mr-2"></i> Languages
            </h3>
            <p>English, Hindi, Telugu</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "fas fa-code",
      skills: ["Java", "C", "Python"]
    },
    {
      title: "Scripting Languages",
      icon: "fas fa-file-code",
      skills: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "Developer Tools",
      icon: "fas fa-tools",
      skills: ["VS Code", "IDLE", "Google AI Studio"]
    },
    {
      title: "Technical Skills",
      icon: "fas fa-laptop",
      skills: ["Generative AI", "Data Structures", "Algorithms", "Automation", "Operating Systems", "Software Engineering"]
    },
    {
      title: "Database Management",
      icon: "fas fa-database",
      skills: ["SQLPlus", "MySQL"]
    },
    {
      title: "Other Skills",
      icon: "fas fa-star",
      skills: ["Public Speaking", "Leadership", "Volunteering", "Problem Solving"]
    },
  ];

  return (
    <section id="skills" className="py-16 bg-white section-animate">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
        
        {/* Technologies & Tools Section */}
        <div className="mb-16 max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center text-primary">
            <i className="fas fa-laptop-code mr-2"></i> Technologies & Tools
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-8">

            {/* Add other tool logos as needed */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center text-blue-600 mb-2">
                <i className="fab fa-python text-5xl"></i>
              </div>
              <span className="text-sm font-medium">Python</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center text-orange-600 mb-2">
                <i className="fab fa-java text-5xl"></i>
              </div>
              <span className="text-sm font-medium">Java</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center text-yellow-500 mb-2">
                <i className="fab fa-js text-5xl"></i>
              </div>
              <span className="text-sm font-medium">JavaScript</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center text-blue-500 mb-2">
                <i className="fab fa-css3-alt text-5xl"></i>
              </div>
              <span className="text-sm font-medium">CSS</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center text-orange-500 mb-2">
                <i className="fab fa-html5 text-5xl"></i>
              </div>
              <span className="text-sm font-medium">HTML</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center text-blue-700 mb-2">
                <i className="fab fa-github text-5xl"></i>
              </div>
              <span className="text-sm font-medium">GitHub</span>
            </div>
          </div>
        </div>
        
        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-blue-50 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-primary flex items-center">
                <i className={`${category.icon} mr-2`}></i> {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
      skills: ["VS Code", "IDLE", "Google AI Studio", "UI Path Studio"]
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

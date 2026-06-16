function Skills() {
  const skills = [
    "React",
    "Node.js",
    "JavaScript",
    "Java",
    "Python",
    "SQL Server",
    "Git",
    "HTML",
    "CSS"
  ];

  return (
    <section id="skills">
      <h2>Tecnologías</h2>

      <div className="skills-grid">
        {skills.map(skill => (
          <div key={skill}>{skill}</div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
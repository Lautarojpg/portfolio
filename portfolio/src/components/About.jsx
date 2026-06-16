function About() {
  return (
    <section id="about">
      <h2>Sobre mí</h2>

      <div className="about-container">
        <div className="about-text">
          <p>
            Soy estudiante de Ingeniería en Sistemas con interés en el
            desarrollo de software, inteligencia artificial y desarrollo web.
          </p>

          <p>
            Actualmente trabajo con tecnologías como React, Node.js,
            Java, Python y bases de datos SQL, desarrollando proyectos
            académicos y personales para fortalecer mis habilidades.
          </p>

          <p>
            Me gusta construir aplicaciones completas, desde el diseño
            de interfaces hasta la implementación de APIs y bases de datos.
          </p>
        </div>

        <div className="about-stats">
          <div className="stat-card">
            <h3>3+</h3>
            <p>Proyectos principales</p>
          </div>

          <div className="stat-card">
            <h3>4+</h3>
            <p>Tecnologías dominadas</p>
          </div>

          <div className="stat-card">
            <h3>202X</h3>
            <p>Inicio de carrera</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
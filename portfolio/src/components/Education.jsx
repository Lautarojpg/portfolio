function Education() {
  return (
    <section id="education">
      <h2>Educación</h2>

      <div className="timeline">

        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="timeline-content">
            <h3>Ingeniería en Sistemas de Información</h3>

            <span>
              Universidad Tecnológica Nacional
            </span>

            <p>
              Formación en programación, ingeniería de software,
              bases de datos, redes y gestión de proyectos.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="timeline-content">
            <h3>Desarrollo Web</h3>

            <span>
              React • Node.js • SQL Server
            </span>

            <p>
              Desarrollo de aplicaciones web full stack y APIs REST.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="timeline-content">
            <h3>Programación</h3>

            <span>
              Java • Python • JavaScript
            </span>

            <p>
              Desarrollo de proyectos académicos y personales
              orientados a la resolución de problemas.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Education;
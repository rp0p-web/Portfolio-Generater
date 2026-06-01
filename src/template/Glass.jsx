import "./Glass.css";

function Glass({ data }) {

  const {
    personal,
    education,
    skills,
    projects,
    certificates,
    resume
  } = data;



  // GROUP SKILLS
  const skillsByCategory =
  skills.reduce((acc, skill) => {

    const cat =
    skill.category || "General";

    if (!acc[cat]) {

      acc[cat] = [];
    }

    acc[cat].push(skill);

    return acc;

  }, {});



  // AVATAR INITIALS
  const initials =
  personal?.fullName
    ? personal.fullName
        .split(" ")
        .map((w) => w[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "??";



  // LEVEL WIDTH
  const levelWidth = {

    Beginner: "25%",

    Intermediate: "55%",

    Advanced: "80%",

    Expert: "100%"
  };



  return (

    <div className="glass-page">



      {/* BACKGROUND */}

      <div className="glass-bg-1" />
      <div className="glass-bg-2" />



      {/* HERO */}

      <header className="glass-hero">

        <div className="glass-hero-card">



          {/* AVATAR */}

          <div className="glass-avatar">

            {
              personal?.profileImage ?

              (

                <img
                  src={personal.profileImage}
                  alt={personal.fullName}
                />

              )

              :

              (

                <span>
                  {initials}
                </span>
              )
            }

          </div>



          {/* NAME */}

          <h1 className="glass-name">

            {personal?.fullName}

          </h1>



          {/* BIO */}

          <p className="glass-bio">

            {personal?.bio}

          </p>



          {/* CONTACT */}

          <div className="glass-contact-row">

            {
              personal?.email && (

                <a
                  href={`mailto:${personal.email}`}
                  className="glass-pill"
                >
                  ✉ {personal.email}
                </a>
              )
            }



            {
              personal?.phone && (

                <div className="glass-pill">

                  ☎ {personal.phone}

                </div>
              )
            }



            {
              personal?.github && (

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-pill"
                >
                  GitHub ↗
                </a>
              )
            }



            {
              personal?.linkedin && (

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-pill"
                >
                  LinkedIn ↗
                </a>
              )
            }

          </div>



          {/* RESUME */}

          {
            resume?.resumeFile && (

              <a
                className="glass-btn"
                href={`http://localhost:8080/files/${resume.resumeFile}`}
                target="_blank"
                rel="noreferrer"
              >
                Download Resume
              </a>
            )
          }

        </div>

      </header>



      {/* MAIN */}

      <main className="glass-main">



        {/* EDUCATION */}

        {
          education?.length > 0 && (

            <section className="glass-section">

              <h2 className="glass-title">

                Education

              </h2>



              <div className="glass-grid">

                {
                  education.map((edu, i) => (

                    <div
                      className="glass-card"
                      key={i}
                    >

                      <div className="glass-card-glow" />



                      <h3>

                        {edu.collegeName}

                      </h3>



                      <p>

                        {edu.degree}

                      </p>



                      <p>

                        {edu.department}

                      </p>



                      <div className="glass-tag">

                        {edu.startYear}
                        -
                        {edu.endYear}

                      </div>



                      <div className="glass-cgpa">

                        CGPA :
                        {edu.cgpa}

                      </div>

                    </div>
                  ))
                }

              </div>

            </section>
          )
        }



        {/* SKILLS */}

        {
          skills?.length > 0 && (

            <section className="glass-section">

              <h2 className="glass-title">

                Skills

              </h2>



              <div className="glass-skills-wrap">

                {
                  Object.entries(skillsByCategory)
                  .map(([cat, catSkills]) => (

                    <div
                      className="glass-skill-group"
                      key={cat}
                    >

                      <h3 className="glass-skill-cat">

                        {cat}

                      </h3>



                      {
                        catSkills.map((skill, i) => (

                          <div
                            className="glass-skill-item"
                            key={i}
                          >

                            <div className="glass-skill-head">

                              <span>
                                {skill.skillName}
                              </span>

                              <span>
                                {skill.skillLevel}
                              </span>

                            </div>



                            <div className="glass-bar-track">

                              <div
                                className="glass-bar-fill"

                                style={{
                                  width:
                                  levelWidth[
                                  skill.skillLevel
                                  ] || "50%"
                                }}
                              />

                            </div>

                          </div>
                        ))
                      }

                    </div>
                  ))
                }

              </div>

            </section>
          )
        }



        {/* PROJECTS */}

        {
          projects?.length > 0 && (

            <section className="glass-section">

              <h2 className="glass-title">

                Projects

              </h2>



              <div className="glass-grid">

                {
                  projects.map((proj, i) => (

                    <div
                      className="glass-project-card"
                      key={i}
                    >

                      {
                        proj.projectImage && (

                          <img
                            src={proj.projectImage}
                            alt={proj.projectName}
                            className="glass-project-img"
                          />
                        )
                      }



                      <div className="glass-project-body">

                        <h3>

                          {proj.projectName}

                        </h3>



                        <p>

                          {proj.description}

                        </p>



                        <div className="glass-project-links">

                          {
                            proj.githubLink && (

                              <a
                                href={proj.githubLink}
                                target="_blank"
                                rel="noreferrer"
                                className="glass-link"
                              >
                                GitHub ↗
                              </a>
                            )
                          }



                          {
                            proj.demoLink && (

                              <a
                                href={proj.demoLink}
                                target="_blank"
                                rel="noreferrer"
                                className="glass-link glass-link-accent"
                              >
                                Live Demo ↗
                              </a>
                            )
                          }

                        </div>

                      </div>

                    </div>
                  ))
                }

              </div>

            </section>
          )
        }



        {/* CERTIFICATES */}

        {
          certificates?.length > 0 && (

            <section className="glass-section">

              <h2 className="glass-title">

                Certificates

              </h2>



              <div className="glass-grid">

                {
                  certificates.map((cert, i) => (

                    <div
                      className="glass-card"
                      key={i}
                    >

                      <h3>

                        {cert.certificateName}

                      </h3>



                      <p>

                        {cert.organization}

                      </p>



                      <div className="glass-tag">

                        {cert.issueDate}

                      </div>



                      {
                        cert.certificateImage && (

                          <a
                            href={`http://localhost:8080/files/${cert.certificateImage}`}
                            target="_blank"
                            rel="noreferrer"
                            className="glass-btn-small"
                          >
                            View Certificate ↗
                          </a>
                        )
                      }

                    </div>
                  ))
                }

              </div>

            </section>
          )
        }

      </main>



      {/* FOOTER */}

      <footer className="glass-footer">

        <p>

          Designed &
          Developed by

          <strong>
            {" "}
            {personal?.fullName}
          </strong>

        </p>

      </footer>

    </div>
  );
}

export default Glass;
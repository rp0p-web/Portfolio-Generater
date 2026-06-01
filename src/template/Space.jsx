import "./Space.css";

function Space({ data }) {

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



  // SKILL LEVEL WIDTH
  const levelWidth = {

    Beginner: "25%",

    Intermediate: "55%",

    Advanced: "80%",

    Expert: "100%"
  };



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



  return (

    <div className="space-page">



      {/* STARS */}

      <div className="space-stars" />
      <div className="space-stars2" />
      <div className="space-nebula" />



      {/* HERO */}

      <header className="space-hero">



        {/* AVATAR */}

        <div className="space-avatar">

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

        <h1 className="space-name">

          {personal?.fullName}

        </h1>



        {/* BIO */}

        <p className="space-bio">

          {personal?.bio}

        </p>



        {/* CONTACT */}

        <div className="space-contact-row">

          {
            personal?.email && (

              <a
                href={`mailto:${personal.email}`}
                className="space-pill"
              >
                ✦ {personal.email}
              </a>
            )
          }



          {
            personal?.phone && (

              <div className="space-pill">

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
                className="space-pill"
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
                className="space-pill"
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
              className="space-btn"
              href={`http://localhost:8080/files/${resume.resumeFile}`}
              target="_blank"
              rel="noreferrer"
            >
              Download Resume
            </a>
          )
        }

      </header>



      {/* MAIN */}

      <main className="space-main">



        {/* EDUCATION */}

        {
          education?.length > 0 && (

            <section className="space-section">

              <div className="space-heading-wrap">

                <span className="space-line" />

                <h2 className="space-title">

                  Education

                </h2>

              </div>



              <div className="space-grid">

                {
                  education.map((edu, i) => (

                    <div
                      className="space-card"
                      key={i}
                    >

                      <div className="space-card-glow" />



                      <div className="space-year">

                        {edu.startYear}
                        -
                        {edu.endYear}

                      </div>



                      <h3>

                        {edu.collegeName}

                      </h3>



                      <p>

                        {edu.degree}

                      </p>



                      <p>

                        {edu.department}

                      </p>



                      <div className="space-cgpa">

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

            <section className="space-section">

              <div className="space-heading-wrap">

                <span className="space-line" />

                <h2 className="space-title">

                  Skills

                </h2>

              </div>



              <div className="space-skill-wrapper">

                {
                  Object.entries(skillsByCategory)
                  .map(([cat, catSkills]) => (

                    <div
                      className="space-skill-group"
                      key={cat}
                    >

                      <h3 className="space-skill-category">

                        {cat}

                      </h3>



                      {
                        catSkills.map((skill, i) => (

                          <div
                            className="space-skill-item"
                            key={i}
                          >

                            <div className="space-skill-top">

                              <span>
                                {skill.skillName}
                              </span>

                              <span>
                                {skill.skillLevel}
                              </span>

                            </div>



                            <div className="space-track">

                              <div
                                className="space-fill"

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

            <section className="space-section">

              <div className="space-heading-wrap">

                <span className="space-line" />

                <h2 className="space-title">

                  Projects

                </h2>

              </div>



              <div className="space-project-grid">

                {
                  projects.map((proj, i) => (

                    <div
                      className="space-project-card"
                      key={i}
                    >

                      {
                        proj.projectImage && (

                          <img
                            src={proj.projectImage}
                            alt={proj.projectName}
                            className="space-project-img"
                          />
                        )
                      }



                      <div className="space-project-body">

                        <span className="space-project-no">

                          0{i + 1}

                        </span>



                        <h3>

                          {proj.projectName}

                        </h3>



                        <p>

                          {proj.description}

                        </p>



                        <div className="space-project-links">

                          {
                            proj.githubLink && (

                              <a
                                href={proj.githubLink}
                                target="_blank"
                                rel="noreferrer"
                                className="space-link"
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
                                className="space-link space-link-accent"
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

            <section className="space-section">

              <div className="space-heading-wrap">

                <span className="space-line" />

                <h2 className="space-title">

                  Certificates

                </h2>

              </div>



              <div className="space-grid">

                {
                  certificates.map((cert, i) => (

                    <div
                      className="space-card"
                      key={i}
                    >

                      <div className="space-cert-icon">

                        ✦

                      </div>



                      <h3>

                        {cert.certificateName}

                      </h3>



                      <p>

                        {cert.organization}

                      </p>



                      <div className="space-year">

                        {cert.issueDate}

                      </div>



                      {
                        cert.certificateImage && (

                          <a
                            href={`http://localhost:8080/files/${cert.certificateImage}`}
                            target="_blank"
                            rel="noreferrer"
                            className="space-btn-small"
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

      <footer className="space-footer">

        <p>

          Crafted Across The Galaxy
          By

          <strong>
            {" "}
            {personal?.fullName}
          </strong>

        </p>

      </footer>

    </div>
  );
}

export default Space;
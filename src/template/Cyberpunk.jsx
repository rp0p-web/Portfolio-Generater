import "./cyberpunk.css";

function Cyberpunk({ data }) {
  const { personal, education, skills, projects, certificates, resume } = data;

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    const cat = skill.category || "Other";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(skill);
    return acc;
  }, {});

  // Skill level → bar width
  const levelWidth = { Beginner: "25%", Intermediate: "55%", Advanced: "80%", Expert: "100%" };

  // Initials for avatar fallback
  const initials = personal?.fullName
    ? personal.fullName.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase()
    : "??";

  return (
    <div className="cp-page">

      {/* ── BACKGROUND EFFECTS ───────────────────────────── */}
      <div className="cp-bg-grid" aria-hidden="true" />
      <div className="cp-bg-glow" aria-hidden="true" />

      {/* ── HERO ─────────────────────────────────────────── */}
      <header className="cp-hero">
        <div className="cp-hero-inner">

          {/* Avatar */}
          <div className="cp-avatar">
            {personal?.profileImage
              ? <img src={personal.profileImage} alt={personal.fullName} />
              : <span>{initials}</span>
            }
          </div>

          {/* Name + Bio */}
          <div className="cp-hero-text">
            <p className="cp-hero-label">Portfolio</p>
            <h1 className="cp-hero-name">{personal?.fullName || "Your Name"}</h1>
            {personal?.bio && (
              <p className="cp-hero-bio">{personal.bio}</p>
            )}

            {/* Contact pills */}
            <div className="cp-contact-row">
              {personal?.email && (
                <a className="cp-contact-pill" href={`mailto:${personal.email}`}>
                  <span className="cp-pill-icon">✉</span>
                  {personal.email}
                </a>
              )}
              {personal?.phone && (
                <span className="cp-contact-pill">
                  <span className="cp-pill-icon">☎</span>
                  {personal.phone}
                </span>
              )}
              {personal?.address && (
                <span className="cp-contact-pill">
                  <span className="cp-pill-icon">⌖</span>
                  {personal.address}
                </span>
              )}
              {personal?.github && (
                <a className="cp-contact-pill" href={personal.github} target="_blank" rel="noreferrer">
                  <span className="cp-pill-icon">⌥</span>
                  GitHub
                </a>
              )}
              {personal?.linkedin && (
                <a className="cp-contact-pill" href={personal.linkedin} target="_blank" rel="noreferrer">
                  <span className="cp-pill-icon">in</span>
                  LinkedIn
                </a>
              )}
            </div>

            {/* Resume download */}
            {resume?.resumeFile && (
              <a
                className="cp-btn-primary"
                href={`http://localhost:8080/files/${resume.resumeFile}`}
                target="_blank"
                rel="noreferrer"
              >
                Download Resume ↓
              </a>
            )}
          </div>
        </div>

        {/* Decorative scan line */}
        <div className="cp-scan-line" aria-hidden="true" />
      </header>

      {/* ── MAIN CONTENT ─────────────────────────────────── */}
      <main className="cp-main">

        {/* ── EDUCATION ──────────────────────────────────── */}
        {education?.length > 0 && (
          <section className="cp-section">
            <div className="cp-section-label">
              <span className="cp-label-line" />
              Education
            </div>
            <h2 className="cp-section-title">Academic Background</h2>

            <div className="cp-cards-grid">
              {education.map((edu, i) => (
                <div className="cp-card" key={i}>
                  <div className="cp-card-accent" />
                  <div className="cp-card-tag">
                    {edu.startYear} — {edu.endYear}
                  </div>
                  <h3 className="cp-card-title">{edu.collegeName}</h3>
                  <p className="cp-card-sub">
                    {edu.degree} · {edu.department}
                  </p>
                  {edu.cgpa && (
                    <div className="cp-cgpa-badge">
                      CGPA <strong>{edu.cgpa}</strong>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── SKILLS ─────────────────────────────────────── */}
        {skills?.length > 0 && (
          <section className="cp-section">
            <div className="cp-section-label">
              <span className="cp-label-line" />
              Skills
            </div>
            <h2 className="cp-section-title">Technical Expertise</h2>

            <div className="cp-skills-wrapper">
              {Object.entries(skillsByCategory).map(([cat, catSkills]) => (
                <div className="cp-skill-group" key={cat}>
                  <p className="cp-skill-cat-label">{cat}</p>
                  <div className="cp-skill-list">
                    {catSkills.map((skill, i) => (
                      <div className="cp-skill-item" key={i}>
                        <div className="cp-skill-header">
                          <span className="cp-skill-name">{skill.skillName}</span>
                          <span className="cp-skill-level">{skill.skillLevel}</span>
                        </div>
                        <div className="cp-skill-bar-track">
                          <div
                            className="cp-skill-bar-fill"
                            style={{ width: levelWidth[skill.skillLevel] || "50%" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── PROJECTS ───────────────────────────────────── */}
        {projects?.length > 0 && (
          <section className="cp-section">
            <div className="cp-section-label">
              <span className="cp-label-line" />
              Projects
            </div>
            <h2 className="cp-section-title">Selected Work</h2>

            <div className="cp-projects-grid">
              {projects.map((proj, i) => (
                <div className="cp-project-card" key={i}>
                  {proj.projectImage && (
                    <div className="cp-project-img-wrap">
                      <img src={proj.projectImage} alt={proj.projectName} className="cp-project-img" />
                    </div>
                  )}
                  <div className="cp-project-body">
                    <span className="cp-project-num">0{i + 1}</span>
                    <h3 className="cp-project-name">{proj.projectName}</h3>
                    {proj.description && (
                      <p className="cp-project-desc">{proj.description}</p>
                    )}
                    <div className="cp-project-links">
                      {proj.githubLink && (
                        <a className="cp-link-btn" href={proj.githubLink} target="_blank" rel="noreferrer">
                          GitHub ↗
                        </a>
                      )}
                      {proj.demoLink && (
                        <a className="cp-link-btn cp-link-btn--accent" href={proj.demoLink} target="_blank" rel="noreferrer">
                          Live Demo ↗
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── CERTIFICATES ───────────────────────────────── */}
        {certificates?.length > 0 && (
          <section className="cp-section">
            <div className="cp-section-label">
              <span className="cp-label-line" />
              Certificates
            </div>
            <h2 className="cp-section-title">Credentials</h2>

            <div className="cp-cert-grid">
              {certificates.map((cert, i) => (
                <div className="cp-cert-card" key={i}>
                  <div className="cp-cert-icon">✦</div>
                  <div className="cp-cert-info">
                    <h4 className="cp-cert-name">{cert.certificateName}</h4>
                    <p className="cp-cert-org">{cert.organization}</p>
                    {cert.issueDate && (
                      <span className="cp-cert-date">{cert.issueDate}</span>
                    )}
                  </div>
                  {cert.certificateImage && (
                    <a
                      className="cp-cert-view"
                      href={`http://localhost:8080/files/${cert.certificateImage}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View ↗
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

      </main>

      {/* ── FOOTER ───────────────────────────────────────── */}
      <footer className="cp-footer">
        <span>Built by <strong>{personal?.fullName || "You"}</strong></span>
        <span className="cp-footer-dot" />
        <span className="cp-footer-accent">Portfolio</span>
      </footer>

    </div>
  );
}

export default Cyberpunk;

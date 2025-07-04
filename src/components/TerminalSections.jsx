import React from "react";
import {
  GitHub,
  LinkedIn,
  Email,
  Launch,
  Description,
  Code,
  Storage,
  Web,
  School,
  Computer,
  Public,
  Rocket,
  SportsEsports,
  FitnessCenter,
  Cloud,
  Build,
  Star,
} from "@mui/icons-material";
import profilePic from "../images/profile-pic.jpg";

// ASCII art for terminal aesthetic
const asciiName = `
╔═══════════════════════════════════════════════════════════════╗
║  ____              _      _       _       _                   ║
║ |  _ \\  __ _ _ __ (_) ___| |     | | ___ | |__  _ __          ║
║ | | | |/ _\` | '_ \\| |/ _ \\ |  _  | |/ _ \\| '_ \\| '_ \\         ║
║ | |_| | (_| | | | | |  __/ | | |_| | (_) | | | | | | |        ║
║ |____/ \\__,_|_| |_|_|\\___|_|  \\___/ \\___/|_| |_|_| |_|        ║
║                                                               ║
║              Full Stack Developer | Cyprus                    ║
╚═══════════════════════════════════════════════════════════════╝`;

// Home Section
const HomeSection = ({ terminal }) => {
  const { typingText, isTyping, showCursor } = terminal;

  return (
    <div className="section home-section">
      <pre className="ascii-art">{asciiName}</pre>

      <div className="profile-container">
        <img
          src={profilePic}
          alt="Daniel John Almirante"
          className="profile-image"
        />
        <div className="profile-info">
          <h2 className="section-title">$ whoami</h2>
          <p className="typing-text">
            {typingText}
            {isTyping && (
              <span className={`cursor ${showCursor ? "visible" : ""}`}>█</span>
            )}
          </p>
        </div>
      </div>

      <div className="info-grid">
        <div className="info-card">
          <h3>$ cat status.txt</h3>
          <div className="info-list">
            <p>
              <span className="label">Status:</span>{" "}
              <span style={{ color: "#28ca42" }}>●</span> Available for work
            </p>
            <p>
              <span className="label">Location:</span>{" "}
              <span style={{ marginRight: "4px" }}>
                <Web sx={{ fontSize: "0.9rem" }} />
              </span>{" "}
              Nicosia, Cyprus
            </p>
            <p>
              <span className="label">Experience:</span> 2+ years
            </p>
            <p>
              <span className="label">Focus:</span> Full Stack Development
            </p>
          </div>
        </div>

        <div className="info-card">
          <h3>$ ls -la quick_links/</h3>
          <div className="links-list">
            <a
              href="https://github.com/danielpinoy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub sx={{ fontSize: "1rem", mr: 1 }} /> github.com/danielpinoy
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-john-almirante-b42782301/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn sx={{ fontSize: "1rem", mr: 1 }} /> LinkedIn Profile
            </a>
            <a href="mailto:almirante.danieljohn@gmail.com">
              <Email sx={{ fontSize: "1rem", mr: 1 }} /> Send Email
            </a>
            <a
              href="#"
              onClick={() => alert("Resume download would trigger here")}
            >
              <Description sx={{ fontSize: "1rem", mr: 1 }} /> Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// About Section
const AboutSection = () => (
  <div className="section about-section">
    <h1 className="section-title">$ cat about.md</h1>

    <div className="about-grid">
      <div className="about-image">
        <img src={profilePic} alt="Daniel John Almirante" />
        <div className="about-info">
          <h3>Daniel John Almirante</h3>
          <p>Full Stack Developer</p>
          <p className="location">Nicosia, Cyprus</p>
        </div>
      </div>

      <div className="about-content">
        <h2># About Me</h2>
        <p>
          I'm a passionate Full Stack Developer with 2+ years of experience
          building user-friendly and responsive web applications. I specialize
          in modern JavaScript frameworks and enjoy creating clean, efficient
          code that solves real-world problems.
        </p>

        <h3>## Background</h3>
        <ul>
          <li>
            <School sx={{ fontSize: "1rem", mr: 1, verticalAlign: "middle" }} />{" "}
            Studied Entertainment and Multimedia Computing
          </li>
          <li>
            <Computer
              sx={{ fontSize: "1rem", mr: 1, verticalAlign: "middle" }}
            />{" "}
            Self-taught developer with continuous learning mindset
          </li>
          <li>
            <Public sx={{ fontSize: "1rem", mr: 1, verticalAlign: "middle" }} />{" "}
            Based in Cyprus, open to remote opportunities
          </li>
          <li>
            <Rocket sx={{ fontSize: "1rem", mr: 1, verticalAlign: "middle" }} />{" "}
            Focused on React, Node.js, and cloud technologies
          </li>
        </ul>

        <h3>## Interests</h3>
        <div className="interests-grid">
          <div>
            <p>
              <SportsEsports
                sx={{ fontSize: "1rem", mr: 1, verticalAlign: "middle" }}
              />{" "}
              Video Games
            </p>
            <p>
              <FitnessCenter
                sx={{ fontSize: "1rem", mr: 1, verticalAlign: "middle" }}
              />{" "}
              Fitness & Gym
            </p>
          </div>
          <div>
            <p>
              <Cloud
                sx={{ fontSize: "1rem", mr: 1, verticalAlign: "middle" }}
              />{" "}
              Cloud Computing
            </p>
            <p>
              <Build
                sx={{ fontSize: "1rem", mr: 1, verticalAlign: "middle" }}
              />{" "}
              Open Source
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Skills Section
const SkillsSection = () => {
  const skills = [
    { name: "React", level: 90, color: "#61DAFB", icon: <Web /> },
    { name: "Node.js", level: 85, color: "#68A063", icon: <Code /> },
    { name: "JavaScript", level: 85, color: "#F7DF1E", icon: <Code /> },
    { name: "MongoDB", level: 75, color: "#4DB33D", icon: <Storage /> },
    { name: "Express", level: 85, color: "#ffffff", icon: <Code /> },
    { name: "TypeScript", level: 70, color: "#007ACC", icon: <Code /> },
    { name: "Angular", level: 75, color: "#DD0031", icon: <Web /> },
    { name: "Firebase", level: 80, color: "#FFCA28", icon: <Storage /> },
  ];

  const techStack = {
    frontend: ["React", "Angular", "HTML5", "CSS3", "JavaScript", "TypeScript"],
    backend: ["Node.js", "Express", "MongoDB", "Firebase"],
    tools: ["Git", "VS Code", "Postman", "Figma"],
    testing: ["Jest", "React Testing Library", "Puppeteer"],
  };

  return (
    <div className="section skills-section">
      <h1 className="section-title">$ ./skills --list --verbose</h1>

      <div className="skills-grid">
        <div className="skills-main">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-item">
              <div className="skill-header">
                <span className="skill-name">
                  <span style={{ color: skill.color, marginRight: "8px" }}>
                    {skill.icon}
                  </span>
                  {skill.name}
                </span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-fill"
                  style={{
                    width: `${skill.level}%`,
                    backgroundColor: skill.color,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="tech-stack">
          <h3>$ cat tech_stack.json</h3>
          <pre className="code-block">{JSON.stringify(techStack, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
};

// Projects Section - Fixed styling to match terminal theme
const ProjectsSection = ({ terminal }) => {
  const projects = [
    {
      name: "ChatBox",
      description: "Real-time messaging app with React Native and Firebase",
      tech: ["React Native", "Firebase", "Expo", "AsyncStorage"],
      status: "deployed",
      lastCommit: "2 days ago",
      github: "https://github.com/danielpinoy/ChatRoom",
      stars: 12,
    },
    {
      name: "MeetApp",
      description:
        "Serverless PWA for event management with Google Calendar API",
      tech: ["React", "TDD", "Google API", "Recharts"],
      status: "deployed",
      lastCommit: "1 week ago",
      github: "https://github.com/danielpinoy/meet",
      stars: 8,
    },
    {
      name: "RetroFlix",
      description: "Historical movies web application with user authentication",
      tech: ["React", "Redux", "MongoDB", "JWT"],
      status: "deployed",
      lastCommit: "3 days ago",
      github: "https://github.com/danielpinoy/historic-movies-client",
      demo: "https://kaleidoscopic-tiramisu-9e52da.netlify.app/login",
      stars: 15,
      hasCaseStudy: true,
    },
    {
      name: "MyFlix",
      description: "Angular movie database with Material UI design",
      tech: ["Angular", "Material UI", "TypeScript", "RxJS"],
      status: "deployed",
      lastCommit: "5 days ago",
      github: "https://github.com/danielpinoy/myFlixClient",
      stars: 6,
    },
  ];

  return (
    <div className="section projects-section">
      <h1 className="section-title">$ git log --oneline --graph</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "2rem",
          marginTop: "2rem",
        }}
      >
        {projects.map((project) => (
          <div
            key={project.name}
            style={{
              backgroundColor: "#1a1a1a",
              border: "1px solid #333",
              borderRadius: "8px",
              padding: "1.5rem",
              transition: "all 0.3s ease",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              minHeight: "350px",
            }}
            className="project-card-hover"
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "1rem",
              }}
            >
              <h3
                style={{
                  color: "#fbbf24",
                  margin: 0,
                  fontSize: "1.3rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <Code sx={{ fontSize: "1.2rem" }} />
                {project.name}
              </h3>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.25rem",
                  alignItems: "flex-end",
                }}
              >
                <span
                  style={{
                    fontSize: "0.8rem",
                    padding: "0.2rem 0.6rem",
                    borderRadius: "12px",
                    fontWeight: 600,
                    backgroundColor: "rgba(40, 202, 66, 0.2)",
                    color: "#28ca42",
                  }}
                >
                  {project.status}
                </span>
                <span
                  style={{
                    color: "#fbbf24",
                    fontSize: "0.8rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem",
                  }}
                >
                  {/* <Star sx={{ fontSize: "0.9rem" }} />
                  {project.stars} */}
                </span>
              </div>
            </div>

            {/* Description */}
            <p
              style={{
                color: "#00ff41",
                marginBottom: "1rem",
                lineHeight: 1.6,
                fontSize: "0.95rem",
                flexGrow: 1,
              }}
            >
              {project.description}
            </p>

            {/* Tech Tags */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                marginBottom: "1rem",
              }}
            >
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  style={{
                    backgroundColor: "rgba(6, 182, 212, 0.2)",
                    color: "#06b6d4",
                    padding: "0.2rem 0.6rem",
                    borderRadius: "4px",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Last Commit */}
            <p
              style={{
                color: "#666",
                fontSize: "0.8rem",
                marginBottom: "1.5rem",
                margin: "0 0 1.5rem 0",
              }}
            >
              Last commit: {project.lastCommit}
            </p>

            {/* Actions */}
            <div
              style={{
                display: "flex",
                gap: "0.75rem",
                flexWrap: "wrap",
                marginTop: "auto",
              }}
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "0.5rem 1rem",
                  border: "1px solid #00ff41",
                  borderRadius: "4px",
                  backgroundColor: "transparent",
                  color: "#00ff41",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  transition: "all 0.3s ease",
                  fontFamily: "inherit",
                }}
                className="btn-hover-primary"
              >
                <GitHub sx={{ fontSize: "1rem" }} />
                GitHub
              </a>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "0.5rem 1rem",
                    border: "1px solid #06b6d4",
                    borderRadius: "4px",
                    backgroundColor: "transparent",
                    color: "#06b6d4",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    transition: "all 0.3s ease",
                    fontFamily: "inherit",
                  }}
                  className="btn-hover-secondary"
                >
                  <Launch sx={{ fontSize: "1rem" }} />
                  Live Demo
                </a>
              )}

              {project.hasCaseStudy && (
                <button
                  style={{
                    padding: "0.5rem 1rem",
                    border: "1px solid #fbbf24",
                    borderRadius: "4px",
                    backgroundColor: "transparent",
                    color: "#fbbf24",
                    fontSize: "0.9rem",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    fontFamily: "inherit",
                  }}
                  onClick={() => terminal.setShowCaseStudy(true)}
                  className="btn-hover-accent"
                >
                  <Description sx={{ fontSize: "1rem" }} />
                  Case Study
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .project-card-hover:hover {
          transform: translateY(-8px);
          border-color: #00ff41 !important;
          box-shadow: 0 12px 30px rgba(0, 255, 65, 0.2);
        }

        .btn-hover-primary:hover {
          background-color: rgba(0, 255, 65, 0.1) !important;
        }

        .btn-hover-secondary:hover {
          background-color: rgba(6, 182, 212, 0.1) !important;
        }

        .btn-hover-accent:hover {
          background-color: rgba(251, 191, 36, 0.1) !important;
        }

        @media (max-width: 768px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }

          div[style*="flex-wrap"] {
            flex-direction: column;
          }

          div[style*="flex-wrap"] a,
          div[style*="flex-wrap"] button {
            text-align: center;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};
// Contact Section
const ContactSection = () => (
  <div className="section contact-section">
    <h1 className="section-title">$ cat contact.info</h1>

    <div className="contact-grid">
      <div className="contact-main">
        <h2>Get In Touch</h2>

        <div className="contact-methods">
          <div className="contact-item">
            <div className="contact-icon">
              <Email sx={{ fontSize: "1.5rem" }} />
            </div>
            <div>
              <h3>Email</h3>
              <a href="mailto:almirante.danieljohn@gmail.com">
                almirante.danieljohn@gmail.com
              </a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <LinkedIn sx={{ fontSize: "1.5rem" }} />
            </div>
            <div>
              <h3>LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/daniel-john-almirante-b42782301/"
                target="_blank"
                rel="noopener noreferrer"
              >
                /in/daniel-john-almirante
              </a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <GitHub sx={{ fontSize: "1.5rem" }} />
            </div>
            <div>
              <h3>GitHub</h3>
              <a
                href="https://github.com/danielpinoy"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/danielpinoy
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-sidebar">
        <div className="status-card">
          <h3>$ ping status</h3>
          <div className="ping-results">
            <p>PING danieljohn.dev (127.0.0.1)</p>
            <p>64 bytes: time=0.1ms</p>
            <div className="availability">
              <p>● Available for new opportunities</p>
              <p>● Open to remote work</p>
              <p>● Ready to collaborate</p>
            </div>
          </div>
        </div>

        <div className="timezone-card">
          <h3>$ uptime</h3>
          <p>Currently based in Cyprus (GMT+2)</p>
          <p>Available for calls between 9 AM - 6 PM</p>
        </div>
      </div>
    </div>
  </div>
);

// Main Sections Component
const TerminalSections = ({ currentSection, terminal }) => {
  const sections = [
    <HomeSection key="home" terminal={terminal} />,
    <AboutSection key="about" />,
    <SkillsSection key="skills" />,
    <ProjectsSection key="projects" terminal={terminal} />,
    <ContactSection key="contact" />,
  ];

  return <div className="terminal-sections">{sections[currentSection]}</div>;
};

export default TerminalSections;

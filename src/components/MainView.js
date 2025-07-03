import React, { useState, useEffect } from "react";
import useInViewOnce from "../hooks/useInViewOnce.js";
import images from "../utils/importImages.js";
import { useNavigate } from "react-router-dom";
import { projects } from "../utils/projects.js";
import danielCV from "../images/Daniel-John-Almirante.pdf";
import { caseStudyImages } from "../utils/projects.js";
import "./MainView_Style.css";
//import "./MainView_Style.min.css";

const MainView = () => {
  const [profileRef, profileView] = useInViewOnce();
  const [aboutRef, aboutView] = useInViewOnce();
  const [experienceRef, experienceView] = useInViewOnce();
  const [projectRef, projectView] = useInViewOnce();
  const [contactRef, contactView] = useInViewOnce();

  // Projects refs
  const [project01Ref, project01View] = useInViewOnce();
  const [project02Ref, project02View] = useInViewOnce();
  const [project03Ref, project03View] = useInViewOnce();

  const navigate = useNavigate();

  const handleViewProject = (project) => {
    navigate(`/project/${project.id}`, { state: { project } });
  };

  // Preload images when the component mounts
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    let loadedCount = 0;
    caseStudyImages.forEach((image) => {
      const img = new Image();
      img.src = image;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === caseStudyImages.length) {
          setImagesLoaded(true);
        }
      };
    });
  }, []);

  return (
    <div>
      <body className="modern-portfolio">
        <div id="projectContainer"></div>

        <nav id="desktop-nav">
          <div className="nav-brand">
            <h1 className="logo">Daniel John Almirante</h1>
            <span className="tagline">Full Stack Developer</span>
          </div>
          <div>
            <ul className="nav-links">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Profile Section */}
        <section
          id="profile"
          ref={profileRef}
          className={`hidden ${profileView ? "show" : ""}`}
        >
          <div className="section__pic-container">
            <div className="image-backdrop"></div>
            <img
              className="profile-img"
              src={images["profile-pic.jpg"]}
              alt="Daniel John profile pic"
            />
          </div>
          <div className="section__text">
            <p className="section__text__p1">Hello I'm</p>
            <h1 className="title name">Daniel John Almirante</h1>
            <p className="section__text__p2">Fullstack Developer</p>
            <div className="skill-tags">
              <span className="skill-tag">React</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Express</span>
              <span className="skill-tag">MongoDB</span>
            </div>
            <div className="btn-container">
              <a href={danielCV} download="DanielJohnAlmirante-cv-file.pdf">
                <button className="btn btn-color-2">Download CV</button>
              </a>
              <a href="#contact">
                <button className="btn btn-color-1">Contact Me</button>
              </a>
            </div>

            <div id="socials-container">
              <a
                className="social-link"
                href="https://www.linkedin.com/in/daniel-john-almirante-b42782301/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="icon"
                  src={images["linkedin.png"]}
                  alt="My linkedin profile"
                />
              </a>
              <a
                className="social-link"
                href="https://github.com/danielpinoy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="icon"
                  src={images["github.png"]}
                  alt="My Github profile"
                />
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          ref={aboutRef}
          className={`hidden ${aboutView ? "show" : ""}`}
        >
          <p className="section__text__p1">Get To Know More</p>
          <h1 className="title">About Me</h1>
          <div className="section-container">
            <div className="about-details-container">
              <div className="about-containers">
                <div className="details-container">
                  <div className="detail-icon-wrapper">
                    <img
                      src={images["experience.png"]}
                      alt="Experience icon"
                      className="icon"
                    />
                  </div>
                  <h3>Experience</h3>
                  <p>
                    2+ years <br />
                    Frontend Development
                  </p>
                </div>
                <div className="details-container">
                  <div className="detail-icon-wrapper">
                    <img
                      src={images["education.png"]}
                      alt="Education icon"
                      className="icon"
                    />
                  </div>
                  <h3>Education</h3>
                  <p>
                    Undergraduate
                    <br />
                    Entertainment and Multimedia Computing
                  </p>
                </div>
              </div>
              <div className="text-container">
                <p>
                  I'm a Full Stack Developer specializing in creating
                  user-friendly and responsive web applications using modern
                  technologies such as HTML, CSS, JavaScript, and various
                  frameworks. With a background in frontend development and
                  cloud computing.
                </p>
                <p>
                  In my free time, I enjoy playing video games and hitting the
                  gym. Gaming allows me to unwind and immerse myself in exciting
                  virtual worlds, while regular workouts help me maintain a
                  healthy lifestyle and keep my mind sharp. I believe that
                  striking a balance between work and personal interests is
                  essential for overall well-being and productivity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          ref={experienceRef}
          className={`hidden ${experienceView ? "show" : ""}`}
        >
          <p className="section__text__p1">Explore My</p>
          <h1 className="title">Experience</h1>
          <div className="experience-details-container">
            <div className="about-containers">
              <div className="details-container skills-card">
                <h2 className="experience-sub-title">Frontend Development</h2>
                <div className="article-container">
                  <article className="skill-item">
                    <img
                      src={images["checkmark.png"]}
                      alt="Experience icon"
                      className="icon"
                    />
                    <div>
                      <h3>HTML</h3>
                      <div className="skill-level">
                        <div className="skill-bar experienced"></div>
                        <p>Experienced</p>
                      </div>
                    </div>
                  </article>
                  <article className="skill-item">
                    <img
                      src={images["checkmark.png"]}
                      alt="Experience icon"
                      className="icon"
                    />
                    <div>
                      <h3>CSS</h3>
                      <div className="skill-level">
                        <div className="skill-bar experienced"></div>
                        <p>Experienced</p>
                      </div>
                    </div>
                  </article>
                  <article className="skill-item">
                    <img
                      src={images["checkmark.png"]}
                      alt="Experience icon"
                      className="icon"
                    />
                    <div>
                      <h3>SASS</h3>
                      <div className="skill-level">
                        <div className="skill-bar intermediate"></div>
                        <p>Intermediate</p>
                      </div>
                    </div>
                  </article>
                  <article className="skill-item">
                    <img
                      src={images["checkmark.png"]}
                      alt="Experience icon"
                      className="icon"
                    />
                    <div>
                      <h3>JavaScript</h3>
                      <div className="skill-level">
                        <div className="skill-bar basic"></div>
                        <p>Basic</p>
                      </div>
                    </div>
                  </article>
                  <article className="skill-item">
                    <img
                      src={images["checkmark.png"]}
                      alt="Experience icon"
                      className="icon"
                    />
                    <div>
                      <h3>TypeScript</h3>
                      <div className="skill-level">
                        <div className="skill-bar basic"></div>
                        <p>Basic</p>
                      </div>
                    </div>
                  </article>
                  <article className="skill-item">
                    <img
                      src={images["checkmark.png"]}
                      alt="Experience icon"
                      className="icon"
                    />
                    <div>
                      <h3>Material UI</h3>
                      <div className="skill-level">
                        <div className="skill-bar intermediate"></div>
                        <p>Intermediate</p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div className="details-container skills-card">
                <h2 className="experience-sub-title">Backend Development</h2>
                <div className="article-container">
                  <article className="skill-item">
                    <img
                      src={images["checkmark.png"]}
                      alt="Experience icon"
                      className="icon"
                    />
                    <div>
                      <h3>PostgreSQL</h3>
                      <div className="skill-level">
                        <div className="skill-bar basic"></div>
                        <p>Basic</p>
                      </div>
                    </div>
                  </article>
                  <article className="skill-item">
                    <img
                      src={images["checkmark.png"]}
                      alt="Experience icon"
                      className="icon"
                    />
                    <div>
                      <h3>Node JS</h3>
                      <div className="skill-level">
                        <div className="skill-bar intermediate"></div>
                        <p>Intermediate</p>
                      </div>
                    </div>
                  </article>
                  <article className="skill-item">
                    <img
                      src={images["checkmark.png"]}
                      alt="Experience icon"
                      className="icon"
                    />
                    <div>
                      <h3>Express JS</h3>
                      <div className="skill-level">
                        <div className="skill-bar intermediate"></div>
                        <p>Intermediate</p>
                      </div>
                    </div>
                  </article>
                  <article className="skill-item">
                    <img
                      src={images["checkmark.png"]}
                      alt="Experience icon"
                      className="icon"
                    />
                    <div>
                      <h3>Git</h3>
                      <div className="skill-level">
                        <div className="skill-bar intermediate"></div>
                        <p>Intermediate</p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section - Complete Implementation */}
        <section
          id="projects"
          ref={projectRef}
          className={`hidden ${projectView ? "show" : ""}`}
        >
          <p className="section__text__p1">Browse My Recent</p>
          <h1 className="title">Projects</h1>
          <div className="experience-details-container">
            <div className="projects-about-container">
              {/* ChatBox Project Card */}
              <div
                ref={project01Ref}
                className={`project-card hidden ${project01View ? "show" : ""}`}
              >
                <div className="project-img-container">
                  <img
                    src={images["chatbox2.jpg"]}
                    alt="Chat Box App"
                    className="project-img"
                  />
                  <div className="project-overlay">
                    <div className="project-tech">
                      <span className="project-tech-badge">React Native</span>
                      <span className="project-tech-badge">Firebase</span>
                      <span className="project-tech-badge">Expo</span>
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <h2 className="project-title">Chat Box</h2>

                  <div className="desktop-tech-tags">
                    <span className="tech-tag">React Native</span>
                    <span className="tech-tag">Firebase</span>
                    <span className="tech-tag">Expo</span>
                  </div>

                  <p className="project-description">
                    A mobile chat application built with React Native that
                    allows real-time messaging with location sharing.
                  </p>

                  <div className="project-actions">
                    <button
                      className="project-btn"
                      onClick={() => handleViewProject(projects[0])}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 4V20M12 4L18 10M12 4L6 10"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      View Details
                    </button>

                    <button
                      className="github-btn"
                      onClick={() =>
                        window.open(
                          "https://github.com/danielpinoy/ChatRoom",
                          "_blank"
                        )
                      }
                      aria-label="View GitHub Repository"
                    >
                      <svg
                        width="22"
                        height="22"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* MeetUp App Project Card */}
              <div
                ref={project01Ref}
                className={`project-card hidden ${project01View ? "show" : ""}`}
              >
                <div className="project-img-container">
                  <img
                    src={images["MeetUp.png"]}
                    alt="MeetUp App"
                    className="project-img"
                  />
                  <div className="project-overlay">
                    <div className="project-tech">
                      <span className="project-tech-badge">React</span>
                      <span className="project-tech-badge">TDD</span>
                      <span className="project-tech-badge">
                        Google Calendar API
                      </span>
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <h2 className="project-title">MeetUp App</h2>

                  <div className="desktop-tech-tags">
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">TDD</span>
                    <span className="tech-tag">Google API</span>
                  </div>

                  <p className="project-description">
                    A serverless PWA built with React using TDD that displays
                    upcoming events from Google Calendar API.
                  </p>

                  <div className="project-actions">
                    <button
                      className="project-btn"
                      onClick={() => handleViewProject(projects[2])}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 4V20M12 4L18 10M12 4L6 10"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      View Details
                    </button>

                    <button
                      className="github-btn"
                      onClick={() =>
                        window.open(
                          "https://github.com/danielpinoy/meet",
                          "_blank"
                        )
                      }
                      aria-label="View GitHub Repository"
                    >
                      <svg
                        width="22"
                        height="22"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* RetroFlix Project Card */}
              <div
                ref={project02Ref}
                className={`project-card hidden ${project02View ? "show" : ""}`}
              >
                <div className="project-badge">Featured</div>

                <div className="project-img-container">
                  <img
                    src={images["chrome_Ek35uDuwS5.png"]}
                    alt="RetroFlix"
                    className="project-img"
                  />
                  <div className="project-overlay">
                    <div className="project-tech">
                      <span className="project-tech-badge">React</span>
                      <span className="project-tech-badge">Redux</span>
                      <span className="project-tech-badge">MongoDB</span>
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <h2 className="project-title">RetroFlix</h2>

                  <div className="desktop-tech-tags">
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">Redux</span>
                    <span className="tech-tag">Express</span>
                  </div>

                  <p className="project-description">
                    A web application showcasing historical movies with React
                    frontend and Express/MongoDB backend.
                  </p>

                  <div className="project-actions column-layout">
                    <div className="main-buttons">
                      <button
                        className="project-btn"
                        onClick={() => handleViewProject(projects[3])}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 4V20M12 4L18 10M12 4L6 10"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        View Details
                      </button>

                      <button
                        className="project-btn case-study-btn"
                        onClick={() => {
                          if (imagesLoaded) {
                            navigate("/case-study/MyFlix");
                          } else {
                            alert(
                              "Images are still loading. Please wait a moment."
                            );
                          }
                        }}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 6V12L16 14M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        Case Study
                      </button>
                    </div>

                    <div className="github-button-container">
                      <button
                        className="github-btn wide-github-btn"
                        onClick={() =>
                          window.open(
                            "https://github.com/danielpinoy/historic-movies-client",
                            "_blank"
                          )
                        }
                        aria-label="View GitHub Repository"
                      >
                        <svg
                          width="22"
                          height="22"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
                        </svg>
                        <span>View Code on GitHub</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* MyFlix Project Card */}
              <div
                ref={project03Ref}
                className={`project-card hidden ${project03View ? "show" : ""}`}
              >
                <div className="project-img-container">
                  <img
                    src={images["myflixclient1.png"]}
                    alt="MyFlix Project"
                    className="project-img"
                  />
                  <div className="project-overlay">
                    <div className="project-tech">
                      <span className="project-tech-badge">Angular</span>
                      <span className="project-tech-badge">Material UI</span>
                      <span className="project-tech-badge">TypeScript</span>
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <h2 className="project-title">MyFlix</h2>

                  <div className="desktop-tech-tags">
                    <span className="tech-tag">Angular</span>
                    <span className="tech-tag">Material UI</span>
                    <span className="tech-tag">API</span>
                  </div>

                  <p className="project-description">
                    Movie application with Angular frontend, featuring user
                    profile management and favorite movies.
                  </p>

                  <div className="project-actions">
                    <button
                      className="project-btn"
                      onClick={() => handleViewProject(projects[1])}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 4V20M12 4L18 10M12 4L6 10"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      View Details
                    </button>

                    <button
                      className="github-btn"
                      onClick={() =>
                        window.open(
                          "https://github.com/danielpinoy/myFlixClient",
                          "_blank"
                        )
                      }
                      aria-label="View GitHub Repository"
                    >
                      <svg
                        width="22"
                        height="22"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          ref={contactRef}
          className={`hidden ${contactView ? "show" : ""}`}
        >
          <p className="section__text__p1">Get in Touch</p>
          <h1 className="title">Contact Me</h1>
          <div className="contact-info-upper-container">
            <div className="contact-info-container">
              <div className="contact-icon-wrapper">
                <img
                  src={images["email.png"]}
                  alt="Email icon"
                  className="icon contact-icon email-icon"
                />
              </div>
              <p>
                <a
                  href="mailto:almirante.danieljohn@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  almirante.danieljohn@gmail.com
                </a>
              </p>
            </div>
            <div className="contact-info-container">
              <div className="contact-icon-wrapper">
                <img
                  src={images["linkedin.png"]}
                  alt="LinkedIn icon"
                  className="icon contact-icon"
                />
              </div>
              <p>
                <a
                  href="https://www.linkedin.com/in/daniel-john-almirante-b42782301/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </p>
            </div>
            <div className="contact-info-container">
              <div className="contact-icon-wrapper">
                <img
                  src={images["medium-seeklogo.png"]}
                  alt="Medium icon"
                  className="icon contact-icon"
                />
              </div>
              <p>
                <a
                  href="https://medium.com/@almirante.danieljohn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Medium
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer>
          <nav className="footer-nav">
            <div className="nav-links-container">
              <ul className="nav-links">
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#experience">Experience</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
          <p>Copyright &#169; 2024 Daniel John Almirante</p>
        </footer>
      </body>
    </div>
  );
};

export default MainView;

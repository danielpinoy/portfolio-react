import React, { useState, useEffect } from "react";
import useInViewOnce from "../hooks/useInViewOnce.js";
import images from "../utils/importImages.js";
import { useNavigate } from "react-router-dom";
import { projects } from "../utils/projects.js";
import danielCV from "../images/Daniel-John-Almirante.pdf";
import { caseStudyImages } from "../utils/projects.js";
const MainView = () => {
  const [profileRef, profileView] = useInViewOnce();
  const [aboutRef, aboutView] = useInViewOnce();
  const [experienceRef, experienceView] = useInViewOnce();
  const [projectRef, projectView] = useInViewOnce();
  const [contactRef, contactView] = useInViewOnce();
  // projects

  const [project01Ref, project01View] = useInViewOnce();
  const [project02Ref, project02View] = useInViewOnce();
  const [project03Ref, project03View] = useInViewOnce();

  const navigate = useNavigate();

  const handleViewProject = (project) => {
    navigate(`/project/${project.id}`, { state: { project } });
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Preload images when the component mounts
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    console.log(caseStudyImages[1]);
    console.log(projects);
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
      <body>
        <div id="projectContainer"></div>

        <nav id="desktop-nav">
          <h1 className="logo">Daniel John Almirante</h1>
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

        <section
          id="profile"
          ref={profileRef}
          className={`hidden ${profileView ? "show" : ""}`}
        >
          <div className="section__pic-container">
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
            <div className="btn-container">
              <a href={danielCV} download="DanielJohnAlmirante-cv-file.pdf">
                <button className="btn btn-color-2">Download CV</button>
              </a>
            </div>

            <div id="socials-container">
              <img
                className="icon"
                src={images["linkedin.png"]}
                alt="My linkedin profile"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/daniel-john-almirante-b42782301/",
                    "_blank"
                  )
                }
              />
              <img
                className="icon"
                src={images["github.png"]}
                alt="My Github profile"
                onClick={() =>
                  window.open("https://github.com/danielpinoy", "_blank")
                }
              />
            </div>
          </div>
        </section>
        <section
          id="about"
          ref={aboutRef}
          className={`hidden ${aboutView ? "show" : ""}`}
        >
          <p className="section__text__p1">Get To Know More</p>
          <h1 className="title">About Me</h1>
          <div className="section-container">
            <div className="section__pic-container1">
              <img
                src={images["danieljohnportfolio.jpg"]}
                alt="Daniel's face"
                className="about-pic"
              />
            </div>
            <div className="about-details-container">
              <div className="about-containers">
                <div className="details-container">
                  <img
                    src={images["experience.png"]}
                    alt="Experience icon"
                    className="icon"
                  />
                  <h3>Experience</h3>
                  <p>
                    2+ years <br />
                    Frontend Development
                  </p>
                </div>
                <div className="details-container">
                  <img
                    src={images["education.png"]}
                    alt="Education icon"
                    className="icon"
                  />
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
                  <br />
                  <br />
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

        <section
          id="experience"
          ref={experienceRef}
          className={`hidden ${experienceView ? "show" : ""}`}
        >
          <p className="section__text__p1">Explore My</p>
          <h1 className="title">Experience</h1>
          <div className="experience-details-container">
            <div className="about-containers">
              <div className="details-container">
                <h2 className="experience-sub-title">Frontend Development</h2>
                <div className="article-container">
                  <article>
                    <img
                      src={images["checkmark.png"]}
                      alt="Experience icon"
                      className="icon"
                    />
                    <div>
                      <h3>HTML</h3>
                      <p>Experienced</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src={images["checkmark.png"]}
                      alt="Experience icon"
                      className="icon"
                    />
                    <div>
                      <h3>CSS</h3>
                      <p>Experienced</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src={images["checkmark.png"]}
                      alt="Experience icon"
                      className="icon"
                    />
                    <div>
                      <h3>SASS</h3>
                      <p>Intermediate</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src={images["checkmark.png"]}
                      alt="Experience icon"
                      className="icon"
                    />
                    <div>
                      <h3>JavaScript</h3>
                      <p>Basic</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src={images["checkmark.png"]}
                      alt="Experience icon"
                      className="icon"
                    />
                    <div>
                      <h3>TypeScript</h3>
                      <p>Basic</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src={images["checkmark.png"]}
                      alt="Experience icon"
                      className="icon"
                    />
                    <div>
                      <h3>Material UI</h3>
                      <p>Intermediate</p>
                    </div>
                  </article>
                </div>
              </div>
              <div className="details-container">
                <h2 className="experience-sub-title">Frontend Development</h2>
                <div className="article-container">
                  <article>
                    <img
                      src={images["checkmark.png"]}
                      alt="Experience icon"
                      className="icon"
                    />
                    <div>
                      <h3>PostgreSQL</h3>
                      <p>Basic</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src={images["checkmark.png"]}
                      alt="Experience icon"
                      className="icon"
                    />
                    <div>
                      <h3>Node JS</h3>
                      <p>Intermediate</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src={images["checkmark.png"]}
                      alt="Experience icon"
                      className="icon"
                    />
                    <div>
                      <h3>Express JS</h3>
                      <p>Intermediate</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src={images["checkmark.png"]}
                      alt="Experience icon"
                      className="icon"
                    />
                    <div>
                      <h3>Git</h3>
                      <p>Intermediate</p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="projects"
          ref={projectRef}
          className={`hidden ${projectView ? "show" : ""}`}
        >
          <p className="section__text__p1">Browse My Recent</p>
          <h1 className="title">Projects</h1>
          <div className="experience-details-container">
            <div className="projects-about-container">
              <div
                ref={project01Ref}
                className={`details-container color-container hidden ${
                  project01View ? "show" : ""
                }`}
              >
                <div className="article-container">
                  <img
                    src={images["chatbox2.jpg"]}
                    alt="Project 1"
                    className="project-img"
                  />
                </div>
                <h2 className="experience-sub-title project-title">Chat Box</h2>
                <div className="btn-container">
                  <button
                    className="btn btn-color-2 project-btn"
                    onClick={() => handleViewProject(projects[0])}
                  >
                    View Project
                  </button>
                  <button
                    class="github-btn"
                    onClick={() =>
                      window.open(
                        "https://github.com/danielpinoy/ChatRoom",
                        "_blank"
                      )
                    }
                  >
                    <svg
                      width="40"
                      height="40"
                      fill="#0092E4"
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Layer 1"
                      viewBox="0 0 24 24"
                      id="github"
                    >
                      <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div
                ref={project01Ref}
                className={`details-container color-container hidden ${
                  project01View ? "show" : ""
                }`}
              >
                <div className="article-container">
                  <img
                    src={images["MeetUp.png"]}
                    alt="Project 2"
                    className="project-img"
                  />
                </div>
                <h2 className="experience-sub-title project-title">
                  MeetUp App
                </h2>
                <div className="btn-container">
                  <button
                    className="btn btn-color-2 project-btn"
                    onClick={() => handleViewProject(projects[2])}
                  >
                    View Project
                  </button>
                  <button
                    class="github-btn"
                    onClick={() =>
                      window.open(
                        "https://github.com/danielpinoy/meet",
                        "_blank"
                      )
                    }
                  >
                    <svg
                      width="40"
                      height="40"
                      fill="#0092E4"
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Layer 1"
                      viewBox="0 0 24 24"
                      id="github"
                    >
                      <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div
                ref={project02Ref}
                className={`details-container color-container hidden ${
                  project02View ? "show" : ""
                }`}
              >
                <div className="article-container">
                  <img
                    src={images["chrome_Ek35uDuwS5.png"]}
                    alt="Project 3"
                    className="project-img"
                  />
                </div>
                <h2 className="experience-sub-title project-title">
                  RetroFlix
                </h2>
                <div className="btn-container">
                  <button
                    className="btn btn-color-2 project-btn"
                    onClick={() => handleViewProject(projects[3])}
                  >
                    View Project
                  </button>
                  <button
                    className="btn btn-color-2 project-btn"
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
                    CaseStudy
                  </button>
                  <button
                    class="github-btn"
                    onClick={() =>
                      window.open(
                        "https://github.com/danielpinoy/historic-movies-client",
                        "_blank"
                      )
                    }
                  >
                    <svg
                      width="40"
                      height="40"
                      fill="#0092E4"
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Layer 1"
                      viewBox="0 0 24 24"
                      id="github"
                    >
                      <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div
                ref={project03Ref}
                className={`details-container color-container hidden ${
                  project03View ? "show" : ""
                }`}
              >
                <div className="article-container">
                  <img
                    src={images["myflixclient1.png"]}
                    alt="Project 4"
                    className="project-img"
                  />
                </div>
                <h2 className="experience-sub-title project-title">MyFlix</h2>
                <div className="btn-container">
                  <button
                    className="btn btn-color-2 project-btn"
                    onClick={() => handleViewProject(projects[1])}
                  >
                    View Project
                  </button>

                  <button
                    class="github-btn"
                    onClick={() =>
                      window.open(
                        "https://github.com/danielpinoy/myFlixClient",
                        "_blank"
                      )
                    }
                  >
                    <svg
                      width="40"
                      height="40"
                      fill="#0092E4"
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Layer 1"
                      viewBox="0 0 24 24"
                      id="github"
                    >
                      <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="contact"
          ref={contactRef}
          className={`hidden ${contactView ? "show" : ""}`}
        >
          <p className="section__text__p1">Get in Touch</p>
          <h1 className="title">Contact Me</h1>
          <div className="contact-info-upper-container">
            <div className="contact-info-container">
              <img
                src={images["email.png"]}
                alt="Email icon"
                className="icon contact-icon email-icon"
              />
              <p>
                <a
                  href="mailto:almirante.danieljohn@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Email
                </a>
              </p>
            </div>
            <div className="contact-info-container">
              <img
                src={images["linkedin.png"]}
                alt="LinkedIn icon"
                className="icon contact-icon"
              />
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
              <img
                src={images["medium-seeklogo.png"]}
                alt="Medium icon"
                className="icon contact-icon"
              />
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
        <footer>
          <nav>
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
          <p>Copyright &#169; 2024 Daniel John</p>
        </footer>
        <script src="script.js"></script>
      </body>
    </div>
  );
};

export default MainView;

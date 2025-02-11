import React, { useState, useEffect } from "react";
// import "./projectsview.css";
import "./projectsview.css";
import { useLocation } from "react-router-dom";

const ProjectViewer = () => {
  const location = useLocation();
  const { project } = location.state;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [expandedFeature, setExpandedFeature] = useState(null);

  const toggleFeature = (index) => {
    setExpandedFeature(expandedFeature === index ? null : index);
  };

  return (
    <div className="project-viewer">
      <h2 className="project-title line-1 anim-typewriter">{project.title}</h2>
      <div className="project-description">
        {project.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className="top-sections-grid">
        <div className="left-column">
          {project.features && (
            <div className="project-features">
              <h3>Key features and implementations include:</h3>
              <ul>
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
          {project.installation && (
            <div className="project-installation">
              <h3>Installation</h3>
              <ol>
                {project.installation.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          )}
        </div>

        <div className="right-column">
          {project.technologies && (
            <div className="project-technologies">
              <h3>Technologies Used</h3>
              <ul>
                {project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {project.detailedFeatures && (
        <div className="project-container">
          <h3>Features</h3>
          <div className="project-features-detailed">
            {project.detailedFeatures.map((feature, index) => (
              <div
                key={index}
                className={`feature ${
                  expandedFeature === index ? "expanded" : ""
                }`}
              >
                <h4 onClick={() => toggleFeature(index)}>{feature.title}</h4>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>

          {project.testing && (
            <div className="project-testing">
              <h3>Testing</h3>
              <p>{project.testing.description}</p>

              <div className="testing-details">
                <div className="testing-section">
                  <h4>Unit Tests</h4>
                  <p>{project.testing.unitTests}</p>
                </div>

                <div className="testing-section">
                  <h4>Integration Tests</h4>
                  <p>{project.testing.integrationTests}</p>
                </div>

                <div className="testing-section">
                  <h4>End-to-End Tests</h4>
                  <p>{project.testing.endToEndTests}</p>
                </div>

                <div className="testing-section">
                  <h4>Behavior-Driven Development (BDD)</h4>
                  <p>{project.testing.bdd}</p>
                </div>
              </div>
            </div>
          )}

          <button className="back-btn" onClick={() => window.history.back()}>
            Back
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectViewer;

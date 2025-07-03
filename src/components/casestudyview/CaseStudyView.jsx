import React, { useState } from "react";
import { caseStudyImages } from "../../utils/projects.js";
// import "./CaseStudyView.css";
import "./CaseStudyView.min.css";

const CaseStudyView = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? caseStudyImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === caseStudyImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="case-study-viewer">
      <h1>CaseStudy RetroFlix</h1>
      <div className="image-container">
        <img
          src={caseStudyImages[currentIndex]}
          alt={`Case Study ${currentIndex + 1}`}
        />
        <div className="navigation">
          <button className="previous-button" onClick={goToPrevious}>
            &lt;
          </button>
          <button className="next-button" onClick={goToNext}>
            &gt;
          </button>
        </div>
      </div>
      <div className="image-thumbnails">
        {caseStudyImages.map((image, index) => (
          <div
            key={index}
            className={`thumbnail ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          >
            <img src={image} alt={`Thumbnail ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="back-btn" onClick={() => window.history.back()}>
        Back
      </button>
    </div>
  );
};

export default CaseStudyView;

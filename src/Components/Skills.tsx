import React from "react";
import "@/style/Skill.css"

export default function Skills() {
  return (
    <section className="skills-section" id="Skill">
    <h2 className="skills-title">
      My <span className="highlighted-text">Skills</span>
    </h2>
    <div className="skills-container">
      <div className="skill">
        <div className="skill-info">
          <span>HTML-5</span>
          <span>80%</span>
        </div>
        <div className="progress-bar">
          <div className="progress" style={{ width: "80%" }}></div> {/* Correct format */}
        </div>
      </div>
      <div className="skill">
        <div className="skill-info">
          <span>CSS-3</span>
          <span>75%</span>
        </div>
        <div className="progress-bar">
          <div className="progress" style={{ width: "75%" }}></div> {/* Correct format */}
        </div>
      </div>
      <div className="skill">
        <div className="skill-info">
          <span>TypeScript</span>
          <span>60%</span>
        </div>
        <div className="progress-bar">
          <div className="progress" style={{ width: "60%" }}></div> {/* Correct format */}
        </div>
      </div>
      <div className="skill">
        <div className="skill-info">
          <span>JavaScript</span>
          <span>50%</span>
        </div>
        <div className="progress-bar">
          <div className="progress" style={{ width: "50%" }}></div> {/* Correct format */}
        </div>
      </div>
      <div className="skill">
        <div className="skill-info">
          <span>Adobe Photoshop</span>
          <span>75%</span>
        </div>
        <div className="progress-bar">
          <div className="progress" style={{ width: "75%" }}></div> {/* Correct format */}
        </div>
      </div>
      <div className="skill">
        <div className="skill-info">
          <span>Adobe Illustrator</span>
          <span>60%</span>
        </div>
        <div className="progress-bar">
          <div className="progress" style={{ width: "60%" }}></div> {/* Correct format */}
        </div>
      </div>
    </div>
  </section>
  
  );
}
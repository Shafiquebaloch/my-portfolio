import React from "react";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import "../../style/Project.css"
import img2 from "../../../Public/Images/img1.png"
const Projects = () => {
  return (
    <section className="projects-section" id="Projects">
    <div className="text-center">
      <h1 className="heading">Projects</h1>
      <div className="border"></div>
      <div className="projects-grid">
        <div className="project-item">
        <Image
              src={img2} // Path ko slash se start karna hoga
              alt="A computer setup with multiple monitors displaying code"
              width={300}
              height={200} className="rounded-lg"
            />
          <div className="overlay">
            <div className="overlay-content">
              <FaExternalLinkAlt/>
              <p className="overlay-text">Web Design</p>
            </div>
          </div>
        </div>
        <div className="project-item">
        <Image
              src={img2} // Path ko slash se start karna hoga
              alt="A computer setup with multiple monitors displaying code"
              width={300}
              height={200} className="rounded-lg"
            />
          <div className="overlay">
            <div className="overlay-content">
            <FaExternalLinkAlt/>
              <p className="overlay-text">Web Design</p>
            </div>
          </div>
        </div>
        <div className="project-item">
        <Image
              src={img2} // Path ko slash se start karna hoga
              alt="A computer setup with multiple monitors displaying code"
              width={300}
              height={200} className="rounded-lg"
            />
          <div className="overlay">
            <div className="overlay-content">
            <FaExternalLinkAlt/>
              <p className="overlay-text">Web Design</p>
            </div>
          </div>
        </div>
        <div className="project-item">
        <Image
              src={img2}  // Path ko slash se start karna hoga
              alt="A computer setup with multiple monitors displaying code"
              width={300}
              height={200} className="rounded-lg"
            />
          <div className="overlay">
            <div className="overlay-content">
            <FaExternalLinkAlt/>
              <p className="overlay-text">Web Design</p>
            </div>
          </div>
        </div>

        <div className="project-item">
        <Image
              src={img2}  // Path ko slash se start karna hoga
              alt="A computer setup with multiple monitors displaying code"
              width={300}
              height={200} className="rounded-lg"
            />
          <div className="overlay">
            <div className="overlay-content">
            <FaExternalLinkAlt/>
              <p className="overlay-text">Web Design</p>
            </div>
          </div>
        </div>

        <div className="project-item">
        <Image
              src={img2}  // Path ko slash se start karna hoga
              alt="A computer setup with multiple monitors displaying code"
              width={300}
              height={200} className="rounded-lg"
            />
          <div className="overlay">
            <div className="overlay-content">
            <FaExternalLinkAlt/>
              <p className="overlay-text">Web Design</p>
            </div>
          </div>
        </div>

        <div className="project-item">
        <Image
              src={img2}  // Path ko slash se start karna hoga
              alt="A computer setup with multiple monitors displaying code"
              width={300}
              height={200} className="rounded-lg"
            />
          <div className="overlay">
            <div className="overlay-content">
            <FaExternalLinkAlt/>
              <p className="overlay-text">Web Design</p>
            </div>
          </div>
        </div>

        <div className="project-item">
        <Image
             src={img2}  // Path ko slash se start karna hoga
              alt="A computer setup with multiple monitors displaying code"
              width={300}
              height={200} className="rounded-lg"
            />
          <div className="overlay">
            <div className="overlay-content">
            <FaExternalLinkAlt/>
              <p className="overlay-text">Web Design</p>
            </div>
          </div>
        </div>
        {/* Repeat more project items as needed */}
      </div>
    </div>
  </section>
  );
};

export default Projects;
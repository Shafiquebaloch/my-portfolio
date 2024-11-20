import React from "react";
import Image from "next/image";
import "../../style/About.css";
import img from "../../../Public/Images/1.jpg"
const About = () => {
  return (
    <div>
      <section className="about-section" id="About">
        <div className="about-container">
          <div className="about-header">
            <h1 className="about-title">
              About-me
            </h1>
            <div className="underline"></div>
          </div>
          <div className="about-content">
            <div className="about-image-container">
              <Image
                src={img} // Image ka path
                alt="My Image Description"
                width={300} // Width specify karein
                height={400} // Height specify karein
              />
            </div>
            <div className="about-description">
              <h2 className="about-role">
                Frontend Developer &amp; UI / UX Designer
              </h2>
              <p className="about-text">
                I am Muhammad Shafique, a frontend developer with a passion for
                creating intuitive and visually appealing web experiences. With
                a strong foundation in HTML, CSS, JavaScript, and frameworks
                like React, I focus on building responsive, user-friendly
                interfaces that bring ideas to life. I believe in the power of
                design to communicate, inspire, and create connections, and I’m
                constantly exploring new techniques to elevate my work. Beyond
                coding, I’m driven by creativity, curiosity, and a commitment to
                continuous learning, always aiming to refine my skills and stay
                at the forefront of web development.
              </p>
              <p className="additional-text">
                {/* You can Write More About Here */}
              </p>
              <button className="read-more-btn">Read More...</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
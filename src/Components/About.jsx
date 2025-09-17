import React from "react";
import profilePic from '../Assets/guru-img.jpg'

const About = () => {
  return (
    <section >
      <div className="container">
        {/* Title */}
        <h2
          className="text-center fw-bold text-primary"
          style={{
            color: "blue",
            fontSize: "40px",
            marginBottom: "35px",
          }}
        >
          About
          </h2>

        {/* Content */}
        <div className="row align-items-center">
          {/* Image */}
          <div className="col-md-6 text-center">
            <img
              src={profilePic}
              alt="Profile"
              className="img-fluid"
              style={{
                width: "400px",
                height: "400px",
                objectFit: "cover",
                borderRadius: "20px",
              }}
            />
          </div>

          {/* Text */}
          <div className="col-md-6">
            <h1 className="fw-bold mb-3 text-primary">I'm GuruPrasath</h1>
            <p style={{ fontSize: "18px", lineHeight: "1.8" }}>
              Hi, I’m <b>GuruPrasath</b>, a passionate Full Stack Developer in the making.
              I recently graduated and I’m currently pursuing a <b>Java Full Stack Development</b> course.
              Skilled in <b>React.js, Bootstrap, SQL, and MongoDB</b>, I enjoy creating clean and responsive web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
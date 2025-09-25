import React from 'react'
import projectpic1 from '../Assets/projectpic1.png'
import projectpic2 from '../Assets/projectpic2.png'
import projectpic3 from '../Assets/projectpic3.png'
import './Project.css'

const Project = () => {
  return (
    <>
      <section className='project   '>
        <h2 className='text-center fw-bold text-primary '
          style={{ fontSize: '32px', fontWeight: 'bold' , marginBottom:'50px' }}>
          Projects
        </h2>

        <div className="container" id='projectcard'>
          <div className="row g-4">
            
            {/* Project 1 */}
            <div className="col-md-4">
              <div className="card">
                <img src={projectpic1} alt="project1" />
                <div className="card-body text-center">
                  <h5 className="card-title">Explore Southern India</h5>
                  <p className="card-text">A cultural web platform highlighting the rich heritage, traditions, and tourist attractions of Southern India.</p>
                  <a href="https://github.com/Guru-Prasath-M/Explore-Southern-India" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="btn btn-primary">
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="col-md-4">
              <div className="card">
                <img src={projectpic2} alt="project2" />
                <div className="card-body text-center">
                  <h5 className="card-title">Static Web page</h5>
                  <p className="card-text">A simple, responsive webpage built with HTML, CSS to showcase content without backend integration.</p>
                  <a href="https://github.com/Guru-Prasath-M/Static_webpage" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="btn btn-primary">
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="col-md-4">
              <div className="card">
                <img src={projectpic3} alt="project3" />
                <div className="card-body text-center">
                  <h5 className="card-title">Personal Portfolio</h5>
                  <p className="card-text">A responsive and interactive portfolio website built with React to showcase Skills, Projects.</p>
                  <a href="https://github.com/Guru-Prasath-M/Portfolio-REACT" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="btn btn-primary">
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Project
import React from 'react'
import "../App.css"
import profilePic from '../Assets/guru-img.jpg'
import { NavLink } from 'react-router'

 const Home = () => {
  return (
    <div>
            
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <h1 className='mb-4'>Hi,</h1>
                    <h1 className='mb-4'>I'm <span className='text-primary'>GuruPrasath</span></h1>
                    <h1 className='mb-4'>Full Stack Developer</h1>

                    <NavLink to="/Contact"><button className='btn btn-primary'>Contact</button></NavLink>

                    <a href="/GURUPRASATH M_RESUME.pdf" download='GuruPrasath M_Resume.pdf' className='btn btn-primary' id='CV'>Download CV</a>
                </div>

                <div className=" col-6 d-flex justify-content-end align-items-center">
                <img src={profilePic} alt="me" className='ms-auto' style={{width:'450px',height:'450px',objectFit:"cover",borderRadius:"80px",marginLeft:'150px'}} />
            </div>
            </div>

        <div className="col-4" id='footer'>
          <a href="https://www.linkedin.com/in/guruprasath-m-b90860267/" target='blank'>
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn"
                    style={{ width: "30px", height: "30px",border: 'none' }} /> </a>

           <a href="https://github.com/Guru-Prasath-M" target='blank'>
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github" 
                    style={{ width: "30px", height: "30px",border: 'none',marginLeft:'20px' }} /> </a>

        </div>

        </div>
    </div>
    
  )
}

export default Home;

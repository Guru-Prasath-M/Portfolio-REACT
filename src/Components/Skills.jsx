import React from 'react'

const Skills = () => {
  return (
    <div className='container mt-5'>
        <h2 className='text-center text-primary' style={{fontWeight:'bold'}}>My Skills</h2>
      <div className='mb-4'>
        <h4 style={{fontWeight:'bold'}}>HTML / CSS</h4>
        <div className='progress' style={{border:'1px solid green'}}>
            <div className="progress-bar bg-success" role='progressbar' style={{width:'85%',fontWeight:'bold',color:"black"}}> 85%</div>
        </div>
      </div>
      
      <div className='mb-4 ' >
        <h4 style={{fontWeight:'bold'}}>BootStrap</h4>
        <div className="progress" style={{border:'1px solid lightblue'}}>
            <div className="progress-bar bg-info" role='progressbar' style={{width:'75%',fontWeight:'bold',color:"black"}}>75%</div>
        </div>
      </div>


      <div className='mb-4' >
        <h4 style={{fontWeight:'bold'}}>JavaScript</h4>
        <div className="progress" style={{border:'1px solid lightblue'}}>
            <div className="progress-bar bg-info" role='progressbar' style={{width:'60%',fontWeight:'bold',color:"black"}}>60%</div>
        </div>
      </div>

      <div className="mb-4">
        <h4 style={{fontWeight:'bold'}}>React.JS</h4>
        <div className="progress" style={{border:'1px solid lightyellow'}} >
          <div className="progress-bar bg-warning" role='progressbar' style={{width:'50%',fontWeight:'bold',color:"black"}}>50%</div>
        </div>
      </div>

      <div className="mb-4">
        <h4 style={{fontWeight:'bold'}}>SQL / MySQL</h4>
        <div className="progress" style={{border:'1px solid darkblue'}}>
          <div className="progress-bar bg-primary" role='progressbar' style={{width:'85%',fontWeight:'bold',color:"black"}}>85%</div>
        </div>
      </div>

      <div className="mb-4">
        <h4 style={{fontWeight:'bold'}}>Git & GitHub </h4>
        <div className="progress" style={{border:'1px solid red'}}>
          <div className="progress-bar bg-danger" role='progressbar' style={{width:'85%',fontWeight:'bold',color:"black"}}>85%</div>
        </div>
      </div>

    </div>
  )
}

export default Skills
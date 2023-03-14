import React from 'react'
import project1 from '../assets/img/ourprojects/OurProject1.svg'
import project2 from '../assets/img/ourprojects/OurProject2.svg'
import project3 from '../assets/img/ourprojects/OurProject3.svg'
import asset8 from '../assets/img/ourprojects/Asset8.svg'
import buliding from '../assets/img/ourprojects/buliding.jpeg'
import pic1 from '../assets/img/ourprojects/01.jpg'
function OurProject() {
   

    return (
        <>
            <div id="ourproject" className='container'>
                <h2 className='text-center  projecttitle'>OUR PROJECTS</h2>
                <p className='projecttitle-borders mx-auto'></p>

                <div className='row mt-5 '>
                    <div className='col-lg-6 text-lg-end text-md-center project-detail'>
                        <img src={buliding}  className="img-fluid img-hover"></img>
                        <div className='img-project '><div className='project-text' >project Name</div></div>
                    </div>
                    <div className='col-lg-6 text-lg-start rojecttitle-margin  text-md-center mt-sm-3 mt-lg-0'>
                        <img src={project2} className="img-fluid mb-4"></img>
                        <img src={project3} className="img-fluid"></img>
                    </div>
                </div>
            </div>
            <div className='projectasset'><img src={asset8} className='img img-fluid'></img></div>
        
    </>
  )
}

export default OurProject
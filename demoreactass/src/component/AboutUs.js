import React from 'react'
import about from '../assets/img/aboutus/aboutus.svg'
import engagement from '../assets/img/aboutus/Enagagement.svg'
import communication from '../assets/img/aboutus/coomunication.svg'

function AboutUs() {
    return (
        <div id='about' className='container about'>
            <div className='row align-items-center'>
                <div className='col-lg-6 col-md-12'>
                    <img src={about} className="img-fluid"></img>
                </div>
                <div className='col-lg-6 col-md-12'>
                    <h2 className='aboutus'>ABOUT US</h2>
                    <p className='borders'></p>
                    <p className='lh-lg mt-4'>We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources.</p>
                    <div className='row'>

                        <div className='col-lg-6 col-sm-12 text-lg-start text-center '>
                            <img src={engagement} className="img-fluid "></img>
                            <h5 className='pt-4 '>Engagement</h5>
                            <p className="pt-3 ">
                            We are engagement specialists, who have led projects at all levels of the IAP2 spectrum.
                           
                            </p> 
                            <a href='#' className='readmore'>READ MORE</a>
                        </div>
                        <div className='col-lg-6 col-sm-12 text-lg-start  text-center '>
                            <img src={communication} className="img-fluid mt-3"></img>
                            <h5 className='pt-4'>Communications</h5>
                            <p className="pt-3">
                            We are engagement specialists, who have led projects at all levels of the IAP2 spectrum.
                           
                            </p> 
                            <a href='#' className='readmore'>READ MORE</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
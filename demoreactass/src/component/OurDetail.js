import React from 'react'
import facebook from '../assets/img/ourdetails/facebook.svg'
import linkedin from '../assets/img/ourdetails/linkedin.svg'
import search from '../assets/img/ourdetails/search.svg'
function OurDetail() {
    return (
        <>
            <div id="contact" className='container'>
                <div className='row box align-items-center'>
                    <div className='col-lg-3 col-md-6 col-sm-12 '>
                        <p className='fw-bold'>Social</p>
                        
                        <a className=" active media px-0 pt-0 text-sm-center text-md-start text-center" aria-current="page" href="#"><img src={facebook} className="pe-2 text-center text-dark"></img>facebook</a>  
                        <a className="detail-link active media  px-0 text-sm-center text-md-start text-center" aria-current="page" href="#"><img src={linkedin} className="pe-2"></img>linkedin</a>
                        <a className="detail-link active media   px-0 text-sm-center text-md-start text-center" aria-current="page" href="#"><img src={search} className="pe-2"></img>search</a>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <p className='fw-bold'>Explore</p>
                        <p>Services</p>
                        <p>Team</p>
                        <p>Clients</p>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <p className='fw-bold'>Contact</p>
                        <p>Lorem Ipsum dummy address
                            used for display</p>
                        <p>1234567890</p>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                    <p className='fw-bold'>Email</p>
                    <p>mendlescation@email.com</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurDetail
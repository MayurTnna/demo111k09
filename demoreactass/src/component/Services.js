import React from 'react'
import engagement from '../assets/img/service/Engagement.svg'
import communication from '../assets/img/service/Comminucation.svg'
import facilitation from '../assets/img/service/facilation.svg'
import consultation from '../assets/img/service/Consultation.svg'
import tandv from '../assets/img/service/Training.svg'
import asset5 from '../assets/img/service/Asset5.svg'
import asset6 from '../assets/img/service/Asset6.svg'
import asset7 from '../assets/img/service/Asset7.svg'
import asset8 from '../assets/img/service/Asset8.svg'
function Services() {
    return (
        <>
        <div id="service" className='container '>
            <h2 className='text-center  service'>SERVICES</h2>
            <p className='borders mx-auto'></p>

            {/* Engagement section */}
            <div className='row align-items-center mt-4 service-gap'>
                <div className='col-lg-5 '>
                    <h3 className="text-lg-end text-uppercase  text-md-center text-sm-center">Engagement</h3>
                    <p className="text-lg-end text-sm-center">
                        We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources.
                    </p>
                </div>
                <div className='col-lg-5 text-center'>
                    <img src={engagement} className="img-fluid"></img>
                </div>
            </div>

            {/* Communications section */}
            <div className='my-5'>
                <div className='row align-items-center service-gap'>
                    <div className='col-lg-5 order-lg-1 order-2 text-md-center'>
                        <img src={communication} className="img-fluid"></img>
                    </div>
                    <div className='col-lg-5 order-lg-2 order-1'>
                        <h3 className='text-uppercase'>Communications</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque et. Sit ac fames facilisis nibh faucibus.
                        </p>
                    </div>
                </div>
            </div>

            {/* facilitation section */}
            <div className='row align-items-center service-gap'>
                <div className='col-lg-5 text-md-center'>
                    <h3 className="text-lg-end text-sm-center text-uppercase">facilitation</h3>
                    <p className="text-end text-lg-end text-sm-center">
                        We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources.
                    </p>
                </div>
                <div className='col-lg-5'>
                    <img src={facilitation} className="img-fluid"></img>
                </div>


                {/* Consultation and Research section */}
                <div className='my-5'>
                    <div className='row align-items-center service-gap  '>
                        <div className='col-lg-5 order-lg-1 order-2 text-md-center'>
                            <img src={consultation} className="img-fluid"></img>
                        </div>
                        <div className='col-lg-5 order-lg-2 order-1'>
                            <h3 className='text-uppercase'>Consultation and Research</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque et. Sit ac fames facilisis nibh faucibus.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Traning & Mentoring section */}
            <div className='row align-items-center text-md-center service-gap'>
                <div className='col-lg-5'>
                    <h3 className="text-lg-end text-sm-center text-uppercase">Traning & Mentoring</h3>
                    <p className="text-lg-end text-sm-center">
                        We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources.
                    </p>
                </div>
                <div className='col-lg-5'>
                    <img src={tandv} className="img-fluid"></img>
                </div>
            </div>
        </div>
            <div className='asset5'><img src={asset5} className='img img-fluid'></img></div>
            <div className='asset6'><img src={asset6} className='img img-fluid'></img></div>
            <div className='asset7'><img src={asset7} className='img img-fluid'></img></div>
            <div className='asset8'><img src={asset8} className='img img-fluid'></img></div>
            <div className='asset9'><img src={asset5} className='img img-fluid'></img></div>
        </>
        
    )
}

export default Services
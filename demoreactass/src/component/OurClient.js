import React from 'react'
import layer19 from '../assets/img/ourclients/Layer19.svg'
import layer20 from '../assets/img/ourclients/Layer20.svg'
import layer21 from '../assets/img/ourclients/Layer21.svg'
import layer22 from '../assets/img/ourclients/Layer22.svg'
import layer23 from '../assets/img/ourclients/Layer23.svg'
import layer24 from '../assets/img/ourclients/Layer24.svg'
import layer25 from '../assets/img/ourclients/Layer25.svg'
import layer26 from '../assets/img/ourclients/Layer26.svg'
import layer27 from '../assets/img/ourclients/Layer27.svg'
import asset9 from '../assets/img/ourclients/Assets9.svg'

import hower19 from '../assets/img/ourclients/hower/hower19.svg'
import hower20 from '../assets/img/ourclients/hower/hower20.svg'
import hower21 from '../assets/img/ourclients/hower/hower21.svg'
import hower22 from '../assets/img/ourclients/hower/hower22.svg'
import hower23 from '../assets/img/ourclients/hower/hower23.svg'
import hower24 from '../assets/img/ourclients/hower/hower24.svg'
import hower25 from '../assets/img/ourclients/hower/hower25.svg'
import hower26 from '../assets/img/ourclients/hower/hower26.svg'
import hower27 from '../assets/img/ourclients/hower/hower27.svg'


function OurClient() {
    return (
        <>
            <div className='container'>
                <h2 className='text-center  service'>OUR CLIENTS</h2>
                <p className='borders mx-auto'></p>
                <div className='row justify-content-center align-items-center text-center gy-3'>
                    <div className='col-lg-2 col-md-6 col-sm-6 '>
                        <img src={layer19} className="img-fluid" onMouseOver={e => (e.currentTarget.src=`${hower19}`)} onMouseOut={e => (e.currentTarget.src=`${layer19}`)}></img>
                    </div>
                    <div className='col-lg-2 col-md-6 col-sm-6'>
                        <img src={layer20} className="img-fluid" onMouseOver={e => (e.currentTarget.src=`${hower20}`)} onMouseOut={e => (e.currentTarget.src=`${layer20}`)}></img>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <img src={layer21} className="img-fluid" onMouseOver={e => (e.currentTarget.src=`${hower21}`)} onMouseOut={e => (e.currentTarget.src=`${layer21}`)}></img>
                    </div>
                    <div className='col-lg-2 col-md-6 col-sm-6'>
                        <img src={layer22} className="img-fluid" onMouseOver={e => (e.currentTarget.src=`${hower22}`)} onMouseOut={e => (e.currentTarget.src=`${layer22}`)}></img>
                    </div>
                    <div className='col-lg-2  col-md-6 col-sm-6'>
                        <img src={layer23} className="img-fluid" onMouseOver={e => (e.currentTarget.src=`${hower23}`)} onMouseOut={e => (e.currentTarget.src=`${layer23}`)}></img>
                    </div>
                </div>
                <div className='pt-4'>
                    <div className='row justify-content-center align-items-center text-center gy-3'>
                        <div className='col-lg-3 col-md-6 col-sm-6 '>
                            <img src={layer24} className="img-fluid" onMouseOver={e => (e.currentTarget.src=`${hower24}`)} onMouseOut={e => (e.currentTarget.src=`${layer24}`)}></img>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 '>
                            <img src={layer25} className="img-fluid" onMouseOver={e => (e.currentTarget.src=`${hower25}`)} onMouseOut={e => (e.currentTarget.src=`${layer25}`)}></img>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 '>
                            <img src={layer26} className="img-fluid" onMouseOver={e => (e.currentTarget.src=`${hower26}`)} onMouseOut={e => (e.currentTarget.src=`${layer26}`)}></img>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6'>
                            <img src={layer27} className="img-fluid" onMouseOver={e => (e.currentTarget.src=`${hower27}`)} onMouseOut={e => (e.currentTarget.src=`${layer27}`)}></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className='clientassest'><img src={asset9} className='img img-fluid'></img></div>
        </>
    )
}

export default OurClient
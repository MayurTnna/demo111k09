import React from 'react'
import asset1 from '../assets/img/navbar/Asset-1.svg'
import asset2 from '../assets/img/navbar/Asset-2.svg'
import group1 from '../assets/img/home/Group-1.svg'
import asset4 from '../assets/img/home/Assets-4.svg'
function Home() {
    return (
        <div className='fluid-container '>
            <div className='asset-1'>
                <img src={asset1} className="img-fluid img" ></img>
            </div>
            <div className='asset-2'>
                <img src={asset2} className="img-fluid img" ></img>
            </div>
            <div className='mendleson'>
                <div className='group-1'>
                    <img src={group1} className="img-fluid" ></img>
                </div>
                <div className='asset-4'>
                    <img src={asset4} className="img-fluid img" ></img>
                </div>
                <div className='text'>
                    <h1 className='fs-1'>Mendleson Communication and Engagement</h1>
                    <p className='fs-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sed ipsum, ut quam volutpat, tortor.</p>
                </div>
            </div>
        </div>

    )
}

export default Home
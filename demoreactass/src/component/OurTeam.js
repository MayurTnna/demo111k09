import React from 'react'
import person1 from '../assets/img/ourteam/Person1.svg'
import person2 from '../assets/img/ourteam/Person2.svg'
import person3 from '../assets/img/ourteam/Person3.svg'
function OurTeam() {
  return (
    <>
    <div id="ourteam" className='container mt-5'>
        <h2 className='text-center  service'>OUR TEAM</h2>
        <p className='borders mx-auto'></p>

        <div className='row mt-5 '>
                <div className='col-lg-4 text-center'>
                    <img src={person1} className="img-fluid"></img>
                    <p className='pt-5 '>Jessica D’suza</p>
                </div>
                <div className='col-lg-4 text-center'>
                    <img src={person2} className="img-fluid"></img>
                    <p className='pt-5'>Johny Williams</p>
                </div>
                <div className='col-lg-4 text-center'>
                    <img src={person3} className="img-fluid"></img>
                    <p className='pt-5'>Sanya R,</p>
                </div>
            </div>
    </div>
    </>
  )
}

export default OurTeam
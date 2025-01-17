import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Expart</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Expart</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Expart</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_frontend">
          <h3>Frontend Designing</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Expart</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>BootStrap</h4>
                <small className='text-light'>Expart</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Expart</small>
              </div>
            </article>
          </div>
        </div>
{/*End Of FrontEnd  */}
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Expart</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Express</h4>
                <small className='text-light'>Expart</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Expart</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>Database Management</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>MongoDb</h4>
                <small className='text-light'>Expart</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Expart</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Firebase</h4>
                <small className='text-light'>Expart</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default experience
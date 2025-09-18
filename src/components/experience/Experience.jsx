import React from "react";
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'


const Experience = () =>{
    return(
        <section id="experience">
        <h5>What Skills I Have</h5>   
        <h2>My Experience</h2>

        <div className="container experience__container">
            <div className="experience__web">
                <h3>Web Development</h3>
                <div className="experience__content">
                    <article className="experience__details">
                        <BsPatchCheckFill className='experience__details-icon'/>
                        <div>
                        <h4>React</h4>
                        <small className="text-light" >Experienced</small>
                        </div>
                    </article>
                    <article className="experience__details">
                        <BsPatchCheckFill className='experience__details-icon'/>
                        <dir>
                            
                        <h4>JavaScript</h4>
                        <small className="text-light" >Intermediate</small>
                        </dir>
                    </article>
                    <article className="experience__details">
                        <BsPatchCheckFill className='experience__details-icon'/>
                        <div>
                            <h4>Node Js</h4>
                        <small className="text-light" >Experienced</small>
                        </div>
                    </article>
                    <article className="experience__details">
                        <BsPatchCheckFill className='experience__details-icon'/>
                        <div>
                            <h4>Express Js</h4>
                        <small className="text-light" >Intermediate</small></div>
                    </article>
                    <article className="experience__details">
                        <BsPatchCheckFill className='experience__details-icon'/>
                        <div>
                            <h4>Next Js</h4>
                        <small className="text-light" >Intermediate</small></div>
                    </article>
                    <article className="experience__details">
                        <BsPatchCheckFill className='experience__details-icon'/>
                        <div>
                            <h4>MongoDB</h4>
                        <small className="text-light" >Intermediate</small></div>
                    </article>
                    <article className="experience__details">
                        <BsPatchCheckFill className='experience__details-icon'/>
                        <div>
                            <h4>MySQL</h4>
                        <small className="text-light" >Experienced</small></div>
                    </article>
                </div>
            </div>
            {/* Data Science */}
            <div className="experience__dataScience">
            <h3>Data Science</h3>
                <div className="experience__content">
                    <article className="experience__details">
                        <BsPatchCheckFill className='experience__details-icon'/>
                        <div>
                            <h4>Python</h4>
                        <small className="text-light" >Experienced</small></div>
                    </article>
                    <article className="experience__details">
                        <BsPatchCheckFill className='experience__details-icon'/>
                        <div>
                            <h4>Pandas </h4>
                        <small className="text-light" >Experienced</small></div>
                    </article>
                    <article className="experience__details">
                        <BsPatchCheckFill className='experience__details-icon'/>
                        <div>
                            <h4>NumPy </h4>
                        <small className="text-light" >Experienced</small></div>
                    </article>
                    <article className="experience__details">
                        <BsPatchCheckFill className='experience__details-icon'/>
                        <div>
                            <h4>Matplotlib </h4>
                        <small className="text-light" >Intermediate</small></div>
                    </article>
                    <article className="experience__details">
                        <BsPatchCheckFill className='experience__details-icon'/>
                        <div>
                            <h4>AI/ML </h4>
                        <small className="text-light" >Intermediate</small></div>
                    </article>
                    <article className="experience__details">
                        <BsPatchCheckFill className='experience__details-icon'/>
                        <div>
                            <h4>AI Automation</h4>
                        <small className="text-light" >Intermediate</small></div>
                    </article>
                    <article className="experience__details">
                        <BsPatchCheckFill className='experience__details-icon'/>
                        <div>
                            <h4>Scikit-Learn</h4>
                        <small className="text-light" >Intermediate</small></div>
                    </article>
                    <article className="experience__details">
                        <BsPatchCheckFill className='experience__details-icon'/>
                        <div>
                            <h4>TensorFlow & PyTorch </h4>
                        <small className="text-light" >Intermediate</small></div>
                    </article>
                </div>
            </div>
            </div>
       
        </section>
    )
}
export default Experience

import React from "react";
import './about.css'
import ME from '../../Img4.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return(
        <section id="about">
            <h5>Get to Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card" >
                            <FaAward className="about__icon" />
                            <h5>Experience</h5>
                            <small>2+ Years Working</small>
                        </article>
                        <article className="about__card" >
                            <FiUsers className="about__icon" />
                            <h5>Clients</h5>
                            <small>20+ World Wide</small>
                        </article>
                        <article className="about__card" >
                            <VscFolderLibrary className="about__icon" />
                            <h5>Projects</h5>
                            <small>40+ Completed</small>
                        </article>
                    </div>
                    
                    <p>I am a Full Stack Developer with a strong foundation in Python, AI/ML, and AI Automation, passionate about building scalable, intelligent, and user-friendly solutions. Since 2023, I have been leveraging my skills to design and develop applications that combine data-driven intelligence with modern web technologies. With a BS in Computer Science, I bring both academic knowledge and practical expertise to create innovative digital systems. My core strengths include problem-solving, automation, and translating complex requirements into efficient, reliable solutions, and I am eager to explore opportunities where I can contribute, learn, and grow in the fields of AI, automation, and full-stack development.
                    </p>
                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>

        </section>
    )
 }
 export default About

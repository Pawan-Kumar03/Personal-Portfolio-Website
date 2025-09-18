import React from "react";
import './services.css'
import {BiCheck} from 'react-icons/bi'


const Services = () =>{
    return(
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>E-Commerce Development.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Content Management Systems (CMS).</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Responsive Design</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>API Integration.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Front-End Development.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Back-End Development.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>SEO (Search Engine Optimization).</p>
                        </li>
                    </ul>
                </article>
                {/* End OF Web Development */}
                <article className="service">
                    <div className="service__head">
                        <h3>Web Scrapping</h3>
                    </div>
                    <ul className="service__list">
                        
                    <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Social Media Monitoring.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Weather and Forecast Data.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Data Extraction.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Content Aggregation.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Price Monitoring.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Research and Analysis.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Market Intelligence.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Data Enrichment.</p>
                        </li>
                    </ul>
                </article>
                {/* End OF Web Scrapping */}
                <article className="service">
                    <div className="service__head">
                        <h3>Algorithm Development</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Algorithm Design and Development.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Data Structure Design.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Problem Solving.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Cryptography.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Simulation Algorithms.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Graph Algorithms.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Numerical Analysis.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Training and Workshops.</p>
                        </li>
                    </ul>
                </article>
                {/* End OF Algorithm Development */}
                
            </div>
        </section>
    )
}
export default Services
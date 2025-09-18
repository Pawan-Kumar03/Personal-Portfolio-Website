import React from "react";
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {RiMetaLine} from 'react-icons/ri'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () =>{
    return(
        <footer>
            <a href="#" className="footer__logo">PAWANTOGA</a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#certificates">Certificates</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://web.facebook.com/pawan.toga.12?mibextid=ZbWKwL&_rdc=1&_rdr" target="_blank"><FaFacebookF/></a>
                <a href="https://www.instagram.com/pawantoga/?igshid=MzNlNGNkZWQ4Mg%3D%3D"target="_blank"><FiInstagram/></a>
                <a href="https://www.threads.net/@pawantoga"target="_blank"><RiMetaLine/></a>
                <a href="https://www.linkedin.com/in/pawan-kumar-3b1869246/"target="_blank"><BsLinkedin/></a>
            </div>
            <div className="footer__copyright">
                <small>&copy; Pawantoga. All Rights Reserved.</small>
            </div>
        </footer>
    )
}
export default Footer
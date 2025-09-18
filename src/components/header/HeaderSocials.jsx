import React from "react";
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub, FaKaggle} from 'react-icons/fa'
import {FaHackerrank} from 'react-icons/fa'
const HeaderSocials = ()=>{
    return(
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/pawan-kumar-3b1869246/" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/Pawan-Kumar03" target="_blank"><FaGithub/></a>
            <a href="https://www.hackerrank.com/pawantoga03" target="_blank"><FaHackerrank/></a>
            <a href="https://www.kaggle.com/pawantoga" target="_blank"><FaKaggle/></a>
                
        </div>
    )
}

export default HeaderSocials
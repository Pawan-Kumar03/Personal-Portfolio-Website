import React from "react";
import CV from '../../CV_Pawan_Kumar.pdf'
const  CTA = () =>{
    return(
        <div className="cta">
            <a href={CV} download className="btn" >Downlaod CV</a>
            <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
    )
}
export default CTA

import React from "react";
import './contact.css' 
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin, BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailJs from 'emailjs-com'


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailJs.sendForm('service_e4tecvk', 'template_lnq0yhr', form.current, 'xEuA01JKWuCKMtFt1')
        
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
        };
    return(
        <section id="contact">
            <h5>Get In Touch</h5>
             <h2>Contact Me</h2>

             <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon"/>
                        <h4>Email</h4>
                        <h5>pawantoga03@gmail.com</h5>
                        <a href="mailto:pawantoga03@gmail.com"target="_blank">Send a Messgae</a>
                    </article>
                    <article className="contact__option">
    <BsLinkedin className="contact__option-icon"/>
    <h4>LinkedIn</h4>
    <h5>Pawan Kumar</h5>
    <a href="https://www.linkedin.com/in/pawan-kumar-3b1869246/message/" target="_blank">Send a Message</a>
</article>
<article class="contact__option">
    <BsWhatsapp class="contact__option-icon"/>
    <h4>WhatsApp</h4>
    <h5>+92 319 2785627</h5>
    <a href="https://api.whatsapp.com/send?phone=923435456424" target="_blank">Send a Message</a>
</article>

                </div>
                {/* End of Contact Options */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder="Your Full Name" required/>
                    <input type="email" name ='email' placeholder="Your Email" required/>
                    <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
             </div>
        </section>
    )
}
export default Contact
import React from 'react';
import './Footer.css';
import { FaEnvelope, FaGithub, FaLinkedinIn, FaUser } from 'react-icons/fa';
const Footer = () => {
    return (

            <div className='mainFooter'>
                <footer className='referral-wrapper-for-footer'>

                <div className='copy-wrapper-footer'>
                       <div id="copy">
                       </div>
                       <div className="linksFooter">
                           <a href="#"><FaGithub />  Github</a>
                           <a href="#"><FaLinkedinIn/>  LinkedIn</a>
                           <a href="#"><FaUser/>  Website</a>
                           <a href="#"><FaEnvelope/>  Email</a>
                       </div>
                   </div>
                </footer>
            </div>
    );
}

export default Footer;

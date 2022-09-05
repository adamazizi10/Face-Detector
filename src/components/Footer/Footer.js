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
                           <a className='indLinksFooter' href="#"><FaGithub />Github</a>
                           <a className='indLinksFooter' href="#"><FaLinkedinIn/>LinkedIn</a>
                           <a className='indLinksFooter' href="#"><FaUser/>Website</a>
                           <a className='indLinksFooter' href="#"><FaEnvelope/>Email</a>
                       </div>
                   </div>
                </footer>
            </div>
    );
}

export default Footer;

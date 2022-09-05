import React from "react";
import { FaGithub, FaLinkedinIn, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import './SocialMediaBar.css';

const SocialMediaBar = () => {
    return (
        <div className="mf-social-side-list">
            <ul>
                <li>
                    <a href="https://www.linkedin.com" rel="noreferrer" target="_blank">
                        <i><FaLinkedinIn size={'1.8rem'} /></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.github.com" rel="noreferrer" target="_blank">
                        <i className='githubSpecific'><FaGithub color={'white'} size={'2.2rem'} /></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com" rel="noreferrer" target="_blank">
                        <i className="youtubeSpecific"><FaYoutube size={'1.8rem'} /></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com" rel="noreferrer" target="_blank">
                        <i className="instagramSpecific"><FaInstagram size={'1.8rem'} /></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.twitter.com" rel="noreferrer" target="_blank">
                        <i><FaTwitter size={'1.8rem'} /></i>
                    </a>
                </li>

            </ul>
        </div>


    );
}


export default SocialMediaBar;




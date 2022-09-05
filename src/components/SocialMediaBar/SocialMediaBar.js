import React from "react";
import { FaEnvelope, FaGithub, FaLinkedinIn, FaUser, FaInstagram, FaGitSquare, FaYoutube, FaTwitter, FaFacebookF, FaGithubSquare } from 'react-icons/fa';
import './SocialMediaBar.css';

const SocialMediaBar = () => {
    return (
        <div class="mf-social-side-list">
            <ul>
                <li>
                    <a href="https://www.linkedin.com" target="_blank"><i><FaLinkedinIn size={'1.8rem'} /></i></a>
                </li>
                <li>
                    <a href="https://www.github.com" target="_blank"><i className='githubSpecific'><FaGithub color={'white'} size={'2.2rem'} /></i></a>
                </li>
                <li>
                    <a href="https://www.youtube.com" target="_blank"><i><FaYoutube size={'1.8rem'} /></i></a>
                </li>
                <li>
                    <a href="https://www.facebook.com" target="_blank"><i><FaFacebookF size={'1.8rem'} /></i></a>
                </li>
                <li>
                    <a href="https://www.instagram.com" target="_blank"><i><FaInstagram size={'1.8rem'} /></i></a>
                </li>
                <li>
                    <a href="https://www.twitter.com" target="_blank"><i><FaTwitter size={'1.8rem'} /></i></a>
                </li>

            </ul>
        </div>


    );
}


export default SocialMediaBar;




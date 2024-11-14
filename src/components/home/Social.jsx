import React from "react";
import { FiInstagram , FiGithub, FiLinkedin} from "react-icons/fi";


const Social = () => {
    return (
        <div className="home__social">
            <a href="https://www.instagram.com/rengaraj.ks/" className="home__social-icon" target="_blank">
                <FiInstagram  />
            </a>
            <a href="https://github.com/rengarajks" className="home__social-icon" target="_blank">
                <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/rengarajk/" className="home__social-icon" target="_blank">
                <FiLinkedin />
            </a>
        </div> 
    ); 
}

export default Social;
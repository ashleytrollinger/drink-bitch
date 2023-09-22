import React from 'react';
import './Footer.css';
// Importing logos
import github from "../images/githubmark.png";
import instagram from "../images/instagram-icon.png";
import linkedin from "../images/linkedin.png";
export default function Footer() {
    return (
        <footer className="footer">
            <div>
                <a
                    href="https://github.com/ashleytrollinger"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={github}
                        alt="Github"
                        className="logo"
                    ></img>
                </a>
            </div>
            <div>
                <a
                    href="https://linkedin.com/in/ashley-trollinger-a3276826a/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={linkedin}
                        alt="LinkedIn"
                        className="logo"
                    ></img>
                </a>
            </div>
            <div>
                <a
                    href="https://www.instagram.com/ashaleetalotta/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={instagram}
                        alt="Instagram"
                        className="logo"
                    ></img>
                </a>
            </div>
        </footer>
    )
}
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
// Importing logos
import github from "../images/githubmark.png";
import instagram from "../images/instagram-icon.png";
import linkedin from "../images/linkedin.png";
export default function Footer() {
    return (
        <footer className="footer">
      <p>©All right and credits to the UI and concept reserved to Ashley Trollinger. All other credits can be found in the <Link to='/wtf'>WTF</Link> section©</p>
        </footer>
    )
}
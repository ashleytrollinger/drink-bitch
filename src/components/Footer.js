import React from 'react';
import { Link } from 'react-router-dom';
import SIG from '../images/SIG.png';
import './Footer.css';

export default function Footer() {
  return (
    <div className='footer-container'>
      <section className='sig'>
        <img src={SIG} alt='xoxo, Ashley' />
      </section>
      <footer className="footer">
        <p>© All rights and credits to the UI and concept reserved for Ashley Trollinger. All other credits can be found in the <Link to='/wtf'>WTF</Link> section ©</p>
      </footer>
    </div>
  );
}

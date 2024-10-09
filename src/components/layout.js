import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import {
  container,
  heading,
  logo,
  siteName,
  slogan,
  navLinks,
  navLinkItem,
  navLinkText,
  header,
  footer,
  
  mainContent,
} from './layout.module.css';

const Layout = ({ pageTitle,siteName, children }) => {
  return (
    <div className={container}>
      <header className={header}>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
      <img src="src\images\logo.jpg" alt="Site Logo" className={logo} />
        <div>
          <h1 className={siteName}>Bikash Moktan</h1>
          <p className={slogan}>Your slogan goes here</p>
        </div>

   
        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>
                Home
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/about" className={navLinkText}>
                About
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={mainContent}>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
      <footer className={footer}>
        <p>© {new Date().getFullYear()} My Awesome Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;

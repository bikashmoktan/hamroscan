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
  footerColumns,
  footerColumn,
  footerCopyright
} from './layout.module.css';

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <header className={header}>
        <StaticImage
          alt="Logo of South Carolina Association of Nepalese"
          src="../images/logo.jpg"
          className={logo} // Add a class for styling
        />
        <div>
          <h1 className={siteName}>South Carolina Association of Nepalese</h1>
          <p className={slogan}>"Promote welfare of all Nepalese living in South Carolina"</p>
        </div>
        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>Home</Link>
            </li>
           {/*  <li className={navLinkItem}>
              <Link to="/about" className={navLinkText}>About</Link>
            </li> */}
          </ul>
        </nav>
      </header>
      <main className={mainContent}>
        {/* <h1 className={heading}>{pageTitle}</h1> */}
        {children}
      </main>
      <footer className={footer}>
        <div className={footerColumns}>
          <div className={footerColumn}>
            <h3>Contact Us</h3>
            <p>Email: scnepal@gmail.com</p>
            <p>Phone: +57 1 2963676</p>
          </div>
          <div className={footerColumn}>
            <h3>Members</h3>
            <p>President: Suman Upadhaya</p>
            <p>Vice President: Nima Sherpa Yasses</p>
            <p>General Secretary: Rajendra Neupane</p>
          </div>
          <div className={footerColumn}>
            <h3>Follow Us</h3>
            <p><a href="https://www.facebook.com/SCAN.NEPALESE">Facebook</a></p>
            {/* Add more social links as needed */}
          </div>
        </div>
        
      </footer>
      <div className={footerCopyright}>
        <p>© {new Date().getFullYear()} South Carolina Association of Nepalese (SCAN) All rights reserved.</p>
        </div>
    </div>
  );
};

export default Layout;

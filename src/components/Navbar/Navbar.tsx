import React from "react";
import styles from './Navbar.module.css';

const Navbar: React.FC<{}> = () => {
    return (
        <div><nav className="navbar">
        <div className={styles['logo']}><a href="#">Toby Schmidt</a></div>
        <ul>
          <li><a href="#">Webdesign</a></li>
          <li><a href="#">Content</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav></div>
    );
}

export default Navbar;

import React from "react";
import styles from './Navbar.module.css';

const Navbar: React.FC<{}> = () => {
    return (
        <div><nav className={styles['navbar']}>
        <div className={styles['logo']}><a href="#">Jatin</a></div>
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

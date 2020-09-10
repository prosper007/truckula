import React from 'react';
import styles from './Navbar.module.css';

const Navbar = (props) => {
  return (
    <header className={styles.Header}>
      <nav className={styles.NavBar}>
        <h2 className={styles.Brand}><a href='/'>Truckula</a></h2>
        <ul className={styles.NavLinks}>
          <li className={styles.NavLink}><a href='/'>Trucks</a></li>
          <li className={styles.NavLink}><a href='/info'>Info</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;
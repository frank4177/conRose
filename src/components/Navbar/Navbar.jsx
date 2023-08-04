import React from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import { BiLogOut } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <Link to="/dashboard">
          <Logo />
        </Link>
      </div>
      <div>
        <Link to="/" className={styles.logout}>
            <BiLogOut className={styles.icon}/>
          <p>Go out</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

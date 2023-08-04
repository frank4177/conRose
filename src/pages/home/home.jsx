import React from "react";
import styles from "./home.module.css";
import Button from "../../components/Button/Button";
import {BiLogIn} from "react-icons/bi"
import { Link } from "react-router-dom";
import Logo from "../../components/Logo/Logo";

const Home = () => {
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.cont}>
          <div className={styles.container}>
            <div className={styles.textWrap}>
              <Logo/>
              <p className={styles.smallText}>#1 micro finance loan lending company</p>
            </div>

            <Link to="/dashboard" className={styles.btn}>
              <span>Go in</span> <BiLogIn size={25}/>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

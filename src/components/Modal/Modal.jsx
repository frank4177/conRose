"use client";

import React from "react";
import styles from "./modal.module.css";
import { RiCloseCircleFill } from "react-icons/ri";
import { Slide } from "react-awesome-reveal";

const Modal = ({ open, setOpen, children }) => {
  return (
    <>
      <div className={open ? styles.overlay : styles.ov}>
          <Slide direction="down" style={{width:"100%"}} duration={300}>
            <div className={styles.content}>
            <div onClick={() => setOpen(false)} >
              <RiCloseCircleFill className={styles.closeIcon} color="white" />
            </div>

            {children}
            </div>
          </Slide>
      </div>
    </>
  );
};

export default Modal;

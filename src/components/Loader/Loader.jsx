import React from 'react'
import styles from "./loader.module.css"

const Loader = () => {
  return (
    <>
    <div className={styles.loaderWrap}>
        <span className={styles.loader}></span>
    </div>
    </>
  )
}

export default Loader
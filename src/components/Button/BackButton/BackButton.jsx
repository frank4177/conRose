import React from 'react'
import styles from "./BackButton.module.css";
import { useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

const BackButton = () => {
    const navigate = useNavigate()
  return (
    <>
    <div className={styles.back}>
    <BiArrowBack size={30} color='#f19c08' onClick={()=> navigate(-1)}/>
    </div>
    </>
  )
}

export default BackButton
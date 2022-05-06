import React from 'react'
import styles from "../styles/auth.module.css"

export default function Footer() {
  return (
    <div className='bg-dark text-light w-100 py-3 text-center'>
        <p>Designed and built by <a href="https://osaretinfrank.me/" rel='noreferrer' className='text-capitalize mb-1' target={"_blank"}> <span className={styles.info + " d-inline-block py-1 rounded-3 m-0"}>Osariemen Osaretin Frank</span> </a></p>
        <p className='m-0 p-0'>This Project is powered by <span className='text-primary me-1'>Next.Js</span> <span className='text-success me-1'>React.Js</span> <span className='text-warning me-1'>Redux</span> <span className='text-danger me-1'>Google Firebase</span> <span className='text-primary me-1'>Sass</span> <span className='text-success me-1'>CSS Modules</span></p>
        <p className='m-0 p-0'>&copy; 2022</p>
    </div>
  )
}

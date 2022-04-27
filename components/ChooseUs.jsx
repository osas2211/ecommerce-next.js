import React from 'react'
import styles from "../styles/chooseUs.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShippingFast } from '@fortawesome/free-solid-svg-icons'
import { faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons'
import { faSackDollar } from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

export default function ChooseUs() {
  return (
    <div className={styles.choose_us}>
        <p className='text-center mb-5'>Why should you choose us?</p>
        {/*  */}
        <div className="container pt-4">
            <div className="row justify-content-center">
                <div className="col-lg-3 col-md-4 col-6 p-4 text-center justify-content-center align-items-center d-flex flex-column p-md-3">
                        <span className={styles.icon2}><FontAwesomeIcon icon={faShippingFast}/></span>
                        <p className='text-uppercase mt-4 pt-3'>free shipping</p>
                        <p>All purchases over $199 are eligiblae for free shipping via USPS first class Mail.</p>
                </div>
                <div className="col-lg-3 col-md-4 col-6 p-4 text-center justify-content-center align-items-center d-flex flex-column p-md-3">
                        <span className={styles.icon}><FontAwesomeIcon icon={faMoneyCheckDollar}/></span>
                        <p className='text-uppercase mt-4 pt-3'>easy payment</p>
                        <p>All payments are processed instantly over a secure payment protocol.</p>
                </div>
                <div className="col-lg-3 col-md-4 col-6 p-4 text-center justify-content-center align-items-center d-flex flex-column p-md-3">
                        <span className={styles.icon2}><FontAwesomeIcon icon={faSackDollar}/></span>
                        <p className='text-uppercase mt-4 pt-3'>Money-back guarantee</p>
                        <p>If an item arrived damaged or you`ve changed your mind, you can send it back for a full refund.</p>
                </div>
                <div className="col-lg-3 col-md-4 col-6 p-4 text-center justify-content-center align-items-center d-flex flex-column p-md-3">
                        <span className={styles.icon}><FontAwesomeIcon icon={faCheckCircle}/></span>
                        <p className='text-uppercase mt-4 pt-3'>finest quality</p>
                        <p>Designed to last. Each of our product are of the best quality with top-notch manufacturers.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

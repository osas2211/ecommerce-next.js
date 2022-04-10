import React from 'react'
//import styles from "../styles/product.module.css"
import styles from "../styles/card.module.css"
import Image from "next/image"
import Rating from './Rating'
import Link from 'next/link'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ProductCard({img, title, rating, progress, sold}) {
  return (
    <div className={styles.product}>
      <div className={styles.img}>
        <Image src={img} alt="" layout='fill' />
      </div>
      <div className={styles.product_details}>
        <p className={styles.title}>{title}</p>
        <p className={styles.rating}>
          <Rating rating_value={rating} />
        </p>
        <div className='mb-3'>
          <span className={` fw-bold ${styles.amount}`}>$199</span>
          <span className='px-3 text-muted'><strike>$259</strike></span>
        </div> 
        <div className="progress" style={{height: "5px"}}>
          <div className="progress-bar bg-danger" style={{width: progress}}  role={"progressbar"} aria-valuenow={"25"} aria-valuemin={"0"} aria-valuemax={"100"}></div>
        </div>
        <div className={styles.sold}>
          <p>Sold: 103/157</p>
        </div>
        <div className={styles.heart}><FontAwesomeIcon icon={faHeart}/></div>
      </div>
      
      <Link href="/"><a className='btn-custom-1'>add to card</a></Link>
    </div>








    // <div className={styles.product + " col-md-4 col-lg-3 col-10 mx-4 mx-md-0 my-3"}>
    //     <div className={styles.img}>
    //         <Image src={img} alt="" layout='fill' />
    //     </div>
    //     <div className={styles.product_details}>
    //         <small className='text-uppercase mt-4 d-block'>Accessories</small>
    //         <small className='text-uppercase fw-bold d-block mt-2 mb-3'>modern beat nine</small>
    //         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, error?</p>
    //         <div className='mb-3'>
    //             <span className='text-primary fw-bold'>$199</span>
    //             <span className='px-3 text-muted'><strike>$259</strike></span>
    //         </div>
    //     </div>
    //     <div className={styles.absolute}>
            
    //     </div>
    //     <a href="" className={styles.btn}>learn more</a>
    //     <a href="" className={styles.btn_}>add to cart</a>
    // </div>
  )
}

import React from 'react';
import styles from "../../styles/card2.module.css";
import Image from "next/image";
import Link from "next/link"
import Rating from '../Rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

export default function ProductCardSmall({img, title, rating}) {
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
          <div className={styles.heart}><FontAwesomeIcon icon={faCartPlus}/></div>
        </div>
        
        {/* <Link href="/"><a className='btn-custom-1'>add to card</a></Link> */}
      </div>
    )
}
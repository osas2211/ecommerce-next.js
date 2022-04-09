import React from 'react'
import styles from "../styles/product.module.css"

import Image from "next/image"

export default function ProductCard({img}) {
  return (
    <div className={styles.product + " col-md-4 col-lg-3 col-10 mx-4 mx-md-0 my-3"}>
        <div className={styles.img}>
            <Image src={img} alt="" layout='fill' />
        </div>
        <div className={styles.product_details}>
            <small className='text-uppercase mt-4 d-block'>Accessories</small>
            <small className='text-uppercase fw-bold d-block mt-2 mb-3'>modern beat nine</small>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, error?</p>
            <div className='mb-3'>
                <span className='text-primary fw-bold'>$199</span>
                <span className='px-3 text-muted'><strike>$259</strike></span>
            </div>
        </div>
        <div className={styles.absolute}>
            
        </div>
        <a href="" className={styles.btn}>learn more</a>
        <a href="" className={styles.btn_}>add to cart</a>
    </div>
  )
}

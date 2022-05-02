import React from 'react'
import styles from "../styles/featured2.module.css"
import Rating from './Rating'
import Image from "next/image"
import img from "../images/product-127.jpg"
import img2 from "../images/product-130.jpg"
import img3 from "../images/product-125.jpg"
import img4 from "../images/product-7.jpg"
import Link from 'next/link'
import ProductCardSmall from './product/ProductCardSmall'

export default function Featured() {
  return (
    <div className={styles.featured}>
      <h3>Top Featured Products</h3>
      <div className={styles.featured_detail}>
        <div className={styles.one}>
          <div className={styles.img}>
            <Image src={img} alt="" layout='fill' />
          </div>

          <div className={styles.product_details}>
            <p className={styles.title}>Unlocked gallaxy mobile phone.</p>
            <p className={styles.rating}>
              <Rating rating_value={3} />
            </p>
            <div className='mb-3'>
              <span className={` fw-bold ${styles.amount}`}>$199</span>
              <span className='px-3 text-muted'><strike>$259</strike></span>
            </div>
            <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium unde aliquam sequi quidem est saepe dolores aperiam minima distinctio omnis Lorem ipsum dolor sit.</p>
            <Link href={"/"}><a className='btn-custom-1'>add to cart</a></Link>
          </div> 
        </div>
        <ProductCardSmall img={img} title="a80 pro 4g unlocked cell phones" rating={3}/>
        <ProductCardSmall img={img2} title="a80 pro 4g unlocked cell phones" rating={3}/>
        <ProductCardSmall img={img4} title="a80 pro 4g unlocked cell phones" rating={3}/>
        <ProductCardSmall img={img3} title="a80 pro 4g unlocked cell phones" rating={3}/>
      </div>
    </div>
  )
}

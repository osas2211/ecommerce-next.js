import React from 'react'
import styles from "../styles/hero.module.css"
import one from "../images/hero-big.png"
import two from "../images/banner1.jpg"
import three from "../images/lens3.jpg"
import four from "../images/gamepad2.jpg"
import Image from 'next/image'
import Link from 'next/link'
export default function Hero() {
  return (
    <div className={styles.hero}>
        <div className={styles.one}>
            <div className={styles.hero_img}>
                <Image src={one} alt="" layout='responsive'/>
            </div>

            <div className={styles.info}>
                <small>New Arrivals</small>
                    <h1>GEAR 360</h1>
                    <h1>WEEK DEALS</h1>
                    <p>Top Quality Gadgets and Accessories</p>
                    <Link href={"/collections/gadgets"}><a className='btn-custom-4'>Discover Now</a></Link>
                </div>
        </div>
        <Link href={"/collections/gadgets"} passHref>
            <div className={styles.two}>
                <div className={styles.hero_img}>
                    <Image src={two} alt="" layout='responsive'/>
                </div>
                <div className={styles.info}>
                    <h5>New Style Bluetooth Speaker</h5>
                    <p>Free 20km shipping</p>
                </div>
            </div>
        </Link>
        <Link href={"/collections/gadgets"} passHref>
            <div className={styles.three}>
                <div className={styles.hero_img}>
                    <Image src={three} alt="" layout='responsive'/>
                </div>
                <div className={styles.info}>
                    <h5>Limited Top Camera</h5>
                    <p>Top Quality Product</p>
                </div>
            </div>
        </Link>
        <div className={styles.four}>
            <div className={styles.head}>
                <small>Hot sale</small>
                <p>Xbox Wireless</p>
                <h4>Sale Up to 50% Off</h4>
            </div>
            <div className={styles.hero_img}>
                <Image src={four} alt="" layout='responsive'/>
            </div>
            <div className={styles.bottom}>
                <a href="#" className="btn-custom-3">shop Now</a>
            </div>
        </div>
    </div>
  )
}

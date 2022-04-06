import React from 'react'
import styles from "../styles/featured.module.css"
import Image from 'next/image'
import product1 from "../images/product-87.jpg"
import product2 from "../images/product-118.jpg"
import product3 from "../images/product-90.jpg"

export default function Featured() {
  return (
    <>
        <h3 className={styles.featured_header +' text-uppercase text-center py-5 text-bold mb-0'}>featured products</h3>
        <div className={styles.featured + " d-block d-lg-flex mb-5"}>
            <div className={styles.featured_item + " text-center px-5"}>
                <div className="featured-item-head mt-3">
                    <small className="text-uppercase text-primary">Modern edition</small>
                    <h5 className='fw-bold text-uppercase'>ipsum dolor sit</h5>
                    <small>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente suscipit magni officiis?
                    </small>
                </div>

                <div className={styles.featured_item_img}>
                    <Image src={product1} alt="" layout='fill'/>
                </div>

                <p className="featured-item-price text-uppercase my-3">
                    from <span className='fw-bold text-primary'>$19.99</span>
                </p>

                <div className={styles.product_absolute}>
                    <a href="#" className={styles.btn_show + " btn-custom-1 center-y"}>Learn more</a>
                </div>
            </div>

            <div className={styles.featured_item + " text-center px-5"}>
                <div className="featured-item-head mt-3">
                    <small className="text-uppercase text-primary">Modern edition</small>
                    <h5 className='fw-bold text-uppercase'>ipsum dolor sit</h5>
                    <small>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis saepe aperiam quae.
                    </small>
                </div>

                <div className={styles.featured_item_img}>
                    <Image src={product2} alt="" layout='fill'/>
                </div>

                <p className="featured-item-price text-uppercase my-3">
                    from <span className='fw-bold text-primary'>$19.99</span>
                </p>

                <div className={styles.product_absolute}>
                    <a href="#" className={styles.btn_show + " btn-custom-1 center-y"}>Learn more</a>
                </div>
            </div>

            <div className={styles.featured_item + " text-center px-5"}>
                <div className="featured-item-head mt-3">
                    <small className="text-uppercase text-primary">Modern edition</small>
                    <h5 className='fw-bold text-uppercase'>ipsum dolor sit</h5>
                    <small>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat corporis praesentium pariatur.
                    </small>
                </div>

                <div className={styles.featured_item_img}>
                    <Image src={product3} alt="" layout='fill'/>
                </div>

                <p className="featured-item-price text-uppercase my-3">
                    from <span className='fw-bold text-primary'>$19.99</span>
                </p>

                <div className={styles.product_absolute}>
                    <a href="#" className={styles.btn_show + " btn-custom-1 center-y"}>Learn more</a>
                </div>
            </div>
            
        </div>
    </>
  )
}

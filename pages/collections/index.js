import React from 'react'
import styles from "../../styles/collections.module.css"
import Category from '../../components/Category'
import phones from "../../images/c-phones.jpg"
import laptops from "../../images/c-laptops.jpg"
import gadgets from "../../images/c-gadgets.jpg"
import watches from "../../images/c-watches.jpg"
import Head from 'next/head'


export default function Collections() {
  return (
    <>
    <Head>
      <title>Collections - EazyShop</title>
    </Head>
      <div className='my-5 text-dark pt-5 container'>
        <h2 className='text-center text-uppercase mt-5'>Collections</h2>
        <p className='text-center mt-5'>Our Unique Collections</p>
        <div className='row mt-4 align-items-center justify-content-ceter'>
          <Category styles={styles} image={phones} category={"phones"} />
          <Category styles={styles} image={laptops} category={"laptops"} />
          <Category styles={styles} image={watches} category={"watches"} />
          <Category styles={styles} image={gadgets} category={"gadgets"} />
        </div>
      </div>
    </>
  )
}
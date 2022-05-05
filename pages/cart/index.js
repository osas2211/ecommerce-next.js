import React from 'react'
import styles from "../../styles/cart.module.css"
import Head from 'next/head'
import CartCard from '../../components/product/cartCard'

export default function Cart() {
  return (
    <div className={styles.cart}>
        <Head>
            <title>EazyShop - Cart</title>
        </Head>
        <div className='container'>
            <div className={"row justify-content-between"}>
                <div className={styles.cart_items + " col-12 col-md-8"}>
                    <header>
                        <p className='p-2 text-uppercase m-0'>Cart (0)</p>
                    </header>
                    <div>
                        <CartCard />
                        <CartCard />
                        <CartCard />
                    </div>
                </div>

                <div className={styles.cart_summary + " col-12 col-md-3"}>
                    <p className='p-2 text-uppercase m-0'>Cart summary</p>
                    <div className={styles.hr}></div>
                </div>
            </div>
        </div>
    </div>
  )
}

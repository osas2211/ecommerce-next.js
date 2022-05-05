import React from 'react'
import styles from "../../styles/cart.module.css"
import Head from 'next/head'
import CartCard from '../../components/product/cartCard'
import { useSelector } from 'react-redux'

export default function Cart() {
    const cart = useSelector(state => state.cart)
  return (
    <div className={styles.cart}>
        <Head>
            <title>EazyShop - Cart</title>
        </Head>
        <div className='container'>
            <div className={"row justify-content-between"}>
                <div className={styles.cart_items + " col-12 col-md-8"}>
                    <header>
                        <p className='p-2 text-uppercase m-0'>Cart ({cart.counter})</p>
                    </header>
                    <div>
                        {
                            cart.products.length !==0 ? cart.products.map(product => (
                                <CartCard 
                                    key={product.id} 
                                    image={product.image} 
                                    count={product.count} 
                                    id={product.id}
                                    amount={product.amount}
                                    title = {product.title}
                                /> 
                            ))
                            : 
                            <p className='text-center mt-5 h6 text-muted text-uppercase'>No Item Available in cart</p>
                        }
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

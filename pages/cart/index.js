import React from 'react'
import styles from "../../styles/cart.module.css"
import Head from 'next/head'
import Link from "next/link"
import CartCard from '../../components/product/cartCard'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'



export default function Cart() {
    const cart = useSelector(state => state.cart)
  return (
    <div className={styles.cart}>
        <Head>
            <title>EazyShop - Cart</title>
        </Head>
        <div className='container'>
            <div className={"row justify-content-between align-items-start"}>
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
                                    category = { product.category }
                                /> 
                            ))
                            : 
                            <p className='text-center mt-5 h6 text-muted text-uppercase'>No Item Available in cart</p>
                        }
                    </div>
                </div>

                <div className={" col-12 col-md-3 mt-5 mt-md-0"}>
                    <div className={styles.cart_summary + " px-2"}>
                        <p className='p-2 text-uppercase m-0'>Cart summary</p>
                        <div className={styles.hr}></div>
                        <div className='d-flex mt-2 justify-content-between align-items-center'>
                            <small className='p-2 pb-0 text-uppercase m-0 d-block'>Subtotal</small>
                            <p className='px-2 text-uppercase m-0 fw-bold'>$ {cart.total_amount}</p>
                        </div>
                        <small className='p-2 m-0 fw-light d-block'>Delivery fees not included yet.</small>
                        <div className={styles.hr}></div>
                        {
                            cart.total_amount == 0 ? <></> : 
                            <Link href={"/"}>
                                <a>
                                    <Button className='text-light fw-light w-100 text-uppercase mt-2'>checkout ($ {cart.total_amount})</Button>
                                </a>
                            </Link>
                        }
                    </div>

                    <div className={styles.cart_summary + " p-3 mt-3"}>
                        <p className='mb-2 p-0'>Returns are easy</p>
                        <small className='fw-light'>
                            Free return within 15 days for Official Store items and 7 days for other eligible items
                        </small>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

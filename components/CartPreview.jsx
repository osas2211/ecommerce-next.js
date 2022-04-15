import React from 'react'
import reactDom from 'react-dom'
import styles from "../styles/cartPreview.module.css"
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from "next/link"
import Image from "next/image"
import { useCart } from '../context/CartContext'
import { actions } from '../context/CartContext'
import CartPreviewItem from './cartPreviewItem'

export default function CartPreview({cartToggle}) {
    const [state,dispatch ] = useCart()
    
    if (document.body){
        return reactDom.createPortal(
            <div className={styles.cart}>
                <div className={styles.header}>
                    <p className='fw-bold'>My Cart</p>
                    <a onClick={cartToggle}>&#10005;</a>
                </div>

                { state.counter === 0 ?
                    <div className={styles.empty}>
                        <span className={styles.empty_cart}><FontAwesomeIcon icon={faXmarkCircle} /></span>
                        <p className='text-center text-capitalize mt-4'>Your cart is empty</p>
                        <Link href="/"><a className='btn-custom-1'>Return To Shop</a></Link>
                    </div>
                    :
                    <div className={styles.body}>

                        {
                            state.products.map((product, num)=>{
                                return(
                                    <CartPreviewItem key={product.id} product={product} count={product.count}/> 
                                )
                            })
                        }
                    </div>
            }
            </div>, document.body
          ) 
    }
    document.body 
  
}

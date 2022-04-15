import React from 'react'
import styles from "../styles/cartPreview.module.css"
import Image from "next/image"
import { useCart } from '../context/CartContext'
import { actions } from '../context/CartContext'

export default function CartPreviewItem({product}) {
    const [,dispatch ] = useCart()
    const del = ()=>{
        dispatch({type: actions.DELETE_ITEM, payload: {id: product.id, count:product.count}})
    }
  return (
    <div>
        <div className={styles.product}>
            <div className={styles.img}>
                <Image src={product.image} alt="" layout='fill'/>
            </div>
            <div className={styles.info}>
                <p className=' text-primary my-0'>{product.title}</p>
                <small className='fw-bold'>${product.amount}</small><span>x {product.count}</span>
            </div>
            <div className={styles.delete} onClick={del}>&#10005;</div>
        </div>
    </div>
  )
}

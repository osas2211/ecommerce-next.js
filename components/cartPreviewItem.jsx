import React from 'react'
import styles from "../styles/cartPreview.module.css"
import Image from "next/image"
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../redux/stateSlices/cartSlice'

export default function CartPreviewItem({product}) {
    const dispatch = useDispatch()
    const del = ()=>{
        dispatch({type: removeFromCart, payload: {id: product.id, count:product.count, amount:product.amount}})
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

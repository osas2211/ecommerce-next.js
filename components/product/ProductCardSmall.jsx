import React from 'react';
import styles from "../../styles/card2.module.css";
import Image from "next/image";
import Link from "next/link"
import Rating from '../Rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/stateSlices/cartSlice'

export default function ProductCardSmall({img, title, rating, amount, id, count, category, brand}) {
  const payload_data = {
    count: 1,
    title: title,
    image: img,
    amount: amount,
    id: id,
    product_count: 1,
    category: category,
    brand: brand
  }
  const dispatch = useDispatch()
  const add = ()=>{
    dispatch({type: addToCart, payload:payload_data})
  }
    return (
      <div className={styles.product}>
        <div className={styles.img}>
          <Image src={img} alt="" layout='fill' />
        </div>
        <div className={styles.product_details}>
          <Link href={`/collections/${category}/${id}`}><a className={styles.title}>{title.slice(0,40) +"..."}</a></Link>
          <p className={styles.rating}>
            <Rating rating_value={rating} />
          </p>
          <div className='mb-3'>
            <span className={` fw-bold ${styles.amount}`}>${amount}</span>
            <span className='px-3 text-muted'><strike>${Math.floor(amount*1.2)}</strike></span>
          </div> 
          <div className={styles.heart} onClick={add}><FontAwesomeIcon icon={faCartPlus}/></div>
        </div>
        
        {/* <Link href="/"><a className='btn-custom-1'>add to card</a></Link> */}
      </div>
    )
}
import React from 'react'
import styles from "../../styles/card.module.css"
import Image from "next/image"
import Rating from '../Rating'
import Link from 'next/link'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/stateSlices/cartSlice'

export default function ProductCard({img, title, rating, progress, amount, id, count, category, brand}) {
  const dispatch = useDispatch()
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
  const add = ()=>{
    dispatch({type: addToCart, payload:payload_data})
  }
  return (
    <div className={styles.product_ + " rounded-3"}>
      <div className={styles.img}>
        <Image src={img} alt="" layout='fill' />
      </div>
      <div className={styles.product_details}>
        <Link href={`/collections/${category}/${id}`}><a className={styles.title}>{title}</a></Link>
        <p className={styles.rating}>
          <Rating rating_value={rating} />
        </p>
        <div className='mb-3'>
          <span className={` fw-bold ${styles.amount}`}>${amount}</span>
          <span className='px-3 text-muted'><strike>${Math.floor(amount*1.2)}</strike></span>
        </div> 
        <div className={styles.heart}><FontAwesomeIcon icon={faHeart}/></div>
      </div>
      
      <a className='btn-custom-1 w-100 text-center' onClick={add}>add to cart</a>
      <Link href={`/collections/${category}/${id}`}><a className='btn-custom-2 mt-2 w-100 text-center'>view details</a></Link>
    </div>
  )
}

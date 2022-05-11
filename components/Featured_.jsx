import React from 'react'
import styles from "../styles/featured2.module.css"
import Rating from './Rating'
import Image from "next/image"
import img from "../images/phone2.jpg"
import img2 from "../images/phone3.jpg"
import img3 from "../images/phone4.jpg"
import img4 from "../images/phone1.jpg"
import Link from 'next/link'
import { products } from "../dummyData/products"
import ProductCardSmall from './product/ProductCardSmall'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/stateSlices/cartSlice'

export default function Featured() {
  const dispatch = useDispatch()
  return (
    <div className={styles.featured +" svg-background"}>
      <h3>Top Featured Products</h3>
      <div className={styles.featured_detail}>
        <div className={styles.one}>
          <div className={styles.img}>
            <Image src={products.laptops[2].image} alt="" layout='fill' />
          </div>

          <div className={styles.product_details + " pt-0"}>
            <p  className={styles.title + " p-0"}><Link href={`/collections/${products.laptops[2].category}/${products.laptops[2].id}`}><a className='p-0'>{products.laptops[2].name}</a></Link></p>
            <p className={styles.rating}>
              <Rating rating_value={products.laptops[2].rating} />
            </p>
            <div className='mb-3'>
              <span className={` fw-bold ${styles.amount}`}>${products.laptops[2].amount}</span>
              <span className='px-3 text-muted'><strike>${products.laptops[2].amount*1.2}</strike></span>
            </div>
            <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium unde aliquam sequi quidem est saepe dolores aperiam minima distinctio omnis Lorem ipsum dolor sit.</p>
            <a className='btn-custom-1' style={{cursor: "pointer"}}
              onClick ={()=> {
                dispatch({type: addToCart, payload:{
                  count: 1,
                  title: products.laptops[2].name,
                  image: products.laptops[2].image,
                  amount: products.laptops[2].amount,
                  id: products.laptops[2].id,
                  product_count: 1,
                  category: products.laptops[2].category,
                  brand:products.laptops[2].brand
                }})
              }}
            >add to cart</a>
          </div> 
        </div>
        <ProductCardSmall img={products.phones[7].image} title={products.phones[7].name} rating={products.phones[7].rating} category={products.phones[7].category} id={products.phones[7].id} brand={products.phones[7].brand} amount={products.phones[7].amount}/>
        <ProductCardSmall img={products.watches[7].image} title={products.watches[7].name} rating={products.watches[7].rating} category={products.watches[7].category} id={products.watches[7].id} brand={products.watches[7].brand} amount={products.watches[7].amount}/>
        <ProductCardSmall img={products.gadgets[5].image} title={products.gadgets[5].name} rating={products.gadgets[5].rating} category={products.gadgets[5].category} id={products.gadgets[5].id} brand={products.gadgets[5].brand} amount={products.gadgets[5].amount}/>
        <ProductCardSmall img={products.laptops[7].image} title={products.laptops[7].name} rating={products.laptops[7].rating} category={products.laptops[7].category} id={products.laptops[7].id} brand={products.laptops[7].brand} amount={products.laptops[7].amount}/>
      </div>
    </div>
  )
}

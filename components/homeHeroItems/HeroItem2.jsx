import React from 'react'
import Image from 'next/image'
import { useCart, actions } from '../../context/CartContext'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/stateSlices/cartSlice'
import Link from 'next/link'

export default function HeroItem2({img, title, rating, progress, sold, amount, id, count, brand, category, styles}) {
    const payload_data = {
        count: 1,
        title: title,
        image: img,
        amount: amount,
        id: id,
        product_count: 1,
        brand: brand,
        category: category
      }
    const dispatch = useDispatch()
    const add = ()=>{
        dispatch({type: addToCart, payload: payload_data})
      }
  return (
    <>
          <section className={styles.home_hero + " d-lg-flex d-md-block justify-content-between align-items-center container mt-5 pt-3 pb-3"}>
            <div className="img align-self-center justify-self-center me-5">
              <Image src={img} alt="" layout="fill"/>
            </div>
            <div className="hero-item-detail mb-5 mb-lg-0">
              <small className="fw-bold text-uppercase">-18% off</small>
              <p className="display-1 text-uppercase fw-bolder">Smart watchs in our store</p>
              <span className="line"></span>
              <p className="pe-lg-5 mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci quae temporibus totam laudantium dolor expedita repellat exercitationem dignissimos delectus.</p>
              <p className="text-uppercase mb-0">starting from <span>${amount}</span></p>
              <div className="pt-3">
              <Link href={"/collections/watches/"+id}><a className="btn-custom-2 me-3">Learn more</a></Link>
                <a href="#" onClick={add} className="btn-custom-1">Add to cart</a>
              </div>
          </div>

        </section>
    </>
  )
}

import React from 'react'
import Image from 'next/image'
import { useCart, actions } from '../../context/CartContext'

export default function HeroItem1({img, title, rating, progress, sold, amount, id, count, styles}) {
    const payload_data = {
        count: 1,
        title: title,
        image: img,
        amount: amount,
        id: id,
        product_count: 1
      }
    const [state, dispatch] = useCart()
    const add = ()=>{
        dispatch({type: actions.ADD_TO_CART, payload: payload_data})
      }
  return (
    <>
        <section className={styles.home_hero + " d-lg-flex d-md-block justify-content-between align-items-center container mt-5 pt-3 pb-3"}>
            <div className="hero-item-detail mb-5 mb-lg-0">
              <small className="fw-bold text-uppercase">-25% off</small>
              <p className="display-1 text-uppercase fw-bolder">smart phones in our store</p>
              <span className="line"></span>
              <p className="pe-lg-5 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ratione, quae a reiciendis provident optio. Ipsam rerum accusantium porro ut quam?</p>
              <p className="text-uppercase mb-0">starting from <span>${amount}</span></p>
              <div className="pt-3">
                <a href="" className="btn-custom-2 me-3">Learn more</a>
                <a href="#" onClick={add} className="btn-custom-1">Add to cart</a>
              </div>
            </div>

            <div className="img align-self-center justify-self-center">
              <Image src={img} alt="" layout="fill"/>
            </div>
          </section>
    </>
  )
}

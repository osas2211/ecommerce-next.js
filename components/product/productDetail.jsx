import React from 'react'
import styles from "../../styles/product_detail.module.css"
import { Container, Button } from 'react-bootstrap'
import phone1 from "../../images/phone2.jpg"
import Rating from '../Rating'
import Image from "next/image"
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/stateSlices/cartSlice'

export default function ProductDetail({ product }) {
    const [countState, setCountState] = React.useState(()=> 0);
    const increaseCount = ()=>{
        setCountState((prevState)=> prevState+1)
    }
    const decreaseCount = ()=>{
        setCountState((prevState)=> prevState > 0 ? prevState-1 : prevState)
    }

    const payload_data = {
        count: countState,
        title: product.name,
        image: product.image,
        amount: product.amount,
        id: product.id,
        product_count: countState,
        brand: product.brand,
        category: product.category
      }

    const dispatch = useDispatch()
    const handleAddToCart = (e)=>{
        e.preventDefault()
        countState > 0 &&  dispatch({type: addToCart, payload: payload_data})
        setCountState(0) 
    }
  return (
    <div className={styles.product}>
        <Container>
            <div className="d-block d-md-flex">
                <div className={styles.img}>
                    <Image src={product.image} alt="" layout='responsive'/>
                </div>
                <div className={styles.details +" ms-lg-5 my-5 my-lg-0"}>
                    <p className={"text-primary h3 fw-light"}>{product.name}</p>
                    <div className={styles.rating}>
                        <Rating rating_value={product.rating}/>
                        <small className='ms-3 text-muted'>{product.rating} Reviews</small>
                    </div>
                    <p className="my-3 h3">${product.amount}</p>
                    <div className={styles.hr}></div>
                    <p>Availability: <span className='text-primary'>In stock</span></p>
                    <small className='font-light'>Typi non habent claritatem insitam est usus legentis in qui facit orum claritatem lectores legere me lius quod legunt saepius. Sit amet conse ctetur adipisicing elit sed do eiusmod tempor.</small>
                    <div className={styles.add + " my-4"}>
                        <p className='bg-dark text-light d-inline-block m-0'>
                            <span className='text-dark me-3 h4 bg-warning py-1 px-3 fw-bold' onClick={decreaseCount}>-</span> 
                            {countState} 
                            <span className='text-dark ms-3 h4 bg-warning py-1 px-3 fw-bold' onClick={increaseCount}>+</span>
                        </p>
                        <a onClick={handleAddToCart} href='' className='btn btn-primary text-light text-uppercase w-75 text-center ms-4'>add to cart</a>
                    </div>

                    <div className={styles.wishlist}>
                        <small className='text-capitalize'><span><FontAwesomeIcon icon={faHeart}/></span> add to wish list</small>
                    </div>
                    <div className={styles.hr + " my-4"}></div>
                    <p>Categories: <small className='text-muted text-capitalize'>{`${product.category}  ${product.brand}`}</small></p>
                </div>
            </div>
        </Container>
    </div>
  )
}

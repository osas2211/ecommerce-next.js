import React from 'react'
import phone1 from "../../images/iphone12-max.png"
import Image from 'next/image'
import styles from "../../styles/cart.module.css"
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export default function CartCard() {
    const [countState, setCountState] = React.useState(()=> 0);
    const increaseCount = ()=>{
        setCountState((prevState)=> prevState+1)
    }
    const decreaseCount = ()=>{
        setCountState((prevState)=> prevState > 0 ? prevState-1 : prevState)
    }
  return (
    <>
        <Link href={"/collections/gadgets/products"}>
            <a>
                <div className={styles.hr}></div>
                <div className='p-3 d-flex  pb-1 justify-content-between'>
                    <div className={styles.img}>
                        <Image src={phone1} alt="" layout='responsive' />
                    </div>
                    <div className={styles.details + " w-75"}>
                        <p className='m-0'>A80 Pro 4G Unlocked Cell Phones</p>
                        <div>
                            <small className='text-muted'>Brand:</small>
                            <small className='ms-1'>Iphone</small>
                        </div>
                        <div className='mt-1'>
                            <p className='small m-0'>EazyShop <span className='text-primary'>Express</span></p>
                            <small className='text-muted d-none d-md-block'>
                                EazyShop Express items in your order will be delivered for free.
                            </small>
                        </div>
                    </div>
                    <div>
                        <p className='fw-bold'>$5000</p>
                    </div>
                </div>
            </a>
        </Link>
        <div className='p-3 d-flex align-items-center justify-content-between'>
            <span className='text-primary'><FontAwesomeIcon icon={faTrash}/> <small>REMOVE</small></span>
            <div className={styles.add + " "}>
                <p className='bg-dark text-light d-inline-block m-0'>
                    <span className='text-dark me-3 h4 bg-warning py-1 px-3 fw-bold' onClick={decreaseCount}>-</span> 
                    {countState} 
                    <span className='text-dark ms-3 h4 bg-warning py-1 px-3 fw-bold' onClick={increaseCount}>+</span>
                </p>
            </div>
        </div>
    </>
  )
}

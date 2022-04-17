import React from 'react'
import Link from 'next/link'
import styles from "../styles/header.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faSignIn } from '@fortawesome/free-solid-svg-icons'
import Info from './Info'
import { useCart } from '../context/CartContext'
import CartPreview from './CartPreview'



export default function Header() {
  const [cartVisibility, setCartVisibility] = React.useState(false)
  const cartToggleShow = (e)=>{
    cartVisibility ? setCartVisibility(false): setCartVisibility(true)
  }
  const [cart,] = useCart()
  return (
    <section className={styles.main_header + ' '}>
      <Info />
      <div className='px-5 pt-3 text-capitalize bg-white d-md-flex d-none  justify-content-between align-items-center'>
      <ul className={styles.list}>
            <li className='me-4'><a href="#">home</a></li>
            <li className='me-4'><a href="#">services</a></li>
            <li className='me-4'><a href="#">about</a></li>
            <li><a href="#">contact</a></li>
        </ul>

        <p className="logo">Eazy<span>Shop</span></p>

        <ul className={styles.list}>
            <li className='me-4 fw-bold'>USD</li>
            <li className='me-4'><a><FontAwesomeIcon icon={faSignIn}/></a></li>
            <li className={styles.cart + ' me-4'} onClick={cartToggleShow}><a><FontAwesomeIcon icon={faCartShopping}/></a>
              <span>{cart.counter}</span>
            </li>
            <li className='me-4'><a><FontAwesomeIcon icon={faSearch}/></a></li>
            <li className='fw-bold'>${cart.total_amount}</li>
            
        </ul>
      </div>

    {cartVisibility && <CartPreview cartToggle={cartToggleShow}/>}
    </section>
  )
}

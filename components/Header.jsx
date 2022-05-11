import React from 'react'
import Link from 'next/link'
import styles from "../styles/header.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faSignIn } from '@fortawesome/free-solid-svg-icons'
import Info from './Info'
import CartPreview from './CartPreview'
import { useSelector } from 'react-redux'
import { Nav, Container, Navbar } from 'react-bootstrap'



export default function Header() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const [cartVisibility, setCartVisibility] = React.useState(false)
  const cartToggleShow = (e)=>{
    cartVisibility ? setCartVisibility(false): setCartVisibility(true)
  }
  const cart = useSelector(state=> state.cart)
  return (
    <section className={styles.main_header + ' '}>
      <Info />
      <div className='px-5 pt-3 text-capitalize bg-white d-md-flex d-none  justify-content-between align-items-center'>
        <ul className={styles.list}>
            <li className='me-4'><Link href={"/"}><a>home</a></Link></li>
            <li className='me-4'><Link href={"/collections"}><a>collections</a></Link></li>
            <li className='me-4'><a href="https://osaretinfrank.me/" rel='noreferrer' target={"_blank"}>about</a></li>
            <li><a href="https://osaretinfrank.me/" rel='noreferrer' target={"_blank"}>contact</a></li>
        </ul>

        <p className="logo">Eazy<span>Shop</span></p>

        <ul className={styles.list}>
            <li className='me-4 fw-bold'>USD</li>
            <li className='me-4'><Link href={"/search"}><a><FontAwesomeIcon icon={faSearch}/></a></Link></li>
            <li className='me-4'>{
              isLoggedIn ? <Link href={"/customer/account/dashboard"}><a className={styles.online}><FontAwesomeIcon icon={faUser}/></a></Link> :
              <Link href={"/customer/account/login"}><a className='d-inline-block bg-dark text-light px-1 border border-2 rounded'><FontAwesomeIcon icon={faSignIn}/><span className='ps-1'>Login</span></a></Link>
              
              }</li>
            <li className={styles.cart + ' me-4'} onClick={cartToggleShow}><a><FontAwesomeIcon icon={faCartShopping}/></a>
              <span>{cart.counter}</span>
            </li>
            <li className='fw-bold'>${cart.total_amount}</li>
            
        </ul>
      </div>

    {cartVisibility && <CartPreview cartToggle={cartToggleShow} onHide={cartToggleShow}/>}


    <Navbar bg="light" expand="lg" className='d-md-none'>
    <Container>
      <Navbar.Brand href="/"><p className="logo p-0 m-0">Eazy<span>Shop</span></p></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Link href={"/"}><a className='text-capitalize mb-1'>home</a></Link>
          <Link href={"/collections"}><a className='text-capitalize mb-1'>collections</a></Link>
          <a href="https://osaretinfrank.me/" rel='noreferrer' className='text-capitalize mb-1' target={"_blank"}>about</a>
          <Link href={"/search"}><a className='text-capitalize mb-1'>search</a></Link>
          <a href="https://osaretinfrank.me/" rel='noreferrer' className='text-capitalize mb-1' target={"_blank"}>contact</a>
          {
            isLoggedIn ? <Link href={"/customer/account/dashboard"}><a className='text-capitalize mb-1'>Profile</a></Link> :
            <Link href={"/customer/account/login"}><a className='text-capitalize mb-1'>Login</a></Link>
          }
          <p className={styles.cart + ' me-4 mb-4 fw-bold'} onClick={cartToggleShow}><a>Preview Cart</a>
              <span className='mt-2 bg-primary'>{cart.counter}</span>
          </p>
          <p className='fw-bold '>${cart.total_amount}</p>
        </Nav>
      </Navbar.Collapse>
    </Container>
</Navbar>
    </section>
  )
}

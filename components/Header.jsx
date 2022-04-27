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
            <li className='me-4'><Link href={"/about"}><a>about</a></Link></li>
            <li><a href="https://osaretinfrank.me/" rel='noreferrer' target={"_blank"}>contact</a></li>
        </ul>

        <p className="logo">Eazy<span>Shop</span></p>

        <ul className={styles.list}>
            <li className='me-4 fw-bold'>USD</li>
            <li className='me-4'><a><FontAwesomeIcon icon={faSearch}/></a></li>
            <li className='me-4'><Link href={"/customer/account/login"}><a><FontAwesomeIcon icon={faSignIn}/></a></Link></li>
            <li className={styles.cart + ' me-4'} onClick={cartToggleShow}><a><FontAwesomeIcon icon={faCartShopping}/></a>
              <span>{cart.counter}</span>
            </li>
            <li className='fw-bold'>${cart.total_amount}</li>
            
        </ul>
      </div>

    {cartVisibility && <CartPreview cartToggle={cartToggleShow}/>}




    <Navbar bg="light" expand="lg" className='d-md-none'>
    <Container>
      <Navbar.Brand href="/"><p className="logo p-0 m-0">Eazy<span>Shop</span></p></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto text-capitalize">
            <Nav.Link className='mb-2 mt-2'><Link href={"/"}><a>home</a></Link></Nav.Link>
            <Nav.Link className='mb-2'><Link href={"/collections"}><a>collections</a></Link></Nav.Link>
            <Nav.Link className='mb-2'><Link href={"/about"}><a>about</a></Link></Nav.Link>
            <Nav.Link className='mb-2'><a href="https://osaretinfrank.me/" rel='noreferrer' target={"_blank"}>contact</a></Nav.Link>
            <Nav.Link className='mb-2'><a>Search Products</a></Nav.Link>
            <Nav.Link className='mb-2'><Link href={"/customer/account/login"}><a>Login</a></Link></Nav.Link>
            <Nav.Link className={styles.cart + ' me-4 mb-4'} onClick={cartToggleShow}><a>Preview Cart</a>
              <span className='mt-2'>{cart.counter}</span>
            </Nav.Link>
            <p className='fw-bold mb-5'>${cart.total_amount}</p>
        </Nav>
      </Navbar.Collapse>
    </Container>
</Navbar>
    </section>
  )
}

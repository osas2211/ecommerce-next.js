import React from 'react'
import styles from "../styles/bestsellers.module.css"
import Gadgets from './Gadgets';
import Laptops from './Laptops';
import Phones from './Phones'
import Watches from './Watches';



export default function BestSellers() {
    const [phones, setPhones] = React.useState(true);
    const [laptops, setLaptops] = React.useState(false);
    const [watches, setWatches] = React.useState(false);
    const [gadgets, setGadgets] = React.useState(false);

    const handlePhones = ()=>{
        setPhones(true)
        setLaptops(false)
        setGadgets(false)
        setWatches(false)
    }
    const handleLaptops = ()=>{
        setLaptops(true)
        setPhones(false)
        setGadgets(false)
        setWatches(false)
    }
    const handleWatches = ()=>{
        setWatches(true)
        setLaptops(false)
        setPhones(false)
        setGadgets(false)
    }
    const handleGadgets = ()=>{
        setGadgets(true)
        setLaptops(false)
        setPhones(false)
        setWatches(false)
    }
  return (
    <div className={styles.best_sellers + " "}>
        <div className='d-lg-flex container-fluid text-uppercase justify-content-between align-items-center'>
            <h5 className='text-uppercase fw-bold text-center mb-5 mb-lg-0'>best sellers</h5>
            <ul className='text-center'>
                <li className={'me-5 active'} onClick={handlePhones}><span className={phones && styles.active}>smartphones</span></li>
                <li className='me-5' onClick={handleLaptops}><span className={laptops && styles.active}>laptops</span></li>
                <li className='me-5' onClick={handleWatches}><span className={watches && styles.active}>watches</span></li>
                <li onClick={handleGadgets}><span className={gadgets && styles.active}>gadgets</span></li>
            </ul>
        </div>

        <div className={styles.best_sellers_products}>
            {phones && <Phones />}
            {laptops  && <Laptops />}
            {watches && <Watches />}
            {gadgets && <Gadgets />}
        </div>

        {/* <div className='row my-5 justify-content-center'>
            {phones && <Phones />}
            {laptops  && <Laptops />}
            {watches && <Watches />}
            {gadgets && <Gadgets />}
        </div> */}
    </div>
  )
}

import React from 'react'
import ProductCard from '../components/PagesProduct'
import phone4 from "../images/product-7.jpg"

export default function PagesProductSection() {
  return (
    <div className='row g-4 justify-content-center justify-content-md-start'>
    <div className='col-10 col-md-6 col-lg-3'><ProductCard img={phone4} title={"Phones Catalog"} amount={700} rating={4}/></div>
    <div className='col-10 col-md-6 col-lg-3'><ProductCard img={phone4} title={"Phones Catalog"} amount={700} rating={4}/></div>
    <div className='col-10 col-md-6 col-lg-3'><ProductCard img={phone4} title={"Phones Catalog"} amount={700} rating={4}/></div>
    <div className='col-10 col-md-6 col-lg-3'><ProductCard img={phone4} title={"Phones Catalog"} amount={700} rating={4}/></div>
    <div className='col-10 col-md-6 col-lg-3'><ProductCard img={phone4} title={"Phones Catalog"} amount={700} rating={4}/></div>
    <div className='col-10 col-md-6 col-lg-3'><ProductCard img={phone4} title={"Phones Catalog"} amount={700} rating={4}/></div>
    <div className='col-10 col-md-6 col-lg-3'><ProductCard img={phone4} title={"Phones Catalog"} amount={700} rating={4}/></div>
  </div>
  )
}

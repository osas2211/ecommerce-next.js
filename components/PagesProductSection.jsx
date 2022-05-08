import React from 'react'
import ProductCard from '../components/product/PagesProduct'
import phone4 from "../images/phone1.jpg"

export default function PagesProductSection({ products, category }) {

  return (
    <div className='row g-4 justify-content-center justify-content-md-start'>

      {
        products.length > 1 ? products.map(product => (
          <div key={product.id} className='col-10 col-md-6 col-lg-3'><ProductCard category={category} img={product.image} id={product.id } title={product.name} amount={product.amount} rating={product.rating} count={product.count} brand={product.brand}/></div> 
        )) : products.length == 1 ? products.map(product => (
          <div key={product.id} className='col-10 col-md-6'><ProductCard category={category} img={product.image} id={product.id } title={product.name} amount={product.amount} rating={product.rating} count={product.count} brand={product.brand}/></div> 
        )) : <div className='display-6 text-center text-muted'>No Products to Show Here</div>
      }
  </div>
  )
}

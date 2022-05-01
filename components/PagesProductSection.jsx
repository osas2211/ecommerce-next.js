import React from 'react'
import ProductCard from '../components/PagesProduct'
import phone4 from "../images/product-7.jpg"

export default function PagesProductSection() {
  // const [state, setState] = React.useState([])
  // const fetchProduct = async()=>{
  //   const response = await fetch("https://fakestoreapi.com/products");
  //   const products = await response.json()
  //   setState(products.splice(0, 10))
  //   console.log(products.splice(0, 10));
  // }

  // React.useEffect(()=>{
  //   fetchProduct()
  // }, [])

  return (
    <div className='row g-4 justify-content-center justify-content-md-start'>
      <div className='col-6 col-md-6 col-lg-3'><ProductCard img={phone4} title={"Phones Catalog"} amount={700} rating={4}/></div>
      <div className='col-6 col-md-6 col-lg-3'><ProductCard img={phone4} title={"Phones Catalog"} amount={700} rating={4}/></div>
      <div className='col-6 col-md-6 col-lg-3'><ProductCard img={phone4} title={"Phones Catalog"} amount={700} rating={4}/></div>
      <div className='col-6 col-md-6 col-lg-3'><ProductCard img={phone4} title={"Phones Catalog"} amount={700} rating={4}/></div>
      <div className='col-6 col-md-6 col-lg-3'><ProductCard img={phone4} title={"Phones Catalog"} amount={700} rating={4}/></div>
      <div className='col-6 col-md-6 col-lg-3'><ProductCard img={phone4} title={"Phones Catalog"} amount={700} rating={4}/></div>
      <div className='col-6 col-md-6 col-lg-3'><ProductCard img={phone4} title={"Phones Catalog"} amount={700} rating={4}/></div>
      {/* {
        state.map(product => (
          <div key={product.id} className='col-10 col-md-6 col-lg-3'><ProductCard img={product.image} id={product.id + "test"} title={product.title} amount={product.price} rating={product.rating.rate}/></div>
        ))
      } */}
  </div>
  )
}

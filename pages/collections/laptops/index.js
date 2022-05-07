import React from 'react'
import Head from "next/head"
import FilterPrice from "../../../components/FilterPrice"
import FilterBrand from '../../../components/FilterBrand'
import PagesProductSection from '../../../components/PagesProductSection'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const getStaticProps = async()=>{
  const response = await fetch("https://ecommerce-next-js-three.vercel.app/api/products")
  const data = await response.json()
  
  return {
      props: {
          products: data.laptops
      }
  }
}

export default function LaptopsPage({ products }) {
  const [options, setOptions ] = React.useState(false)
  const toggleOptions = ()=>{
    options ? setOptions(false) : setOptions(true)
  }
  return (
    <>
      <Head>
        <title>Laptops - EazyShop</title>
      </Head>
      <div className='shop'>
        <div className='wrapper'>
          {!options &&  <div className='filter-icon d-block d-md-none' onClick={toggleOptions}><FontAwesomeIcon icon={faFilter}/></div>}
          <p className='mt-3 d-none d-md-block'>Shopping Options</p>
          <div className='d-block d-md-flex justify-content-between'>
            <div className={options ? "filter me-5 filter-active" : "filter me-5"}>
              <div className='close-icon d-md-none mt-5' onClick={toggleOptions}><FontAwesomeIcon icon={faTimes}/></div>
              <FilterPrice />
              <FilterBrand brands={["acer", "samsung", "hp", "lenovo", "apple", "dell"]} />
            </div>
            <PagesProductSection products={products} category = {"laptops"}/>
          </div>
        </div>
      </div>
    </>
  )
}

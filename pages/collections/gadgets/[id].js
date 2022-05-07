import React from 'react'
import ProductDescription from '../../../components/product/ProductDescription'
import ProductDetail from '../../../components/product/productDetail'

export const getStaticPaths = async()=>{
  const response = await fetch("https://ecommerce-next-js-three.vercel.app/api/products")
  const data = await response.json()

  const paths = data.gadgets.map(product => {
    return {
      params: {
        id: product.id.toString()
      }
    }
  })

  return {
    paths: paths,
    fallback: false
  }
}

export const getStaticProps = async(context)=>{
  const id = context.params.id;
  const response = await fetch("https://ecommerce-next-js-three.vercel.app/api/products")
  const data = await response.json()

  const product = data.gadgets.filter(product => product.id.toString() == id)[0]

  return {
    props: {
      product
    }
  }
}

export default function Product({ product }) {
  return (
    <div>
      <ProductDetail product={product}/>
      <ProductDescription />
    </div>
  )
}

import React from 'react'
import ProductDescription from '../../../components/product/ProductDescription'
import ProductDetail from '../../../components/product/productDetail'

export const getStaticPaths = async()=>{
  const response = await fetch("https://ecommerce-next-js-three.vercel.app/api/products")
  const data = await response.json()

  const paths = data.watches.map(product => {
    return {
      params: {
        id: product.name.toString()
      }
    }
  })

  return {
    paths: paths,
    fallback: false
  }
}

export const getStaticProps = async(context)=>{
  const name = context.params.id;
  const response = await fetch("https://ecommerce-next-js-three.vercel.app/api/products")
  const data = await response.json()

  const product = data.watches.filter(product => product.name === name)[0]

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

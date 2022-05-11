import ProductCard from "./product/ProductCard";
import { products } from "../dummyData/products";
import { useState } from "react";


export default function Laptops( {category} ) {
  const [laptops, setLaptops] = useState(products.laptops)
  return (
    <>
        {
          laptops && laptops.slice(0,5).map((laptop, num) => {
            return (<ProductCard category={"laptops"} img={laptop.image} title={laptop.name} rating={laptop.rating} progress="50%" key={laptop.id} id={laptop.id} amount={laptop.amount} count={laptop.count} brand={laptop.brand}/>)
          })
        }
    </>
  )
}

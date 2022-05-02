import ProductCard from "./product/ProductCard";
import { products } from "../dummyData/products";
import { useState } from "react";


export default function Laptops() {
  const [laptops, setLaptops] = useState(products.laptops)
  return (
    <>
        {
          laptops.map((laptop, num) => {
            return (<ProductCard img={laptop.image} title={laptop.name} rating={laptop.rating} progress="50%" key={laptop.id} id={laptop.id} amount={laptop.amount} count={laptop.count}/>)
          })
        }
    </>
  )
}

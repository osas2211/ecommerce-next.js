import ProductCard from "./product/ProductCard";
import { products } from "../dummyData/products";


export default function Watches({ category }) {
  return (
    <>
       {
         products.watches.slice(0,5).map((watch, num)=>{
           return  <ProductCard category={"watches"} img={watch.image} title={watch.name} rating={watch.rating} amount={watch.amount} progress="50%" key={watch.id} id={watch.id} count={watch.count}/>
         })
       }
    </>
  )
}

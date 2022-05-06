import ProductCard from "./product/ProductCard";
import { products } from "../dummyData/products";


export default function Watches() {
  return (
    <>
       {
         products.watches.slice(0,5).map((watch, num)=>{
           return  <ProductCard img={watch.image} title={watch.name} rating={watch.rating} amount={watch.amount} progress="50%" key={watch.id} id={watch.id} count={watch.count}/>
         })
       }
    </>
  )
}

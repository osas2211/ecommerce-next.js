import ProductCard from "./product/ProductCard";
import { products } from "../dummyData/products";


export default function Gadgets() {
  return (
    <>
      {
        products.gadgets.map((gadget, num)=>{
          return <ProductCard img={gadget.image} title={gadget.name} rating={gadget.rating} progress="50%" key={num} amount={gadget.amount} id={gadget.id} count={gadget.count}/>
        })
      }
    </>
  )
}

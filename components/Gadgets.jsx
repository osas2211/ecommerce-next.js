import ProductCard from "./product/ProductCard";
import { products } from "../dummyData/products";


export default function Gadgets({ category }) {
  return (
    <>
      {
        products.gadgets.slice(0,5).map((gadget, num)=>{
          return <ProductCard category={"gadgets"} img={gadget.image} title={gadget.name} rating={gadget.rating} progress="50%" key={num} amount={gadget.amount} id={gadget.id} count={gadget.count} brand={gadget.brand}/>
        })
      }
    </>
  )
}

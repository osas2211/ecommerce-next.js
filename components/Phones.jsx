import ProductCard from "./product/ProductCard";
import { products } from "../dummyData/products";


export default function Phones({ category }) {
  return (
    <>
        {
          products.phones.slice(0,5).map((phone, num)=>{
            return <ProductCard category={"phones"} img={phone.image} title={phone.name} rating={phone.rating} progress="50%" key={phone.id} amount={phone.amount} id={phone.id} count={phone.count}/>
          })
        }
    </>
  )
}

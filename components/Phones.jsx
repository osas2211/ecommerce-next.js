import ProductCard from "./product/ProductCard";
import { products } from "../dummyData/products";


export default function Phones() {
  return (
    <>
        {
          products.phones.map((phone, num)=>{
            return <ProductCard img={phone.image} title={phone.name} rating={phone.rating} progress="50%" key={phone.id} amount={phone.amount} id={phone.id} count={phone.count}/>
          })
        }
    </>
  )
}

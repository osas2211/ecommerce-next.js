import ProductCard from "./ProductCard";
import img from "../images/product-127.jpg"
import img2 from "../images/product-130.jpg"
import img3 from "../images/product-125.jpg"
import img4 from "../images/product-7.jpg"


export default function Phones() {
  return (
    <>
        <ProductCard img={img}/>
        <ProductCard img={img2}/>
        <ProductCard img={img3}/>
        <ProductCard img={img4}/>
        <ProductCard img={img3}/>
        <ProductCard img={img4}/>
        <ProductCard img={img}/>
        <ProductCard img={img2}/>
    </>
  )
}

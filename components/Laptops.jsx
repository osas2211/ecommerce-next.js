import ProductCard from "./ProductCard";
import img from "../images/product-126.jpg"
import img2 from "../images/product-131.jpg"
import img3 from "../images/product-26.jpg"
import img4 from "../images/product-14.png"


export default function Laptops() {
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

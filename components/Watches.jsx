import ProductCard from "./ProductCard";
import img from "../images/product-120.jpg"
import img2 from "../images/product-122.jpg"
import img3 from "../images/product-123.jpg"
import img4 from "../images/product-128.jpg"


export default function Watches() {
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

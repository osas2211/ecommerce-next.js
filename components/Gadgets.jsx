import ProductCard from "./ProductCard";
import img from "../images/product-22.jpg"
import img2 from "../images/product-50.jpg"
import img3 from "../images/product-40.jpg"
import img4 from "../images/product-25.jpg"


export default function Gadgets() {
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

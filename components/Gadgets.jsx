import ProductCard from "./ProductCard";
import img from "../images/product-22.jpg"
import img2 from "../images/product-50.jpg"
import img3 from "../images/product-40.jpg"
import img4 from "../images/product-25.jpg"


export default function Gadgets() {
  return (
    <>
        <ProductCard img={img} title="a80 pro 4g unlocked cell phones" rating={3} progress="50%"/>
        <ProductCard img={img2} title="LG unlocked smart phone platinum" rating={4} progress="5%"/>
        <ProductCard img={img3} title="powered quad core camera and android" rating={4} progress="30%"/>
        <ProductCard img={img4} title="apobob black shark gaming phone" rating={5} progress="60%"/>
        <ProductCard img={img3} title="golden sheeps case compatible pro" rating={2} progress="80%"/>
    </>
  )
}

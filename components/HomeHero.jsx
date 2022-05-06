import React, { useEffect } from 'react'
import styles from "../styles/Home.module.css"
import product from "../images/iphone12-max.png";
import product2 from "../images/product-preview-4.jpg";
import { Carousel } from "react-bootstrap";
import HeroItem1 from './homeHeroItems/HeroItem1';
import HeroItem2 from './homeHeroItems/HeroItem2';

export default function HomeHero() {
  return (
    <div>
        <Carousel variant="dark" className="pb-5 px-3">
        <Carousel.Item>
          <HeroItem1 img={product} id="hero-product-1" amount={1999} title={"Iphone 8"} styles={styles}/>
        </Carousel.Item>

        <Carousel.Item>
          <HeroItem2 img={product2} id="hero-product-2" amount={749} title={"Next Gen Watch"} styles={styles}/>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

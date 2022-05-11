import React, { useEffect } from 'react'
import styles from "../styles/Home.module.css"
import product from "../images/iphone12-max.png";
import product2 from "../images/product-preview-4.jpg";
import { Carousel } from "react-bootstrap";
import HeroItem1 from './homeHeroItems/HeroItem1';
import HeroItem2 from './homeHeroItems/HeroItem2';
import { products } from '../dummyData/products';

export default function HomeHero() {
  const [hero1, setHero1] = React.useState(products.phones[5])
  const [hero2, setHero2] = React.useState(products.watches[3])
  

  return (
    <div className=''>
        <Carousel variant="dark" className="pb-5 px-3">
        <Carousel.Item>
          <HeroItem1 img={hero1.image} id={hero1.id} brand={hero1.brand} category={hero1.category} amount={hero1.amount} title={hero1.name} styles={styles}/>
        </Carousel.Item>

        <Carousel.Item>
          <HeroItem2 img={hero2.image} id={hero2.id} brand={hero2.brand} category={hero2.category} amount={hero2.amount} title={hero1.name} styles={styles}/>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

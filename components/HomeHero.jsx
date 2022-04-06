import React from 'react'
import styles from "../styles/Home.module.css"
import product from "../images/iphone12-max.png";
import product2 from "../images/gamingpc1.png";
import Image from "next/image";
import { Carousel } from "react-bootstrap";

export default function HomeHero() {
  return (
    <div>
        <Carousel variant="dark" className="pb-5 mt-5 pt-5">
        <Carousel.Item>
          <section className={styles.home_hero + " d-lg-flex d-md-block justify-content-between align-items-center container mt-5 pt-3 pb-3"}>
            <div className="hero-item-detail mb-5 mb-lg-0">
              <small className="fw-bold text-uppercase">-25% off</small>
              <p className="display-1 text-uppercase fw-bolder">smart phones in our store</p>
              <span className="line"></span>
              <p className="pe-lg-5 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ratione, quae a reiciendis provident optio. Ipsam rerum accusantium porro ut quam?</p>
              <p className="text-uppercase mb-0">starting from <span>$1999.99</span></p>
              <div className="pt-3">
                <a href="" className="btn-custom-2 me-3">Learn more</a>
                <a href="" className="btn-custom-1">Add to cart</a>
              </div>
            </div>

            <div className="img align-self-center justify-self-center">
              <Image src={product} alt="" layout="fill"/>
            </div>
          </section>
        </Carousel.Item>

        <Carousel.Item>
          <section className={styles.home_hero + " d-lg-flex d-md-block justify-content-between align-items-center container mt-5 pt-3 pb-3"}>
            <div className="img2 align-self-center justify-self-center me-5">
              <Image src={product2} alt="" layout="fill"/>
            </div>
            <div className="hero-item-detail mb-5 mb-lg-0">
              <small className="fw-bold text-uppercase">-18% off</small>
              <p className="display-1 text-uppercase fw-bolder">Alienwares in our store</p>
              <span className="line"></span>
              <p className="pe-lg-5 mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci quae temporibus totam laudantium dolor expedita repellat exercitationem dignissimos delectus.</p>
              <p className="text-uppercase mb-0">starting from <span>$2999.99</span></p>
              <div className="pt-3">
                <a href="" className="btn-custom-2 me-3">Learn more</a>
                <a href="" className="btn-custom-1">Add to cart</a>
              </div>
          </div>

        </section>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

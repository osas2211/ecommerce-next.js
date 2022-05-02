import React from 'react'
import { Container, Row, Carousel } from 'react-bootstrap'
import styles from "../../styles/product_detail.module.css"
import Rating from '../Rating'

export default function Reviews() {
  return (
    <div className='py-4'>
        <h3 className='mb-4'>Customer Reviews</h3>
        <div>
            

            <div className='m-0 px-4 px-md-2'>
                <p className='mb-0'><span className='h4 me-1'>Google</span> <span>Rating</span></p>
                <div className='m-0'><span className='h5 me-2'>4.9</span> 
                    <span className={styles.rating}>
                        <Rating rating_value={5}/>
                        <small className='ms-3 text-muted'>57 Reviews</small>
                    </span>
                </div>
            </div>

            <div className={styles.reviews + " my-5"}>
                <Container>
                    <Carousel>
                        <Carousel.Item>
                            <Row className='justify-content-center'>
                                <div className="col-11 col-md-6 col-lg-3 mb-4">
                                    <small className='fw-bold text-capitalize'>Didier drogba</small>
                                    <p className={styles.rating + " my-0"}>
                                        <Rating rating_value={5}/>
                                    </p>
                                    <small className='fw-light'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad excepturi porro quasi doloribus expedita aliquam?
                                    </small>
                                </div>
                                <div className="col-11 col-md-6 col-lg-3 mb-4">
                                    <small className='fw-bold text-capitalize'>eden hazard</small>
                                    <p className={styles.rating + " my-0"}>
                                        <Rating rating_value={4}/>
                                    </p>
                                    <small className='fw-light'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad excepturi porro quasi doloribus expedita aliquam?
                                    </small>
                                </div>
                                <div className="col-11 col-md-6 col-lg-3 mb-4">
                                    <small className='fw-bold text-capitalize'>frank lampard</small>
                                    <p className={styles.rating + " my-0"}>
                                        <Rating rating_value={2}/>
                                    </p>
                                    <small className='fw-light'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad excepturi porro quasi doloribus expedita aliquam?
                                    </small>
                                </div>
                                <div className="col-11 col-md-6 col-lg-3 mb-4">
                                    <small className='fw-bold text-capitalize'>john terry</small>
                                    <p className={styles.rating + " my-0"}>
                                        <Rating rating_value={3}/>
                                    </p>
                                    <small className='fw-light'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad excepturi porro quasi doloribus expedita aliquam?
                                    </small>
                                </div>
                            </Row>
                        </Carousel.Item>
                    </Carousel>

                </Container>
            </div>


        </div>
    </div>
  )
}

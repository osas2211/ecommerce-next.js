import React from 'react'
import { Tabs, Tab, Container } from 'react-bootstrap'
import Reviews from './Reviews'

export default function ProductDescription() {
  return (
    <div className='my-5'>
        <Container className=''>
            <Tabs defaultActiveKey={"reviews"} className="">
                <Tab eventKey={"description"} title="Description">
                    <p className='p-3'>
                    Designed by Hans J. Wegner in 1949 as one of the first models created especially for Carl Hansen & Son, and produced since 1950. The last of a series of chairs wegner designed based on inspiration from antique Chinese armchairs. The gently rounded top together with the back and seat offers a variety of comfortable seating positions,ideal for both long visits to the dining table and relaxed lounging.
                    </p>
                </Tab>
                <Tab eventKey={"reviews"} title="Reviews">
                    <Reviews />
                </Tab>
            </Tabs>
        </Container>
    </div>
  )
}

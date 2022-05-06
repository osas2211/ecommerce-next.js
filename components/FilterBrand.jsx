import React from 'react'
import { Card, Form } from 'react-bootstrap'

export default function FilterBrand({ brands }) {
  return (
    <div>
        <Card className='filter_width my-5'>
          <Card.Header>
              <Card.Title>Brand</Card.Title>
          </Card.Header>
          <Card.Body>
                { brands.map(((brand, key) => (
                    <div className='d-flex' key={key}>
                        <span className='me-2'><Form.Check /></span>
                        <span className='text-capitalize'>{ brand }</span>
                    </div>
                ))) }
          </Card.Body>

        </Card>
    </div>
  )
}

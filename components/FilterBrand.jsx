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
              <Card.Text>
                { brands.map(((brand, key) => (
                    <p className='d-flex' key={key}>
                        <span className='me-2'><Form.Check /></span>
                        <span className='text-capitalize'>{ brand }</span>
                    </p>
                ))) }
              </Card.Text>
          </Card.Body>

        </Card>
    </div>
  )
}

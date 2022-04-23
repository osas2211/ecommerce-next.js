import React from 'react'
import { Card, Form } from 'react-bootstrap'

export default function FilterPrice() {
  return (
    <div>
        <Card className='filter_width'>
          <Card.Header>
              <Card.Title>Price</Card.Title>
          </Card.Header>
          <Card.Body>
              <Card.Text>
                <p className='d-flex'>
                    <span className='me-2'><Form.Check /></span>
                    <span>$0 - $100</span>
                </p>
                <p className='d-flex'>
                    <span className='me-2'><Form.Check /></span>
                    <span>$100 - $200</span>
                </p>
                <p className='d-flex'>
                    <span className='me-2'><Form.Check /></span>
                    <span>$200 - $300</span>
                </p>
                <p className='d-flex'>
                    <span className='me-2'><Form.Check /></span>
                    <span>$300 and above</span>
                </p>
              </Card.Text>
          </Card.Body>

        </Card>
    </div>
  )
}

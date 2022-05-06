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
                <div className='d-flex mb-1'>
                    <span className='me-2'><Form.Check /></span>
                    <span>$0 - $100</span>
                </div>
                <div className='d-flex mb-1'>
                    <span className='me-2'><Form.Check /></span>
                    <span>$100 - $200</span>
                </div>
                <div className='d-flex mb-1'>
                    <span className='me-2'><Form.Check /></span>
                    <span>$200 - $300</span>
                </div>
                <div className='d-flex mb-1'>
                    <span className='me-2'><Form.Check /></span>
                    <span>$300 and above</span>
                </div>
          </Card.Body>

        </Card>
    </div>
  )
}

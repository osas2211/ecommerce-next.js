import React from 'react'
import { Card, Form } from 'react-bootstrap'

export default function FilterPrice({ products, productsState, setProducts }) {
  const [checked1, setChecked1] = React.useState(false)
  const [checked2, setChecked2] = React.useState(false)
  const [checked3, setChecked3] = React.useState(false)
  const [checked4, setChecked4] = React.useState(false)

  const persistFiltering = ()=>{
    checked1 && setProducts(productsState.filter((product) => product.amount >= 0 && product.amount <= 99.99))
    checked2 && setProducts(productsState.filter((product) => product.amount >= 100 && product.amount <= 199.99))
    checked3 && setProducts(productsState.filter((product) => product.amount >= 200 && product.amount <= 299.99))
    checked4 && setProducts(productsState.filter((product) => product.amount >= 300))
  }

  React.useEffect(()=>{
    persistFiltering()
  })

  const handleChecked1 = ()=> {
    setProducts(products.filter((product) => product.amount >= 0 && product.amount <= 99.99))
    checked1 ? setChecked1(false) : setChecked1(true)
    setChecked2(false)
    setChecked3(false)
    setChecked4(false)
  }
  const handleChecked2 = ()=> {
    setProducts(products)
    checked2 ? setChecked2(false) : setChecked2(true)
    setChecked1(false)
    setChecked3(false)
    setChecked4(false)
  }
  const handleChecked3 = ()=> {
    setProducts(products)
    checked3 ? setChecked3(false) : setChecked3(true)
    setChecked1(false)
    setChecked2(false)
    setChecked4(false)
  }
  const handleChecked4 = ()=> {
    setProducts(products)
    checked4 ? setChecked4(false) : setChecked4(true)
    setChecked1(false)
    setChecked2(false)
    setChecked3(false)
  }


  return (
    <div>
        <Card className='filter_width'>
          <Card.Header>
              <Card.Title>Price</Card.Title>
          </Card.Header>
          <Card.Body>
                <div className='d-flex mb-1'>
                    <span className='me-2'><Form.Check onChange={handleChecked1} checked={checked1}/></span>
                    <span>$0 - $99.99</span>
                </div>
                <div className='d-flex mb-1'>
                    <span className='me-2'><Form.Check onChange={handleChecked2} checked={checked2}/></span>
                    <span>$100 - $199.99</span>
                </div>
                <div className='d-flex mb-1'>
                    <span className='me-2'><Form.Check onChange={handleChecked3} checked={checked3}/></span>
                    <span>$200 - $299.99</span>
                </div>
                <div className='d-flex mb-1'>
                    <span className='me-2'><Form.Check onChange={handleChecked4} checked={checked4}/></span>
                    <span>$300 and above</span>
                </div>
          </Card.Body>

        </Card>
    </div>
  )
}

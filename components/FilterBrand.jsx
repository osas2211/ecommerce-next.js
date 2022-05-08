import React from 'react'
import { Card, Form } from 'react-bootstrap'
import Brands from './Brands'

export default function FilterBrand({ brands, products, setProducts, productsState }) {
  const [filter, setFilter] = React.useState(()=> [])
  console.log(filter);
  return (
    <div>
        <Card className='filter_width my-5'>
          <Card.Header>
              <Card.Title>Brand</Card.Title>
          </Card.Header>
          <Card.Body>
                { brands.map(((brand, key) => (
                    <Brands key={key} setFilter={setFilter} filter={filter} productsState={productsState} brand={brand} brands={brands} products={products} setProducts={setProducts}/>
                ))) }
          </Card.Body>

        </Card>
    </div>
  )
}

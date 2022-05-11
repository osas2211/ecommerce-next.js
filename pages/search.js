import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { products as data } from "../dummyData/products"
import ProductCard from "../components/product/ProductCard"

export default function Search() {
    const [products, setProducts] = React.useState([...data.laptops, ...data.phones, ...data.gadgets, ...data.watches]);
    const [searched, setSearched] = React.useState([])
    const [input, setInput] = React.useState()

    const handleSearch = (e)=> {
        e.preventDefault()
        setSearched([...products.filter(product => product.name.toLowerCase().indexOf(input.toLowerCase()) > -1)])
        console.log(searched)
    }
    
  return (
    <div style={{paddingTop: "5rem", paddingBottom: "2rem", minHeight: "68vh", background: "rgba(197, 197, 197, 0.226)"}}>
        <div className='container'>
            <div className='container m-auto px-md-5'>
                <Form onSubmit={handleSearch}>
                    <Form.Control placeholder='Search Product' value={input} onChange = {e => setInput(e.target.value)}></Form.Control>
                    <Button type='submit' className='text-light mt-2'>Search</Button>
                </Form>
            </div>
            <div className='mt-5 row'>
                {
                    searched.length == 0 ? <p className='text-center display-6 text-muted'>No Items Found</p> 
                    : searched.map(product => {
                        return <div key={product.id} className={"col-3 mb-4"}><ProductCard img={product.image} amount={product.amount} title={product.name} rating={product.rating} category={product.category} count = {product.count} id={product.id} sold={50}/></div>
                    })
                }
            </div>
        </div>
    </div>
  )
}

import React from 'react'
import { Form } from 'react-bootstrap'

export default function Brands({ brand, brands, products, setProducts, productsState, filter,  setFilter}) {
    const [checked, setChecked] = React.useState(false)
    
    const handleCheck = ()=>{
        /************ KEY NOTES ***********/
        // the "filter" prop is used to track the current brands that has been clicked for filtering. 
        // "products" is the original data that was fetched that cant be mutated.
        // "productsState" changes as filtering operations is made and it's been utilized in the ui rather than products.


        if (checked == false && filter.length <= brands.length){
            setChecked(true)       
            
            
            if (filter.length === 0){
                // setProducts([]) "ProductsState" is set to empty to allow only filtered brand to show in UI.
                setProducts([])
                setFilter((prevBrands) => [...prevBrands, brand])
                

                // "original products" is filtered and added to the "productsState"
                setProducts((prevState)=> [...products.filter(products => products.brand == brand), ...prevState])
            }
            else if (filter.length > 0){
                setFilter((prevBrands) => [...prevBrands, brand])

                // original "products" is filtered and added to the "productsState"
                setProducts((prevState)=> [...products.filter(products => products.brand == brand), ...prevState])
            }
        }

        if (checked == true && filter.length >= 0){
            setChecked(false)
            setFilter(filter.filter(brand_ => brand_ !== brand))

            // for every unchecked brand, "productsState" is mutated to omit the unchecked brand.
            setProducts(productsState.filter(products => products.brand !== brand))
            if (filter.length === 1){

                // once the filter length gets to 1 and last brand is clicked, the "productsState" to original "products"
                setProducts(products)
                
            }
            
        }

    }
  return (
    <div className='d-flex'>
        <span className='me-2'><Form.Check onChange={handleCheck} checked = {checked}/></span>
        <span className='text-capitalize'>{ brand }</span>
    </div>
  )
}

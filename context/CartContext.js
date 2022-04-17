/**** WITH THE POWER OF ARRAY AND OBJECT DECONSTRUCTING COMES EVERYTHING NICE ****/
import { createContext, useReducer, useContext } from "react";

export const CartContext = createContext()
export const useCart = ()=>{
    return useContext(CartContext)
}

export const actions = {
    ADD_TO_CART: "ADD_TO_CART",
    DELETE_ITEM: "DELETE_ITEM"
}

export const reducer = (initState, action)=>{
    switch(action.type){
        case actions.ADD_TO_CART: 
        const IDs = initState.products.map(product => product.id)
        
        // Checks if Product ID already exists using the "indexOf()" method,
        // if product ID does'nt exist, 
        // the product is added to the initState.products array.
        if (IDs.indexOf(action.payload.id) < 0){
            console.log(initState.products.map((a)=> a.amount));
            return {...initState,
                products: [...initState.products, {
                    title: action.payload.title, 
                    amount:action.payload.amount, 
                    image:action.payload.image,
                    id: action.payload.id,
                    count: action.payload.product_count
                }],
                counter: Number(initState.counter) + Number(action.payload.count),
                total_amount: Number(initState.total_amount) + Number(action.payload.amount)
            
            };
        }
        

        // if the product ID already exists in state, 
        // the specific product count is incremented only.
        else {
            
            return {
                ...initState, 
                counter: initState.counter + 1,
                total_amount: Number(initState.total_amount) + Number(action.payload.amount),
                products: initState.products.map(product=> ({ ...product, 
                    count: product.id == action.payload.id ? product.count+1: product.count, 
                })),
            }
        };
           


        case actions.DELETE_ITEM: return {
            ...initState, products: [
                ...initState.products.filter(product=>{
                    if(product.id !== action.payload.id){
                        return product
                    }
                })
            ],
            counter: initState.counter - Number(action.payload.count),
            total_amount: initState.total_amount - (Number(action.payload.count) * Number(action.payload.amount))
        }
    }
}

export const CartProvider = ({children})=>{
    const initialState = {
        products: [],
        counter: 0,
        total_amount: 0
    }
    const [state, dispatch] = useReducer(reducer, initialState)


    return <CartContext.Provider value={[state, dispatch]}>
        { children }
    </CartContext.Provider>
}
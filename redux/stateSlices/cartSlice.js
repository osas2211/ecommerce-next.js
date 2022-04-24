import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        counter: 0,
        total_amount: 0
    },
    reducers: {
        addToCart: (state, action)=>{
            const IDs = state.products.map(product => product.id)
        
            // Checks if Product ID already exists using the "indexOf()" method,
            // if product ID does'nt exist, 
            // the product is added to the state.products array.
            if (IDs.indexOf(action.payload.id) < 0){
                console.log(state.products.map((a)=> a.amount));
                return {...state,
                    products: [...state.products, {
                        title: action.payload.title, 
                        amount:action.payload.amount, 
                        image:action.payload.image,
                        id: action.payload.id,
                        count: action.payload.product_count
                    }],
                    counter: Number(state.counter) + Number(action.payload.count),
                    total_amount: Number(state.total_amount) + Number(action.payload.amount)
                
                };
            }

            // if the product ID already exists in state, 
            // the specific product count is incremented only.
            else {
                
                return {
                    ...state, 
                    counter: state.counter + 1,
                    total_amount: Number(state.total_amount) + Number(action.payload.amount),
                    products: state.products.map(product=> ({ ...product, 
                        count: product.id == action.payload.id ? product.count+1: product.count, 
                    })),
                }
            };
        },

        removeFromCart: (state, action)=>{
            return {
                ...state, products: [
                    ...state.products.filter(product=>{
                        if(product.id !== action.payload.id){
                            return product
                        }
                    })
                ],
                counter: state.counter - Number(action.payload.count),
                total_amount: state.total_amount - (Number(action.payload.count) * Number(action.payload.amount))
            }
        }
    }
})


export const { addToCart, removeFromCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer
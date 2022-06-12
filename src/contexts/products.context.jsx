import {createContext,useState} from 'react';
import PRODUCT_DATA from '../shop-data.json';

export const Productcontxt = createContext({
    products: [],
})

export const ProductcontxtProvider=({children})=>{
    const [products,setproducts] =useState(PRODUCT_DATA);
    const value ={products};
    return(
        <Productcontxt.Provider value={value}>
            {children}
        </Productcontxt.Provider>
    )
}
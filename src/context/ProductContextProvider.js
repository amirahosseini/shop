import React, {createContext, useState,useEffect} from 'react';
import { getProducts } from '../services/api';

export const ProductContext= createContext();

const ProductContextProvider = ({children}) => {
    
    const [Products , setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () =>{
            setProducts(await getProducts())
        }
        fetchProducts()
    }, []);

    return (

        <ProductContext.Provider value={Products}>
            {children}
        </ProductContext.Provider>

    );

};



export default ProductContextProvider;
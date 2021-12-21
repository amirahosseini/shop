import React, {useContext} from 'react';
import {ProductContext} from '../context/ProductContextProvider'
import Product from './shared/Product';
const Store = () => {
    const product = useContext(ProductContext)
    return (
        <div className='flex justify-center '>
            <div className='grid xl:grid-cols-4 gap-x-32 gap-y-15 md:grid-cols-3 sm:grid:cols:1'>
                {
                    product.map(item => <Product key={item.id} Data={item} />)
                }
            </div>
        </div>
    );
};

export default Store;
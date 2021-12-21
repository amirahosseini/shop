import React from 'react';
import { shorten } from '../../helpers/functions';

const Product = ({Data}) => {
    return (
        <div className='h-113'>
            <div className='mx-auto place-items-center'>
                <img className='w-56 ' src={Data.image} alt="" />
            </div>
            <div className='my-5'>
                <h2 className='font-medium'> {shorten(Data.title)} </h2>
                <p className='mt-2'>{Data.price}</p>
            </div>
            <div className='hidden hover:block'>
                xxx
            </div>
        </div>
    );
};

export default Product;
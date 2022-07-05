import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div>
            <h1 className='text-4xl uppercase text-center font-bold my-16'>Our <span className='text-primary'>Innovation</span></h1>
            <div className='grid lg:grid-cols-3 px-16 md:grid-cols-2 sm:grid-cols-1 content-center gap-y-10'>
                {
                    products.slice(0, 3).map(product => <Product
                        key={product.id}
                        product={product}
                    />)
                }
            </div>
        </div>
    );
};

export default Products;
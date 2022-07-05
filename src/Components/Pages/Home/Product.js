import React from 'react';

const Product = (props) => {
    const { name, image, description, qty, price } = props.product;
    return (
        <div className='flex mx-auto'>
            <div class="card card-compact w-80 bg-white shadow-xl">
                <figure><img src={image} alt="bicycle" /></figure>
                <div class="card-body">
                    <h2 class="text-2xl font-bold">{name}</h2>
                    <p>{description.slice(0, 120)}...</p>
                    <p className='font-semibold mt-2'>Quantity: {qty}</p>
                    <p className='font-semibold'>Minimum Order Quantity: 50</p>
                    <p className='text-xl font-bold'>Price: ${price}</p>
                    <div class="card-actions mt-2">
                        <button class="btn btn-primary btn-sm font-bold">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
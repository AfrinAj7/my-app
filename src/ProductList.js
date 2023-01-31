import React from 'react';
import Card from './Card';

const ProductList = (props) => {
    const products = [
        { name: 'Product 1', price: 10, image: 'orangedress.png' },
        
        { name: 'Product 2', price: 20, image: 'pinkdress.png' },
        { name: 'Product 3', price: 30, image: 'orangedress.png' }
    ];

    return (
        <div className="product-list">
            {products.map(product => 
                <Card 
                    key={product.name} 
                    name={product.name} 
                    price={product.price} 
                    image={product.image} 
                />
            )}
        </div>
    );
}

export default ProductList;

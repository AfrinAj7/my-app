import React from 'react';

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.image} alt={props.name} />
            <h2>{props.name}</h2>
            <p>Price: ${props.price}</p>
            <button>Add to Cart</button>
        </div>
    );
}

export default Card;
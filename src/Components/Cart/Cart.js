import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart);
    // let totalPopulation1 = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const country = cart[i];
    //     totalPopulation1 = totalPopulation1 + country.population;
        

    // }
    const totalPopulation = cart.reduce( (sum, country) => sum + country.population, 0)
    console.log('totalPopulation');
    return (
        <div>
            <h3>This is Cart: {cart.length}</h3> 
            <p>Total Population: {totalPopulation}</p>
        </div>
    );
};

export default Cart;
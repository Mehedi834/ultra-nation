import React from 'react';
import './Country.css'

const Country = (props) => {
    const{name, population, capital, flag}= props.country;
    const handleAddCountry = props.handleAddCountry;
    
    return (
        <div className="country-component">
            <div className="flag">
                <img src={flag} alt=""/>
            </div>

            <div className="btn">
            <h2>This is "{name}" Country</h2>
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
            <button  onClick={ () =>handleAddCountry(props.country)}>Add Country</button>
            </div>
            
            
            
        </div>
    );
};

export default Country;

import './App.css';
import { useEffect, useState } from 'react';
import Country from './Components/Country/Country';
import Cart from './Components/Cart/Cart';


function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
      .catch(error => console.log(error))
  }, []) 
  const handleAddCountry = (country) => {
    console.log('Country Added', country);
    const newCart = [...cart, country];
    setCart(newCart);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Country Loaded: {countries.length}</h1>
        <h3>Country Added: {cart.length} </h3>
        <Cart cart={cart}></Cart>
        <ul>
            {
              countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country>)
            }

        </ul>




       
      </header>
    </div>
  );
}

export default App;

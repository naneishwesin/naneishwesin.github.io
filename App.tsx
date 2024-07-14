import React, { useState } from 'react';
import './App.css';

function App() {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [vat, setVat] = useState(0);
  const [grossProfit, setGrossProfit] = useState(0);

  const calculateVAT = () => {
    const discountedPrice = price - discount;
    const vatAmount = discountedPrice * 0.07;
    setVat(vatAmount);
    setGrossProfit(discountedPrice + vatAmount);
  };

  return (
    <div className="app">
      <h1>VAT Calculator</h1>
      <div className="input-container">
        <label>Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
        />
      </div>
      <div className="input-container">
        <label>Discount:</label>
        <input
          type="number"
          value={discount}
          onChange={(e) => setDiscount(parseFloat(e.target.value))}
        />
      </div>
      <button onClick={calculateVAT}>Calculate</button>
      <div className="output-container">
        <p>VAT: {vat.toFixed(2)}</p>
        <p>Gross Profit: {grossProfit.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default App;

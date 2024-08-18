import React from "react";

function Stock( { stock, handleClick } ) {
  
  const { id, ticker, name, type, price } = stock;

  return (
    <div>
      <div className="card" onClick={() => handleClick(stock)}>
        <div className="card-body">
          <p className="card-text">{ticker}</p>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{type}</p>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
import React from "react";
import Stock from "./Stock";

function StockContainer( { stocks, handleClick } ) {

  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((item) => 
        <Stock 
          key={item.id} 
          stock={item}
          handleClick={handleClick} />)}
    </div>
  );
}

export default StockContainer;
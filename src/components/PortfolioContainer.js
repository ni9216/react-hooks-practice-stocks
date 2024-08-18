import React from "react";
import Stock from "./Stock";

function PortfolioContainer( { stocks, handleClick } ) {

  return (
    <div>
      <h2>My Portfolio</h2>
      {stocks.map((item) => {
        return <Stock 
          key={item.id} 
          stock={item}
          handleClick={handleClick} 
        />
      })}
    </div>
  );
}

export default PortfolioContainer;
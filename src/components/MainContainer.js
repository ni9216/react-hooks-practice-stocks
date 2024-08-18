import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks]= useState([]);
  const [selectedFilter, setSelectedFilter] = useState("All");
  //new array just for the bought IDs
  const [boughtIds, setBoughtIds] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
    .then((res) => res.json())
    .then((data) => setStocks(data))
  }, [])

  //on click from stocks, adds the bought id to the array
  function addStock(stock) {
    setBoughtIds([...boughtIds, stock.id])
  }

  //on click from portfolio container, removes the bought id from the array
  function sellStock(stock) {
    setBoughtIds(boughtIds.filter(id => id != stock.id))
  }

  // function handleSort(button){
  //   console.log(button);
  // }

  const handleSelect = (option) => {
    setSelectedFilter(option)
  }

  const filteredStocks = selectedFilter === "All"
    ? stocks
    : stocks.filter(stock => {
      return stock.type === selectedFilter
  })

  //creates a var, maps through all bought ids and for each match, adds the whole object to the var
  const boughtStocks = boughtIds.map(id => {
    return filteredStocks.find(stock => stock.id == id)
  })

  const sortByName = () => {
    const sortedStocks = [...stocks].sort((a, b) => a.name.localeCompare(b.name));
    setStocks(sortedStocks)
  }

  const sortByPrice = () => {
    const sortedStocks = [...stocks].sort((a, b) => a.price - b.price);
    setStocks(sortedStocks);
  }

  return (
    <div>
      <SearchBar 
        onOptionSelect={handleSelect}
        sortByName={sortByName}
        sortByPrice={sortByPrice}
        />
      <div className="row">
        <div className="col-8">
            <StockContainer 
              stocks={filteredStocks}
              handleClick={addStock}
              />
        </div>
        <div className="col-4">
          <PortfolioContainer 
            stocks={boughtStocks}
            handleClick={sellStock}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
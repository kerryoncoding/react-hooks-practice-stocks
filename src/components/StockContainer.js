import React from "react";
import Stock from "./Stock";

function StockContainer({visibleStocks, addToPortfolio}) {

  // console.log(visibleStocks)

  const stockPile = visibleStocks.map((item)=> {
    return <Stock
     key={item.id}
     item = {item}
     onStockClick = {addToPortfolio}
    />
  })


  console.log({stockPile})


  return (
    <div>
      <h2>Stocks</h2>
      {stockPile}
    </div>
  );
}

export default StockContainer;

import React from "react";
import Stock from "./Stock";

function StockContainer({stockList}) {

  console.log(stockList)

  const stockPile = stockList.map((item)=> {
    return <Stock
     id={item.id}
     key={item.id}
     ticker={item.ticker}
     name={item.name}
     type={item.type}
     price={item.price}
    />
  })


  return (
    <div>
      <h2>Stocks</h2>
      {stockPile}
    </div>
  );
}

export default StockContainer;

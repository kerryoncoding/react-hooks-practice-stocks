import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolioList, removeFromPortfolio}) {


  console.log("here:", portfolioList)

  const portfolioPile = portfolioList.map((item)=> {
    return <Stock
     key={item.id}
     item = {item}
     onStockClick = {removeFromPortfolio}
    />
  })

  


  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioPile}
    </div>
  );
}

export default PortfolioContainer;

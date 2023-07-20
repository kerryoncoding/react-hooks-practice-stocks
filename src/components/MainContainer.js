import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stockList, setStockList] = useState([])
  const [portfolioList, setPortfolioList] = useState([])
  
  
  const URL="http://localhost:3001/stocks"

  useEffect(()=>{
    fetch(URL)
    .then(res=>res.json())
    .then(data=>setStockList(data))
  }, [])

function addToPortfolio(stock){
  let updatedPortfolio = portfolioList.find((item)=> item.id === stock.id)
  if (!updatedPortfolio) { 
    setPortfolioList([...portfolioList, stock])
  }
}

function removeFromPortfolio(stock){
  let updatedPortfolio = portfolioList.filter((item)=> item.id !== stock.id)
  setPortfolioList(updatedPortfolio)
}


  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stockList={stockList} addToPortfolio={addToPortfolio} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioList={portfolioList} removeFromPortfolio={removeFromPortfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;

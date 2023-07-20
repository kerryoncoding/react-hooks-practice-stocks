import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stockList, setStockList] = useState([])
  const [portfolioList, setPortfolioList] = useState([])
  const [visibleStocks, setVisibleStocks] = useState([])
  
  
  const URL="http://localhost:3001/stocks"

  useEffect(()=>{
    fetch(URL)
    .then(res=>res.json())
    .then(data=>{
      setStockList(data)
      setVisibleStocks(data)
    })
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

function sortAlpha(){
  console.log("sortalpha")
  let tempArr = stockList.map((item)=> item)
  let updatedStocks = tempArr.sort((a , b) => {
    let fa = a.name.toLowerCase(),
    fb = b.name.toLowerCase();

    if (fa < fb) {
      return -1;
    } 
    if (fa < fb) {
      return 1
    }
    return 0
  })
  setStockList(updatedStocks)
  setVisibleStocks(updatedStocks)
}

function sortNum(){
  console.log("sortNum")
  let tempArr = stockList.map((item)=> item)
  let updatedStocks = tempArr.sort((a , b) => a.price - b.price)
  setStockList(updatedStocks)
  setVisibleStocks(updatedStocks)
}

function sortFilter(e){
  // setVisibleStocks(stockList)
  console.log(e.target.value)
  let tempArr = stockList.map((item)=> item)
  let updatedStocks = tempArr.filter((item) => item.type === e.target.value)
  setVisibleStocks(updatedStocks)
  console.log("this is stocklist:", stockList)
}

  return (
    <div>
      <SearchBar sortAlpha={sortAlpha} sortNum={sortNum} sortFilter={sortFilter}/>
      <div className="row">
        <div className="col-8">
          <StockContainer visibleStocks={visibleStocks} addToPortfolio={addToPortfolio} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioList={portfolioList} removeFromPortfolio={removeFromPortfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;

import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stockList, setStockList] = useState([])
  
  const URL="http://localhost:3001/stocks"

  useEffect(()=>{
    fetch(URL)
    .then(res=>res.json())
    .then(data=>setStockList(data))
  }, [])



  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stockList={stockList}/>
        </div>
        <div className="col-4">
          <PortfolioContainer />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;

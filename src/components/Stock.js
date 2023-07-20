import React, {useState} from "react";

function Stock({item, onStockClick}) {

  function buyStock(){
    onStockClick(item)
  }

   return (
    <div onClick={buyStock}>
      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.ticker}: {item.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;

import React, {useState} from "react";

function Stock({name, ticker, type, price}) {

  const [isBought, setIsBought] = useState(false)

  function buyStock(){
    console.log("you bought: ", name)
    //set state of isBought to True...
    //send back up to Main Container
    //filter True items to new array
    //set


  }


  return (
    <div>
      <div className="card" onClick={buyStock}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;

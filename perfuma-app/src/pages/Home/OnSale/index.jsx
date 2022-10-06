import React, { useContext } from "react";
import FlashSale from "./FlashSale";
import Context from "../../../context/Context";
import ListProducts from "../../../components/ListProducts";
function OnSale() {
  const {saleProducts} = useContext(Context)
  
  return (
    <div id="sale">
      <div className="container">
        <FlashSale />
        <div className="row">
          <div className="col">
           <ListProducts listproduct={saleProducts}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnSale;

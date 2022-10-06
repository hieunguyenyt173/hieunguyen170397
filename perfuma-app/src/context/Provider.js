import React, { useReducer } from "react";
import Context from "./Context";
import { products } from '../data/productsData'
function Provider({ children }) {
  const saleProducts = products.filter((product) => product.sale_title > 0);
  const bestSeller = products.filter((product) => product.categories === "bestseller");
  const giftProducts = products.filter((product) => product.categories.includes("giftset"))
  const userProduct = [products[0], products[1] ,products[2], products[3],products[4], products[5]]
  const value = {
    products,
    saleProducts,
    bestSeller,
    giftProducts,
    userProduct
  }
  return <Context.Provider value={value}>
    {children}
    </Context.Provider>;
}

export default Provider;

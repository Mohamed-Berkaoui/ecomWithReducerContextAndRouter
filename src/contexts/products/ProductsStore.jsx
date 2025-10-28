import { createContext } from "react";
import useGetProducts from "./useGetProducts";

export const productsContext = createContext();

function ProductsStore({ children }) {
  
  const data=useGetProducts()

  function getTopRatedProds(){
    return data.products.sort((a,b)=>a.rating.rate-b.rating.rate).toReversed().slice(0,4)
  }
  
  return (
    <productsContext.Provider
       value={{ products: data.products,
       setProducts: data.setProducts ,
       getTopRatedProds:getTopRatedProds}}>
      {children}
    </productsContext.Provider>
  );
}

export default ProductsStore;

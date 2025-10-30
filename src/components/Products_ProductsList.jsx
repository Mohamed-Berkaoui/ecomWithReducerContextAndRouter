import { useContext } from "react";
import ProductCard from "./ProductCard";
import { productsContext } from "../contexts/products/ProductsStore";

function Products_ProductsList({ search }) {
  const { products } = useContext(productsContext);
  const filterdProducts=products
          .filter((ele) =>
            ele.title.toLowerCase().includes(search.title.toLowerCase())
          )
          .filter((ele) =>
            search.category == "all" ? true : ele.category == search.category
          )
  if(!filterdProducts.length)
    return <h1>no product found</h1>
  return (
    <div>
      <div className="d-flex justify-content-center gap-5 flex-wrap ">
        {
          filterdProducts.map((e) => (
            <ProductCard key={e.id} product={e} />
          ))}
      </div>
    </div>
  );
}

export default Products_ProductsList;

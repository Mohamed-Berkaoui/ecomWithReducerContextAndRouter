import { useContext } from "react"
import ProductCard from "./ProductCard"
import { productsContext } from "../contexts/products/ProductsStore"

function Home_BestProducts() {
    const {getTopRatedProds}=useContext(productsContext)
  return (
<>
<h2>best products</h2>
    <div className="d-flex justify-content-center gap-5 ">
        {getTopRatedProds().map(e=><ProductCard key={e} product={e}/>)}
    </div>
</>
  )
}

export default Home_BestProducts
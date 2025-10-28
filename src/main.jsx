import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductsStore from './contexts/products/ProductsStore.jsx';
import CartStore from './contexts/cart/CartStore.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ProductsStore>
    <CartStore>
    <App />
    </CartStore>
    </ProductsStore>
  </BrowserRouter>,
)

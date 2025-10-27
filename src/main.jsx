import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductsStore from './contexts/products/ProductsStore.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ProductsStore>
    <App />
    </ProductsStore>
  </BrowserRouter>,
)

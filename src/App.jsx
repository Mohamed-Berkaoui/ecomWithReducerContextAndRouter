import { Routes ,Route} from 'react-router'
import './App.css'
import UserLayout from './layouts/UserLayout'
import Home from './pages/userPages/Home'
import Products from './pages/userPages/Products'
import Cart from './pages/userPages/Cart'
import ProductDetails from './pages/userPages/ProductDetails'
import { ToastContainer } from 'react-toastify'
import Dashboard from './pages/adminPages/Dashboard'
import AdminLayout from './layouts/AdminLayout'
import AddProduct from './pages/adminPages/AddProduct'
import ProductList from './pages/adminPages/ProductList'
import Orders from './pages/adminPages/Orders'
function App() {


  return (
    <>
    <ToastContainer/>
    <Routes>
    <Route path='/' element={<UserLayout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='products' element={<Products/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='product/:id' element={<ProductDetails/>}/>
    </Route>
    <Route path='/admin/' element={<AdminLayout/>}>
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='add-product' element={<AddProduct/>}/>
        <Route path='products-list' element={<ProductList/>}/>
        <Route path='orders' element={<Orders/>}/>
    </Route>


  </Routes>
   
    </>
  )
}

export default App

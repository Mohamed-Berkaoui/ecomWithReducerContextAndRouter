import { Routes ,Route} from 'react-router'
import './App.css'
import UserLayout from './layouts/UserLayout'
import Home from './pages/userPages/Home'
import Products from './pages/userPages/Products'
import Cart from './pages/userPages/Cart'
import ProductDetails from './pages/userPages/ProductDetails'

function App() {


  return (
    <>
    <Routes>
    <Route path='/' element={<UserLayout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='products' element={<Products/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='product/:id' element={<ProductDetails/>}/>

        
    </Route>


  </Routes>
   
    </>
  )
}

export default App

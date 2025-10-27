import { Routes ,Route} from 'react-router'
import './App.css'
import UserLayout from './layouts/UserLayout'
import Home from './pages/userPages/Home'
import Products from './pages/userPages/Products'

function App() {


  return (
    <>
    <Routes>
    <Route path='/' element={<UserLayout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='products' element={<Products/>}/>
    </Route>


  </Routes>
   
    </>
  )
}

export default App

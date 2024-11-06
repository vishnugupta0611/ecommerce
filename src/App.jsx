import Navbar from './component/Navbar'
import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Cart from './pages/Cart'
import 'bootstrap/dist/css/bootstrap.css';
import { ToastContainer } from 'react-toastify'
import Footer from './component/Footer'
function App() {


  return  <>


    <div>

     <div>  

      <Navbar></Navbar>
      
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/cart' element={<Cart></Cart>}></Route>
    </Routes>
         
      

   

     </div>
  

    </div>
    <ToastContainer
  position="top-center"

  autoClose={3000}
  hideProgressBar={false}
  closeOnClick
  pauseOnHover
  draggable
  theme="dark"
/>


    </>
 
}

export default App

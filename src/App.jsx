import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import AllProducts from './Components/AllProducts'
import CartContainer from './Components/CartContainer'
import MyProvider from './Components/MyProvider'

function App() {

const [toggle, setToggle] = useState(true);
// console.log(toggle)

  return (
     <MyProvider>
      <div className='w-11/12 mx-auto'>
        <Navbar/>
        <div className='md:grid grid-cols-3 mx-auto my-8'>
            <AllProducts/>
            <CartContainer toggle={toggle} setToggle={setToggle}/>
        </div>
      </div>
     </MyProvider>
  )
}

export default App

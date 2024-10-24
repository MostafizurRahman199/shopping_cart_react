import React from 'react'
import Cart from './Cart'
import About from './About'

export default function CartContainer({toggle, setToggle}) {



  return (
    <div className='md:grid col-span-1 '>
       <div>
       <h1 className='text-center text-2xl font-bold my-4'>Cart Container</h1>
        <div className='flex justify-around gap-2'>

            <button onClick={()=>setToggle(true)} className={`btn w-1/3 hover:bg-purple-600 hover:text-white ${toggle ? "bg-purple-500 text-white" : "bg-transparent"}`}>Cart</button>

            <button onClick={()=>setToggle(false)}  className={`btn w-1/3 hover:bg-purple-600 hover:text-white ${!toggle ? "bg-purple-500 text-white" : "bg-transparent"}`}>About</button>
        </div>

        <div className='flex w-full'>
            {toggle ? <Cart /> : <About />}
        </div>
       </div>
    </div>
  )
}

import React, { useContext } from 'react'
import MyContext from '../utils/MyContext'
import SingleProduct from './SingleProduct';

export default function AllProducts() {

const {products} = useContext(MyContext);
// console.log(products);

  return (
    <div className='md:grid col-span-2 border-2 border-blue-500 p-4'>
       <div className='flex flex-wrap justify-center items-center gap-8'>
       {
            products.map((product)=> <SingleProduct product={product} key={product?.id}/>)
        }
       </div>
    </div>
  )
}

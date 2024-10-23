import React, { useEffect, useState } from 'react'
import MyContext from '../utils/MyContext'



export default function MyProvider({children}) {

const [products, setProducts] = useState([]);
const [selectedProducts, setSelectedProducts] = useState([]);

const handleSelectedProduct = (product)=>{
    const check = selectedProducts.find((item)=>{
        if(item.id === product.id){
            return true
        }else{
            return false
        }
    })


    if(check){
        const newSelectedProducts = selectedProducts.filter((item)=>{
            return item.id !== product.id
            })
            setSelectedProducts(newSelectedProducts)

    }else{
        setSelectedProducts([...selectedProducts, product])
    }

}


useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data=>setProducts(data.products));
},[])


// console.log(products);



  return (
    <MyContext.Provider value={{products, setProducts, handleSelectedProduct, selectedProducts}}>
        {children}
    </MyContext.Provider>
  )
}

import React, { useContext } from "react";
import MyContext from "../utils/MyContext";

export default function Cart() {
  const { selectedProducts, handleSelectedProduct } = useContext(MyContext);


  return (
   <div className="w-full p-4 flex flex-col gap-2">
    {
      selectedProducts.map((product)=><div className="w-full bg-purple-100 flex gap-2 justify-between items-center rounded-lg px-4">
        <img className="w-20 h-20" src={product.images} alt="" />
       <div className="flex flex-col gap-2 ">
       <h2>{product.title}</h2>
       <p>Price: {product.price}</p>
       </div>
       <button onClick={()=>handleSelectedProduct(product)} className="btn">❌</button>

      </div>)
    }
   </div>
  );
}

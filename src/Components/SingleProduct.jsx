import React, { useContext } from 'react'
import MyContext from '../utils/MyContext';
import AddCardIcon from '@mui/icons-material/AddCard';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

export default function SingleProduct({product}) {

    const {selectedProducts, handleSelectedProduct} = useContext(MyContext);
    console.log(selectedProducts);

    const isExit = selectedProducts.some((item)=> item.id === product.id)

    const {
        title,
        description,
        price,
        discountPercentage,
        rating,
        stock,
        tags,
        brand,
        images,
        thumbnail,
        warrantyInformation,
        shippingInformation,
        availabilityStatus
    } = product;


  return (
    <div className="card bg-base-100 w-96 mx-auto shadow-xl rounded-lg overflow-hidden p-2 hover:scale-[1.03] transition-all duration-300">
    <figure className="relative h-48 ">
      <img
        src={images}
        alt={title}
        className="w-full h-full object-cover"
      />
      <span className="absolute top-2 left-2 bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded-md">
        {availabilityStatus}
      </span>
      {discountPercentage && (
        <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
          {discountPercentage}% OFF
        </span>
      )}
    </figure>
    <div className="card-body p-4">
      <h2 className="card-title text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
  
      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-col">
          <span className="text-lg font-bold text-green-600">${price}</span>
          <span className="text-xs text-gray-500">Brand: {brand}</span>
        </div>
        <div className="text-sm text-gray-500">
          <span className="block">Rating: {rating} ⭐</span>
          <span className="block">Stock: {stock}</span>
        </div>
      </div>
  
      <div className="card-actions justify-between items-center">
        <div className="text-xs text-gray-500">
          <span>Warranty: {warrantyInformation}</span>
          <span className="block">Shipping: {shippingInformation}</span>
        </div>
        <button onClick={()=>handleSelectedProduct(product)} className={`btn ${isExit ? "bg-red-500   hover:bg-red-600" : "bg-purple-500 hover:bg-purple-600"} text-white`}>{!isExit  ? (<AddCardIcon/>) : (<RemoveShoppingCartIcon/>)}</button>
      </div>
    </div>
  </div>
  
  )
}

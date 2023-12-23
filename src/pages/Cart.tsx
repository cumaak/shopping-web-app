import React, { useState } from 'react'
import { IProduct } from '../types/Types'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { RootState } from '../redux/store'
import { FaTrashAlt } from "react-icons/fa";
import { deleteProduct } from '../redux/features/cartListSlice';

const Cart: React.FC = () => {
    const dispatch = useAppDispatch()
    const cartList: Array<IProduct> = useAppSelector((state: RootState) => state.cartList.products)
    const [amount, setAmount] = useState<number>(1)
    let totalPrice:number = 0 

    cartList.forEach((product) => {
        totalPrice += product.price
    })

  return (
    <main className='px-4 lg:px-40 pb-40 flex flex-col gap-4 relative'>
        <h3 className='font-bold text-lg'>My Cart</h3>
        {cartList.map((product)=>{
            return(
                <div key={product.id} className='flex border rounded-md shadow-md p-1 w-full text-sm'>
                    <a href={`/products/${product.id}`}  className='w-1/3 h-24 border'>
                        <img className='object-contain w-full h-full' src={product.thumbnail} alt={product.title} />
                    </a>
                    <div className='flex flex-col justify-between w-2/3 p-1 pl-3'>
                        <div className='flex justify-between w-full'>
                            <a href={`/products/${product.id}`} className='truncate w-5/6'><span className='font-semibold'>{product.brand}</span><span className='text-gray-600'> {product.title}</span></a>
                            <button onClick={()=>{dispatch(deleteProduct(product))}} className='text-orange-600'><FaTrashAlt size={20}/></button>
                        </div>
                        <div className='flex justify-between items-end'>
                            <div className='flex items-center gap-3 px-1 border rounded-xl'>
                                <span className='text-orange-600 font-bold text-base'>-</span>
                                <span className='text-xs'>{amount}</span>
                                <span className='text-orange-600 font-bold text-base'>+</span>
                            </div>
                            <span className='text-orange-600 font-semibold'>${product.price}.99</span>
                        </div>
                    </div>
                </div>
            )
        })}
        <div className='flex justify-between fixed w-screen left-0 bg-white bottom-[--navbar-height] py-2 px-4 border text-sm'>
            <div className='flex flex-col'>
                <span>Total</span>
                <span className='text-orange-600 font-bold'>${totalPrice}.99</span>
            </div>
            <button className='bg-orange-600 hover:bg-orange-700 border rounded-lg px-12 text-white'>Confirm Cart</button>
        </div>
    </main>
  )
}

export default Cart
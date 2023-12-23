import React from 'react'
import { IProduct } from '../types/Types'
import { useAppSelector } from '../redux/hooks'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

interface IMiniCartListProps {
    isCartOpen: boolean
}

const MiniCartList: React.FC<IMiniCartListProps> = ({ isCartOpen }) => {
    const cartList: Array<IProduct> = useAppSelector((state) => state.cartList.products)
    return (
        <div className={`${isCartOpen == true ? "flex" : "hidden"} flex-col gap-2 z-10 fixed w-screen h-[--canvas-height] bg-white top-0 right-0 px-3 pt-2 pb-40 overflow-scroll`}>
            <div className='flex justify-between items-center font-bold mb-2'>
                <h3 className='text-lg'>My Cart</h3>
                <span><CloseRoundedIcon fontSize='large'/></span>
            </div>
            {cartList?.map((product) => {
                return (
                    <div key={product.id} className='flex border rounded-md'>
                        <div className='w-2/5 h-32 border'>
                            <img className='object-contain w-full h-full' src={product.thumbnail} alt={product.title} />
                        </div>
                        <div className='flex w-3/5'>
                            <h4>{product.title}</h4>
                            <span>Amount: 1</span>
                            <span>{product.price}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default MiniCartList
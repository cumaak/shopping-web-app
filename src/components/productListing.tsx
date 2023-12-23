import React, {useState} from 'react'
import ProductSorting from './productSorting';
import ProductCard from './productCard';
import { IProduct } from '../types/Types';

interface IProductListing{
    products: Array<IProduct>
}
const ProductListing: React.FC<IProductListing> = ({products}) => {
    const [sortKey, setSortKey] = useState<string>('')

    switch (sortKey) {
        case "Lowest Price":
            products.sort((a,b)=> a.price - b.price)
            break;
        case "Highest Price":
            products.sort((a,b)=> b.price - a.price)
            break;
        case "Lowest Rating":
            products.sort((a,b)=> a.rating - b.rating)
            break;
        case "Highest Rating":
            products.sort((a,b)=> b.rating - a.rating)
            break;
        default:
            break;
    }
  return (
    <>
        <ProductSorting sortKey={sortKey} setSortKey={setSortKey}/>
        <section className='grid grid-cols-2 lg:grid-cols-4 gap-y-2 sm:gap-y-3 lg:gap-y-5 sm:gap-1 lg:gap-3'>
            {products.map((product) => {
                return (
                    <ProductCard key={product.id} product={product} />
                )
            })}
        </section>
    </>
  )
}

export default ProductListing
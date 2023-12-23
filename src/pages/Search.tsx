import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IProductsOfCategory } from '../types/Types'
import axios from 'axios'
import ProductListing from '../components/productListing'

const Search: React.FC = () => {
    const {searchValue} = useParams<{searchValue: string}>()
    const [searchProducts, setSearchProducts] = useState<IProductsOfCategory>({products:[], limit:0, skip:0, total:0})

    useEffect(() => {
        const getProducts = async() => {
            try {
                const {data} = await axios.get<IProductsOfCategory>(`https://dummyjson.com/products/search?q=${searchValue}`)
                setSearchProducts(data)
            } catch (error) {
                console.log(error)
            }
        }
        getProducts()
    },[])

  return (
    <main className='px-1.5 lg:px-40 pb-20'>
        <div className='m-1 mb-2 text-sm'>{searchProducts.total} results for "{searchValue}"</div>
        <ProductListing products={searchProducts?.products} />
    </main>
  )
}

export default Search
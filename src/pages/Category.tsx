import {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import { IProductsOfCategory } from '../types/Types'
import axios from 'axios'
import ProductListing from '../components/productListing'

const Category: React.FC = () => {
    const {category} = useParams<{category: string}>()
    const [categoryProducts, setCategoryProducts] = useState<IProductsOfCategory>({products:[], limit:0, skip:0, total:0})

    useEffect(() => {
        const getProducts = async() => {
            try {
                const {data} = await axios.get<IProductsOfCategory>(`https://dummyjson.com/products/category/${category}`)
                setCategoryProducts(data)
            } catch (error) {
                console.log(error)
            }
        }
        getProducts()
    },[])

  return (
    <main className='px-1.5 lg:px-40 pb-20'>
        <ProductListing products={categoryProducts.products}/>
    </main>
  )
}

export default Category
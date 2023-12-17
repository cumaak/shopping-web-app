import {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import { IProductsOfCategory } from '../types/Types'
import axios from 'axios'
import ProductCard from '../components/productCard'

const Category = () => {
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
    <main className='px-1.5 lg:px-40 pt-3 pb-20'>
        <section className='grid grid-cols-2 lg:grid-cols-4 gap-y-2 sm:gap-y-3 lg:gap-y-5 sm:gap-1 lg:gap-3'>
            {categoryProducts.products.map((product) => {
                return (
                    <ProductCard key={product.id} product={product} />
                )
            })}
        </section>
    </main>
  )
}

export default Category
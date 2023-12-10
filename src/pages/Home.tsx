import React, { useState, useEffect } from 'react'
import HighlightsSlider from '../components/highlightsSlider'
import { IProductsOfCategory } from '../types/Types'
import axios from 'axios'
import ProductSlider from '../components/productSlider'

const Home: React.FC = () => {
  const [womensProducts, setWomensProducts] = useState<IProductsOfCategory>({products:[], limit:0, skip:0, total: 0})
  const [mensProducts, setMensProducts] = useState<IProductsOfCategory>({products:[], limit:0, skip:0, total: 0})
  const [skincareProducts, setSkincareProducts] = useState<IProductsOfCategory>({products:[], limit:0, skip:0, total: 0})
  const [topProducts, setTopProducts] = useState<IProductsOfCategory>({products:[], limit:0, skip:0, total: 0})

  const getHighlightProducts = async (category: string, setProducts: React.Dispatch<React.SetStateAction<IProductsOfCategory>>) => {
    try {
      const {data} = await axios.get<IProductsOfCategory>(`https://dummyjson.com/products/category/${category}`)
      setProducts(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getHighlightProducts("womens-dresses", setWomensProducts)
    getHighlightProducts("mens-shirts", setMensProducts)
    getHighlightProducts("skincare", setSkincareProducts)
    getHighlightProducts("tops", setTopProducts)
  }, [])
 
  
  return (
    <main className='px-4 lg:px-40'>
      <HighlightsSlider flashProducts = {womensProducts}/>
      <HighlightsSlider flashProducts = {mensProducts}/>
      <HighlightsSlider flashProducts = {skincareProducts}/>
      <h4 className='m-2 font-semibold'>Top Products</h4>
      <ProductSlider products = {topProducts}/>
    </main>
  )
}

export default Home
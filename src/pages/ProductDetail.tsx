import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useParams } from 'react-router-dom';
import { IProduct } from '../types/Types';

import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

import { Zoom, Navigation, Pagination, FreeMode, Thumbs } from 'swiper/modules';
import SwiperCore from "swiper";

import axios from 'axios';
import { Rating } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ProductDescription from '../components/productDescription';
import ImageSlider from '../components/imageSlider';

const ProductDetail:React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [productDetails, setProductDetails] = useState<IProduct>({id:0, title:"",description:"", price:0, discountPercentage:0, rating:0, stock:0, brand:"", category:"", thumbnail:"", images:[]})
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await axios.get<IProduct>(`https://dummyjson.com/products/${id}`)
        setProductDetails(data)
      } catch (error) {
        console.log(error)
      }
    }
    getProduct()
  }, [])

  return (
    <main className='px-4 xl:px-40 flex flex-col lg:flex-row mb-20 lg:mb-0 mt-2 relative'>
      <ImageSlider product={productDetails} />
      {productDetails.rating==0 ? <section></section> : 
      <ProductDescription product={productDetails} />}
    </main>
  )
}

export default ProductDetail
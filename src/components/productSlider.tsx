import React from 'react'
import { IProductsOfCategory } from '../types/Types';
import Slider from 'react-slick';
import ProductCard from './productCard';

interface IProductSliderProps{
    products: IProductsOfCategory
}
const ProductSlider:React.FC<IProductSliderProps> = ({products}) => {
    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 3.5,
        swipeToSlide: true,
        initialSlide: 0,
        infinite: true,
        variableWidth: true,
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2.5,
              swipeToSlide: true,
              initialSlide: 0,
              infinite: true,
              variableWidth: true,
              adaptiveHeight: true
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2.5,
              swipeToSlide: true,
              initialSlide: 0,
              infinite: true,
              variableWidth: true,
              adaptiveHeight: true
            }
          }
        ]
      };
  return (
    <section>
      <Slider {...settings} className='mb-64'>
        {products.products.map((product) => {
            return (
                <div key={product.id}>
                  <ProductCard product = {product}/>
                </div>
            )
        })}
    </Slider>
    </section>
  )
}

export default ProductSlider
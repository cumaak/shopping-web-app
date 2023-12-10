export interface IProduct {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: Array<string>
}
export interface IProductsOfCategory{
    products: IProduct[],
    limit: number,
    skip: number,
    total: number
  }
export interface ICategories {
    categories : Array<string>
}
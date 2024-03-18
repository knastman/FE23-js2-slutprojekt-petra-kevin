
/*********************************
  Product type
**********************************/
export type ProductObject = {
  id:string;
  title: string,
  description: string
  brand: string,
  price:number, 
  rating:number,
  stock:number,
  thumbnail: string,
  // category: string
  category: 'smartphones' | 'laptops' | 'skincare' | 'fragrances' | 'groceries' | 'home-decoration' | 'furniture' | 'tops' | 'womens-dresses' | 'womens-shoes' | 'mens-shirts' | 'mens-shoes'  | 'womens-shoes' | 'mens-watches' | 'womens-watches' | 'womens-bags' | 'womens-jewellery' | 'sunglasses' | 'automotive'  | 'motorcycle'  | 'lighting' 
}

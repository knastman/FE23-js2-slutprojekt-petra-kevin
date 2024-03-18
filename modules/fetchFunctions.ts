import {} from "./x.ts";

/*********************************
  GET all products
**********************************/
// const baseUrl = '';

export async function getProducts(): Promise<ProductObject[]>{
  const url = '';

  const res = await fetch(url);
  const productsData = await res.json();

  return productsData.products as ProductObject[];
}










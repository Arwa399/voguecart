import product1 from "../../assets/images/products/product 1.png";
import product2 from "../../assets/images/products/product 2.png";
import product3 from "../../assets/images/products/product 3.png";
import product4 from "../../assets/images/products/product 4.png";

interface productData {
    id: number;
    name: string;
    price: number;
    image: string;
  }

  const products: productData[] = [{
    id: 1,
    name: "Product 1",
    price: 19.99,    
    image: product1
},
{
    id: 2,
    name: "Product 2",
    price: 29.99,   
    image: product2
},
{
    id: 3,
    name: "Product 3",
    price: 39.99,
    image: product3
},
{
    id: 4,
    name: "Product 4",
    price: 49.99,
    image: product4
}]

export type { productData };
export default products;
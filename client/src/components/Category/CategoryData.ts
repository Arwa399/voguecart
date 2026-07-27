import womenImage from "../../assets/images/categories/women-category.png";
import menImage from "../../assets/images/categories/men-category.png";
import accessoriesImage from "../../assets/images/categories/accessories-category.png";
import shoesImage from "../../assets/images/categories/shoes-category.png";

interface categoryData {
    id: number,
    name: string,
    image: string,
}

 const categories: categoryData[] = [{
    id: 1,
    name: "Women",
    image: womenImage,
 },
 {
    id: 2,
    name: "Men",
    image: menImage,
 },
 {
    id: 3,
    name: "Accessories",
    image: accessoriesImage,
 },
 {
    id: 4,
    name: "Shoes",
    image: shoesImage,
 }]

 export type { categoryData };
 export default categories;
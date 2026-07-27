import type { categoryData } from "./CategoryData"; 
import "./Category.css";
import { HiArrowRight } from "react-icons/hi2";

type CategoryProps = {
  categories: categoryData[];
};

function Category({ categories }: CategoryProps) {
  return (
    <section className="categoryCards">
        {categories.map((category) => (
            <div key={category.id} className="categoryCard">
                <img src={category.image} alt={category.name} />
                <h3>{category.name}</h3>
                <h4 className="categoryCTA">Shop Now  <HiArrowRight /></h4>
            </div>
        ))}
    </section>
  )
}

export default Category
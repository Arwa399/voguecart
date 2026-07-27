import type { productData } from "./ProductsData";
import "../Category/Category.css";
import "./Product.css";

type ProductsProps = {
  products: productData[];
};

function Product({ products }: ProductsProps) {
  return (
    <>
      <div className="featured__title">
        <h1 className="featured__heading">Featured Products</h1>

        <div className="featured__line"></div>
      </div>
      <div className="categoryCards">
        {products.map((product) => (
          <div key={product.id} className="productCard">
            <div className="productCard__image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="productCard__content">
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Product;

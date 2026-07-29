import Category from "../components/Category/Category";
import categories from "../components/Category/CategoryData";
import Collection from "../components/Collection/Collection";
import Hero from "../components/Hero/Hero";
import Product from "../components/Product/Product";
import products from "../components/Product/ProductsData";

function Home() {
  return (
    <>
    <Hero />
    <Category categories={categories} />
    <Product products={products} />
    <Collection />
    </>

  )
}

export default Home

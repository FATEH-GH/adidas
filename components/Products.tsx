import { products } from "@/constants";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <section id="product" className="my-40 mx-8 max-container">
      <div>
        <h2 className="text-[50px] font-bold mb-4">
          Our <span className="text-orange-500">Popular</span> Products
        </h2>
        <p className="text-gray-400 text-lg max-w-xl mb-12">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value.
        </p>
      </div>
      <div className="mt-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
          {products.map((product, index) => (
            <div key={index} className="">
              <ProductCard
                image={product.image}
                price={product.price}
                name={product.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

import axios from "axios";
import { useEffect, useState } from "react";
import ProductCrad from "./productCrad";
import Loading from "../Shera/Loading/Loading";

const Products = () => {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      setProducts(res.data.products);
      setLoading(false);
    });
  }, []);
  const searchFunction = (search, products) => {
    let allProducts = products;
    if (search) {
      allProducts = allProducts.filter(
        ({ title, price }) =>
          (title && title.toLowerCase().includes(search.toLowerCase())) ||
          (price && price.toString().includes(search))
      );
    }
    return allProducts;
  };
  const allProducts = searchFunction(search, products);
  return (
    <div className="w-11/12 my-5 md:my-10 mx-auto">
      <div
        className="w-4/12 mx-auto flex items-center mb-5 rounded-lg"
        style={{
          background:
            "radial-gradient(circle, rgb(27, 27, 27) 0%, rgb(243, 23, 23) 100%)",
        }}
      >
        <h1 className="text-xl py-2 px-3 text-white">Search</h1>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="search text"
          className="w-[80%] py-2 px-2 bg-transparent border-none outline-none text-white text-lg"
        />
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {allProducts?.map((product) => (
            <ProductCrad key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;

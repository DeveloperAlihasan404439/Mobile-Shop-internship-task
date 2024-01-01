import { Link } from "react-router-dom";

const ProductCrad = ({ product }) => {
  const { thumbnail, title, price, brand, id } = product;
  return (
    <div className=" rounded-lg bg-gray-300">
      <div className="relative">
      <img src={thumbnail} alt="" className="w-full h-[400px] rounded-t-lg" />
      <h1 className="absolute top-1 right-2 text-lg  px-4 py-1 text-white rounded"style={{
          background:
            "radial-gradient(circle,rgb(243, 23, 23) 0%,rgb(27, 27, 27)  100%)",
        }}>${price}</h1>
      </div>
      <div
        className="py-6 px-4 text-white"
        style={{
          background:
            "radial-gradient(circle,rgb(243, 23, 23) 0%,rgb(27, 27, 27)  100%)",
        }}
      >
        <h1 className=" text-xl text-center ">{title}</h1>
        <h1 className=" text-lg "> Brnad :{brand}</h1>
      </div>
      <Link to={`/details/${id}`}>
        <button
          className="py-3 text-lg px-5  w-full text-white rounded-b border-t border-black/60 hover:bg-black"
          style={{
            background:
              "radial-gradient(circle, rgb(243, 23, 23) 0%, rgb(27, 27, 27) 100%)",
          }}
        >
          Show Details
        </button>
      </Link>
    </div>
  );
};

export default ProductCrad;

import axios from "axios";
import { useEffect, useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./ProductDetails.css";
import Swal from "sweetalert2";
import { addToDb } from "../Shera/utility";
const ProductDetails = () => {
  const [details, setDetails] = useState({});
  const [img, setImg] = useState("");
  const { id } = useParams();
  const navigate = useNavigate()
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setDetails(res.data));
  }, [id]);
  const { thumbnail, title, brand, description, price, stock, images } =
    details;
console.log(details);
  const heandelAddCrat = (id) => {
    fetch("https://dummyjson.com/carts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: 15,
        products: [
          {
            id: id,
            quantity: 1,
          },
        ],
      }),
    })
      .then((res) => res.json())
      .then(data => {
        addToDb(id)
        if(data.total>0){
        navigate("/cart");
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfull Create User",
            showConfirmButton: false,
            background: '#471B1B',
            color: "white",
            timer: 2000,
          });
        }
      });
    }
  return (
    <div className="w-11/12 md:w-10/12 mx-auto flex gap-5 mt-7">
      <div className="md:w-[50%]">
        <div id="imagemagnify">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                src: img || thumbnail,
              },
              largeImage: {
                src: img || thumbnail,
                width: 1100,
                height: 1750,
              },
            }}
          />
        </div>
        <div
          className="p-4 flex gap-5 justify-center mt-5 rounded"
          style={{
            background:
              "radial-gradient(circle, rgb(27, 27, 27) 0%, rgb(243, 23, 23) 100%)",
          }}
        >
          {images?.map((image, index) => (
            <img
              onClick={() => setImg(image)}
              key={index}
              src={image}
              alt=""
              className="w-[70px] h-[70px] rounded"
            />
          ))}
        </div>
      </div>
      <div className="md:w-[50%] md:mt-5">
        <h1 className="text-lg md:text-4xl font-bold">{title}</h1>
        <p className="py-3">{description}</p>
        <p className="text-lg font-medium">Brand : {brand}</p>
        <p className="text-lg ">Stock : {stock}</p>
        <p> Price : ${price}</p>
        <div className="flex gap-5 items-center">
          <button
            onClick={() => heandelAddCrat(id)}
            className="py-2 px-5 mt-5 bg-[#07163d] hover:bg-[#01040a] text-white rounded"
          >
            Add to cart{" "}
          </button>
          <Link
            to="/"
            className="py-2 px-5 mt-5 bg-[#07163d] hover:bg-[#01040a] text-white rounded"
          >
            Go to home{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

import { Link } from "react-router-dom";

const ProductCrad = ({product}) => {
    const {thumbnail,title, price,brand,id}=product;
    return (
        <div className=" rounded-lg bg-gray-300">
            <img src={thumbnail} alt="" className="w-full h-[400px] rounded-t-lg"/>
            <div className="mt-4 px-4">
            <h1 className=" text-xl text-center ">{title}</h1>
            <h1 className=" text-lg "> Brnad :{brand}</h1>
            <h1 className=" text-lg  ">Price : ${price}</h1>
            </div>
            <Link to={`/details/${id}`}>
            <button className="py-2 px-5 mt-5 bg-[#07163d] hover:bg-[#01040a] w-full text-white rounded-b">Show Details</button>
            </Link>
        </div>
    );
};

export default ProductCrad;
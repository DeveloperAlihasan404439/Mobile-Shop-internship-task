import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const [details, setDetails] = useState({})
    const {id} = useParams()
    console.log(id);
    useEffect(() => {
        axios
          .get(`https://dummyjson.com/products/${id}`)
          .then((res) => setDetails(res.data));
      }, [id]);
    console.log(details);
    return (
        <div>
            loader daa
        </div>
    );
};

export default ProductDetails;
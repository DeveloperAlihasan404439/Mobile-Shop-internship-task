import axios from "axios";
import { getShoppingCart } from "../utility";
import { useQuery } from "@tanstack/react-query";

const useCrats = () => {
  const localStorageId = getShoppingCart();

  const { data: carts = [], isLoading:loading } = useQuery({
    queryKey: ["isAdmin"],
    queryFn: async () => {
      const res = await axios.get("https://dummyjson.com/products");
      const data = res.data.products;
      return data;
    },
  });
  let crat = [];
  for (let id in localStorageId) {
    const filteredCart = carts.filter((cart) => cart.id === parseInt(id));
    crat = [...crat, ...filteredCart];
  }
  return { crat, loading };
};

export default useCrats;

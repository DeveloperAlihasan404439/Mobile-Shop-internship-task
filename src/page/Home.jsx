import { useContext } from "react";
import { authContext } from "../Shera/Auth/AuthProvider";
import Banner from "../companent/Banner";
import Products from "../companent/Products";

const Home = () => {
    const {user} = useContext(authContext)
    console.log(user);
    return (
        <div>
            <Banner/>
            <Products/>
        </div>
    );
};

export default Home;
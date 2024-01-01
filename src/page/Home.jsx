import Banner from "../companent/Banner";
import Products from "../companent/Products";
import Gallery from "../companent/Gallery";
import Customers from "../companent/Customers";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Products/>
            <Gallery/>
            <Customers/>
        </div>
    );
};

export default Home;
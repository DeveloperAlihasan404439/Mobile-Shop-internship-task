import Banner from "../companent/Banner";
import Products from "../companent/Products";
import Gallery from "../companent/Gallery";
import Customers from "../companent/Customers";
import Acooding from "../companent/Accordion";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Products/>
            <Acooding/>
            <Gallery/>
            <Customers/>
        </div>
    );
};

export default Home;
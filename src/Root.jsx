import { Outlet } from "react-router-dom";
import Navber from "./Shera/Navber";
import Footer from "./Shera/Footer";

const Root = () => {
    return (
        <div>
            <Navber/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;
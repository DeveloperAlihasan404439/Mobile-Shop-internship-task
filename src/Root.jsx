import { Outlet } from "react-router-dom";
import Navber from "./Shera/Navber";

const Root = () => {
    return (
        <div>
            <Navber/>
            <Outlet/>
        </div>
    );
};

export default Root;
import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
// import Navbars from "../components/shared/Navbars";


const Main = () => {
    return (
        <div>
            <Navbar />
            {/* <Navbars></Navbars> */}
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;
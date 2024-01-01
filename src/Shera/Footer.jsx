import { Link } from "react-router-dom";
import { FaInstagram,FaGoogle ,FaFacebook,FaGithub ,FaLinkedinIn  } from "react-icons/fa";
const Footer = () => {
  return (
    <footer
      style={{
        background:
          "radial-gradient(circle, rgb(27, 27, 27) 0%, rgb(243, 23, 23) 100%)",
      }}
    >
      <div className="w-11/12 flex flex-col pt-4 mx-auto md:pt-8 lg:flex-row ">
        <ul className="self-center text-white py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/singup">Sign Up</Link>
          <Link to="/login">Log In</Link>
        </ul>
        <div className="flex flex-col justify-center pt-6 lg:pt-0">
          <div className="flex justify-center text-white text-2xl space-x-4">
          <FaInstagram/>
          <FaLinkedinIn />
          <FaFacebook/>
          <FaGithub />
          <FaGoogle />
          </div>
        </div>
      </div>
        <div className="flex items-center justify-center px-6 pb-12 text-sm">
          <span className="text-white">
            © Copyright 2024. All Rights Reserved.
          </span>
        </div>
    </footer>
  );
};

export default Footer;

import { Link } from "react-router-dom";
import useAuth from "./Auth/useAuth";
import { GiHamburgerMenu } from "react-icons/gi";
import phone from "../assets/images/phone.png"
const Navber = () => {
    const {user,logOut} = useAuth()
    // const { usersdata } = useUsers();
    // const dashboard = usersdata?.find((roll) => roll.email === user?.email);
  
    return (
      <div
        className={`border-b border-[#e92121] shadow sticky top-0 left-0 z-30`}
      style={{background: 'radial-gradient(circle, rgb(27, 27, 27) 0%, rgb(243, 23, 23) 100%)'}}>
        <div className="flex items-center justify-between lg:py-3 text-white md:w-11/12 mx-auto">
          <div className="py-2  flex justify-between items-center w-[90%] lg:w-[30%]  mx-auto flex-row-reverse lg:flex-row">
            <div className="block lg:hidden ">
              <div className="drawer drawer-end">
                <input
                  id="my-drawer-4"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content">
                  <label htmlFor="my-drawer-4" className="drawer-button text-2xl">
                    <GiHamburgerMenu />
                  </label>
                </div>
                <div className="drawer-side mt-16">
                  <label
                    htmlFor="my-drawer-4"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>
                  <ul className="menu p-4 w-[100%] md:w-[60%] flex-col gap-2 min-h-full bg-gradient-to-l from-[#07163d] to-[#3D8AD0] text-white text-sm">
                    {user ? (
                      <>
                        <div className="flex gap-5 items-center justify-center">
                          <div className=" border border-[#01040a] rounded-[50%] w-[40px] h-[40px]">
                            <img
                              src={user.photoURL}
                              title={user.email}
                              className="w-full h-full rounded-[50%]"
                            />
                          </div>
                          <h1 className="text-xl text-medium text-white">
                            {user.displayName}
                          </h1>
                        </div>
  
                        <Link to="/" className="py-1 px-5 bg-[#07163d] text-center hover:bg-[#01040a] rounded ">Home</Link>
                        <Link to="/allProducts" className="py-1 px-5 bg-[#07163d] text-center hover:bg-[#01040a] rounded">All Product</Link>
                        
                        <button
                          onClick={logOut}
                          className="py-1 px-5 bg-[#07163d] hover:bg-[#01040a] rounded"
                        >
                          Log Out
                        </button>
                      </>
                    ) : (
                      <>
                        <Link to="/" className="py-1 px-5 text-center bg-[#07163d] hover:bg-[#01040a] rounded">Home</Link>
                        <Link to="/allProducts" className="py-1 px-5 text-center bg-[#07163d] hover:bg-[#01040a] rounded">All Product</Link>
                        <Link
                          to="/login"
                          className="py-1 px-5 text-center bg-[#07163d] hover:bg-[#01040a] rounded"
                        >
                          Log In
                        </Link>
                        <Link
                          to="/singup"
                          className="py-1 px-5 text-center bg-[#07163d] hover:bg-[#01040a] rounded"
                        >
                          Sign Up
                        </Link>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <img
                src={phone}
                alt=""
                className="w-[50px] h-[50px] rounded-[50%]"
              />
              <h1 className="text-lg md:text-xl font-medium tracking-[3px]">
              Mobile Shop
              </h1>
            </div>
          </div>
          <div className="hidden lg:flex w-[70%]">
            <ul className="w-full flex gap-3 items-center justify-end text-lg">
              <Link to="/">Home</Link>
              <Link to="/allProducts">All Product</Link>
  
              {user ? (
                <>
                <div className=" border border-[#01040a] rounded-[50%] w-[40px] h-[40px]">
                    <img
                      src={user.photoURL}
                      title={user.email}
                      className="w-full h-full rounded-[50%]"
                    />
                  </div>
                  <button
                    onClick={logOut}
                    className="py-1 px-5 bg-[#07163d] hover:bg-[#01040a] rounded"
                  >
                    Log Out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="py-1 px-5 bg-[#141a77] hover:bg-[#2239bb] rounded"
                  >
                    Log In
                  </Link>
                  <Link
                    to="/singup"
                    className="py-1 px-5 rounded bg-[#141a77] hover:bg-[#2239bb]"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  };

export default Navber;
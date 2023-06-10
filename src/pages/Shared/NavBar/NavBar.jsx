import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";
import yogayuq from "../../../assets/hemp-logo_727906-14 (2).png";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.error(error));
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="px-4 py-5 mx-auto bg-white sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-18 lg:px-6">
      <div className="relative flex items-center justify-between">
        <Link to="/" className="inline-flex items-center flex-1">
          <img className="h-10" src={yogayuq} alt="" />
          {/* <span className="ml-2 text-2xl font-bold tracking-wide text-gray-800">
            Logo Name
          </span> */}
        </Link>

        <ul className="items-center hidden space-x-8 lg:flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/instructors"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Instructors
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/classes"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Classes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Dashboard
            </NavLink>
          </li>

          <li>
            {user ? (
              //   <div className="flex">
              //     <button onClick={handleLogout} className="default">
              //       Sign Out
              //     </button>
              //     <div>
              //       <img
              //         className="w-8 h-8 mr-5 rounded-full lg:ml-6"
              //         src={user?.photoURL}
              //         alt=""
              //       />
              //       {user?.displayName && (
              //         <span className="absolute top-0 left-0 p-1 text-xs text-center text-white bg-gray-800 rounded opacity-0 min-w-max hover:opacity-100">
              //           {user.displayName}
              //         </span>
              //       )}
              //     </div>
              //   </div>

              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="p-2 mt-3 rounded shadow menu menu-sm dropdown-content bg-base-100 w-52"
                >
                  <li>
                    <button onClick={handleLogout} className="default">
                      Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Login
              </NavLink>
            )}
          </li>
        </ul>

        {/* Mobile Navbar Section */}
        <div className="lg:hidden">
          {/* Dropdown Open Button */}
          <button
            aria-label="Open Menu"
            title="Open Menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <Bars3BottomRightIcon className="w-5 text-gray-600" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 z-10 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                {/* Logo & Button section */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link to="/" className="inline-flex items-center">
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        Toy Fusion
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className="w-5 text-gray-600" />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link to="/" className="default">
                        Home
                      </Link>
                    </li>
                    <li>
                      <NavLink
                        to="/alltoys"
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }
                      >
                        All Toys
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/mytoys"
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }
                      >
                        My Toys
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/addtoy"
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }
                      >
                        Add a Toy
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/blogs"
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }
                      >
                        Blogs
                      </NavLink>
                    </li>
                    <li>
                      {user ? (
                        <div className="flex">
                          <button onClick={handleLogout} className="default">
                            Sign Out
                          </button>
                          <div className="relative">
                            <img
                              className="w-8 h-8 mr-5 rounded-full lg:ml-6"
                              src={user?.photoURL}
                              alt=""
                            />
                            {user?.displayName && (
                              <span className="absolute top-0 left-0 p-1 text-xs text-center text-white bg-gray-800 rounded opacity-0 min-w-max hover:opacity-100">
                                {user.displayName}
                              </span>
                            )}
                          </div>
                        </div>
                      ) : (
                        <NavLink
                          to="/login"
                          className={({ isActive }) =>
                            isActive ? "active" : "default"
                          }
                        >
                          Login
                        </NavLink>
                      )}
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;

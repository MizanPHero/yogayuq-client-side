import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle} from "@fortawesome/free-brands-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";



const Login = () => {
  const { signIn, googleSignIn, gitHubSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");


  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    setError("");

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
        console.log(loggedUser);
        form.reset();
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
    .then((result) => {
      const loggedInUser = result.user;
      navigate(from, { replace: true });
      console.log(loggedInUser);
    })
    .catch((error) => {
      console.log(error);
    });
  };
  const handleGithubSignIn = () => {
    gitHubSignIn()
    .then((result) => {
      const loggedInUser = result.user;
      navigate(from, { replace: true });
      console.log(loggedInUser);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  return (
    <div>
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
          <div className="p-4 mt-6 mb-0 space-y-8 rounded-lg shadow-lg sm:p-6 lg:p-8">
            <form onSubmit={handleLogin} className="space-y-8 ">
              <p className="text-lg font-medium text-center text-red-600">
                Sign in to your account
              </p>

              <div>
                <input
                  name="email"
                  type="email"
                  className="w-full p-3 text-sm border-b-2 rounded shadow-md focus-visible:outline-none focus:border-red-500 pe-12 border-gray-50"
                  placeholder="Enter email"
                  required
                />
              </div>

              <div>
                <input
                  name="password"
                  type="password"
                  className="w-full p-3 text-sm border-b-2 rounded shadow-md focus-visible:outline-none focus:border-red-500 pe-12 border-gray-50"
                  placeholder="Enter password"
                  required
                />
              </div>

              <button
                type="submit"
                className="block w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-center text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Sign in
              </button>
            </form>

            <div className="flex flex-col gap-6">
              <button
                onClick={handleGoogleSignIn}
                className="flex items-center justify-center w-full py-2 mx-auto font-medium text-white bg-red-500 rounded shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                <FontAwesomeIcon icon={faGoogle} className="mr-2" />
                Sign in with Google
              </button>

              <button
                onClick={handleGithubSignIn}
                className="flex items-center justify-center w-full py-2 mx-auto font-medium text-white bg-gray-800 border border-transparent rounded shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                <svg
                  className="w-6 h-6 mr-2 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 0C5.373 0 0 5.372 0 12c0 5.304 3.438 9.8 8.205 11.385.6.11.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.386-1.334-1.755-1.334-1.755-1.087-.743.083-.727.083-.727 1.203.085 1.838 1.236 1.838 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.334-5.466-5.93 0-1.31.465-2.383 1.235-3.222-.135-.303-.536-1.524.104-3.176 0 0 1.007-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.295-1.23 3.295-1.23.64 1.652.24 2.873.12 3.176.765.84 1.23 1.912 1.23 3.222 0 4.608-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.895-.015 3.28 0 .315.21.69.825.575C20.565 21.797 24 17.303 24 12c0-6.628-5.373-12-12-12"
                  />
                </svg>
                Sign in with GitHub
              </button>
            </div>
            <div>
              <p className="text-sm text-center text-gray-500">
                No account?
                <Link className="underline" to={"/registration"}>
                  Sign up
                </Link>
              </p>
              <p className="text-sm text-center text-red-600">{error}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

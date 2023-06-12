import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (data) => {
    const { email, password } = data;

    setError("");

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
        console.log(loggedUser);
        reset();
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
        console.log(loggedInUser);
        const saveUser = {
          name: loggedInUser.displayName,
          email: loggedInUser.email,
          photo: loggedInUser.photoURL,
          role: "student",
        };

        console.log(loggedInUser);
        fetch("http://127.0.0.1:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then(() => {
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto">
        <div className="p-4 mt-6 mb-0 space-y-6 rounded-lg shadow-lg sm:p-6 lg:p-8">
          <form onSubmit={handleSubmit(handleLogin)} className="space-y-6">
            <p className="text-lg font-medium text-center text-gray-800">
              Sign in to your account
            </p>

            <div>
              <input
                {...register("email", { required: true })}
                type="email"
                className="input-style"
                placeholder="Enter email"
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>

            <div className="relative">
              <input
                {...register("password", { required: true })}
                type={showPassword ? "text" : "password"}
                className="input-style"
                placeholder="Enter password"
              />
              {errors.password && (
                <span className="text-red-600">Password is required</span>
              )}
              <div
                className="absolute transform -translate-y-1/2 cursor-pointer right-2 top-1/2"
                onClick={togglePasswordVisibility}
              >
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye}
                  className="text-gray-500"
                />
              </div>
            </div>

            <button type="submit" className="login-btn">
              Sign in
            </button>
          </form>

          <div className="flex flex-col gap-6">
            <button
              onClick={handleGoogleSignIn}
              className="flex items-center justify-center w-full px-5 py-3 mx-auto mb-2 mr-2 font-medium text-white bg-red-500 rounded shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              <FontAwesomeIcon icon={faGoogle} className="mr-2" />
              Sign in with Google
            </button>
          </div>

          <div className="flex flex-col items-center space-y-1">
            <p className="text-sm text-gray-500">
              No account?
              <Link className="underline" to={"/registration"}>
                Sign up
              </Link>
            </p>
            <p className="text-sm text-red-600">{error}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Registration = () => {
  const [error, setError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { createUser, googleSignIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setError("");
    const { name, email, password, photourl } = data;

    if (password.length < 6 || !/[A-Z]/.test(password) || !/[^A-Za-z0-9]/.test(password)) {
      setError(
        "Your password must be at least 6 characters long, contain at least one capital letter, and one special character."
      );
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        updateUserData(result.user, name, photourl, email);
        console.log(loggedUser);
        reset();
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const updateUserData = (user, name, photoUrl, email) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photoUrl,
    })
    .then(() => {
      const saveUser = { name: name, email: email, photo: photoUrl, role: "student" }
      fetch('http://127.0.0.1:5000/users', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(saveUser)
      })
          .then(res => res.json())
          .then(data => {
              if (data.insertedId) {
                  reset();
                  Swal.fire({
                      position: 'top-end',
                      icon: 'success',
                      title: 'User created successfully.',
                      showConfirmButton: false,
                      timer: 1500
                  });
                  navigate(from, { replace: true } || '/');
              }
          })
  })
      .catch((error) => {
        console.log(error.message);
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

  return (
    <div>
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
          <div className="rounded-lg shadow-lg">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="p-4 mt-6 mb-0 space-y-8 sm:p-6 lg:p-8"
            >
              <p className="text-lg font-medium text-center">
                Create your account
              </p>

              <div>
                <input
                  {...register("name")}
                  type="text"
                  className="input-style"
                  placeholder="Enter name"
                />
              </div>

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

              <div>
                <input
                  {...register("password", { required: true })}
                  type="password"
                  className="input-style"
                  placeholder="Enter password"
                />
                {errors.password && (
                  <span className="text-red-600">Password is required</span>
                )}
              </div>

              <div>
                <input
                  {...register("confirmPassword", { required: true })}
                  type="password"
                  className="input-style"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {errors.confirmPassword && (
                  <span className="text-red-600">Confirm Password is required</span>
                )}
              </div>

              <div>
                <input
                  {...register("photourl")}
                  type="text"
                  className="input-style"
                  placeholder="Enter Photo Url"
                />
              </div>

              <button type="submit" className="login-btn">
                Sign Up
              </button>
            </form>
            <div className="px-8 pt-0 pb-6">
              <div className="flex flex-col gap-6">
                <button
                  onClick={handleGoogleSignIn}
                  className="flex items-center justify-center w-full px-5 py-3 mx-auto mb-2 mr-2 font-medium text-white bg-red-500 rounded shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  <FontAwesomeIcon icon={faGoogle} className="mr-2" />
                  Sign in with Google
                </button>
              </div>
              <p className="text-sm text-center text-gray-500">
                Have an account?
                <Link className="underline" to={"/login"}>
                  Sign in
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

export default Registration;

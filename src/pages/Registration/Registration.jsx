import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Registration = () => {
  const [error, setError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photourl.value;

    setError("");
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)) {
      setError(
        "Your password must be at least 6 characters long and contain both letters and numbers."
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
        updateUserData(result.user, name, photoUrl);
        console.log(loggedUser);
        form.reset();
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const updateUserData = (user, name, photoUrl) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photoUrl,
    })
      .then(() => {
        console.log("Name and Photo URL updated");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
          <form
            onSubmit={handleSignUp}
            action=""
            className="p-4 mt-6 mb-0 space-y-8 rounded-lg shadow-lg sm:p-6 lg:p-8"
          >
            <p className="text-lg font-medium text-center">
              Create your account
            </p>

            <div>
              <input
                name="name"
                type="text"
                className="input-style"
                placeholder="Enter name"
              />
            </div>

            <div>
              <input
                name="email"
                type="email"
                className="input-style"
                placeholder="Enter email"
                required
              />
            </div>

            <div>
              <input
                name="password"
                type="password"
                className="input-style"
                placeholder="Enter password"
                required
              />
            </div>

            <div>
              <input
                name="confirmPassword"
                type="password"
                className="input-style"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <div>
              <input
                name="photourl"
                type="text"
                className="input-style"
                placeholder="Enter Photo Url"
              />
            </div>

            <button type="submit" className="login-btn">
              Sign Up
            </button>

            <p className="text-sm text-center text-gray-500">
              Have an account?
              <Link className="underline" to={"/login"}>
                Sign in
              </Link>
            </p>
            <p className="text-sm text-center text-red-600">{error}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import { doCreateUserWithEmailAndPassword } from "../firebase/auth";
import { useAuth } from "../../../context/authContext";

export default function Signup() {
  const Navigate = useNavigate();
  const {userLoggedIn} = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  //

  const handleValidation = () => {
    if (password !== confirmPassword) {
      toast.error(
        "Password and confirm password should be same.",
        toastOptions
      );
      return false;
    } else if (name.length < 3) {
      toast.error(
        "Username should be greater than 3 characters.",
        toastOptions
      );
      return false;
    } else if (password.length < 8) {
      toast.error(
        "Password should be equal or greater than 8 characters.",
        toastOptions
      );
      return false;
    } else if (email === "") {
      toast.error("Email is required.", toastOptions);
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    try{

        if (handleValidation()) {
            e.preventDefault();
            if(!isRegistering)
            {
              setIsRegistering(true);
             const userCredential =  await doCreateUserWithEmailAndPassword(email, password).then(currentUser);
      
      
              await userCredential.user.updateProfile({
                  displayName: name
                });
            }
          }
    }
    catch(err)
    {
        console.log("registration error");
        setErrorMessage(err.message);

    }
  };

  return (
    
    <div className="font-inter">
      {userLoggedIn && (<Navigate to={'/home'} replace = {true} />)}  


      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign Up </h1>
        <form
          className="w-full max-w-sm mx-auto bg-white "
          action=""
          onSubmit={(event) => handleSubmit(event)}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm  mb-2">
              Name
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="JohnDoe"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm  mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="john@example.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm  mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="********"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirm-password"
              className="block text-gray-700 text-sm mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="********"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-blue-500 transition duration-300"
            onClick={handleSubmit}
          >
            SignUp
          </button>

          <span>
            Already have an account ? <Link to="/login">Login.</Link>
          </span>
        </form>
      </div>
    </div>
  );
}

import React from "react";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa6";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentails,setError } from "../../../features/auth/authSlice";

const Login = () => {
  const query = new URLSearchParams(window.location.search);
  const urlState = query.get("query");
  const [state, setState] = React.useState(urlState || "login");
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url =
        state === "login"
          ? "http://localhost:5000/api/auth/login"
          : "http://localhost:5000/api/auth/signup";

      const response = await axios.post(url, formData);

      console.log(response.data);

      // Store Token in local Storage

      localStorage.setItem("resume-token", response.data.token);
      
      // Store form Data in Redux
      dispatch(
        setCredentails({
          user: response.data.user,
          token: response.data.token,
        }),
      );

      navigate("/app");
    } catch (error) {
      //  setError(error.response.data.message);
      dispatch(setError(error.response.data.message));
      console.log(error.response.data.message)
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <form
          onSubmit={handleSubmit}
          className="sm:w-87.5 w-full text-center border border-gray-300/60 rounded-2xl px-8 bg-white"
        >
          <h1 className="text-gray-900 text-3xl mt-10 font-medium">
            {state === "login" ? "Login" : "Sign up"}
          </h1>
          <p className="text-gray-500 text-sm mt-2">
            Please {state} to continue
          </p>
          {state !== "login" && (
            <div className="flex items-center mt-6 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
              <FaUser size={12} className="text-gray-500" />
              <input
                type="name"
                name="name"
                placeholder="Name"
                className="border-none outline-none ring-0"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          )}
          <div className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <FaEnvelope size={12} className="text-gray-500" />
            <input
              type="email"
              name="email"
              placeholder="Email id"
              className="border-none outline-none ring-0"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <FaLock size={12} className="text-gray-500" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="border-none outline-none ring-0"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mt-4 text-left text-indigo-500">
            <button className="text-sm" type="reset">
              Forget password?
            </button>
          </div>
          <button
            type="submit"
            className="mt-2 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity"
          >
            {state === "login" ? "Login" : "Sign up"}
          </button>
          <p
            onClick={() =>
              setState((prev) => (prev === "login" ? "register" : "login"))
            }
            className="text-gray-500 text-sm mt-3 mb-11"
          >
            {state === "login"
              ? "Don't have an account?"
              : "Already have an account?"}{" "}
            <a href="#" className="text-indigo-500 hover:underline">
              click here
            </a>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;

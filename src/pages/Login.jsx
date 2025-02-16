import React, { useContext, useState, useEffect } from "react";
import loginImg from "../assets/assets_frontend/appointment_img.png";
import Container from "../components/Container";
import { FaFacebook, FaGoogle } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: isAdmin ? "jihad@gmail.com" : "", // Default email for admin
      password: isAdmin ? "111111" : "", // Default password for admin
    },
  });

  useEffect(() => {
    // Reset the form when isAdmin changes
    reset({
      email: isAdmin ? "jihad@gmail.com" : "",
      password: isAdmin ? "111111" : "",
    });
  }, [isAdmin, reset]);

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    const { email, password } = data;
    loginUser(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      toast.success("User Login Success");
      navigate("/");
    });
  };

  return (
    <Container>
      <div className="flex min-h-screen items-center justify-center">
        <div className="flex bg-white rounded-2xl overflow-hidden max-w-4xl">
          {/* Left Form Section */}
          <div className="p-10 w-96 bg-white">
            <h2 className="text-2xl font-bold text-gray-700 text-center mb-4">
              {isAdmin ? "Admin Login" : "User Login"}
            </h2>
            <button
              onClick={() => setIsAdmin(!isAdmin)}
              className="mb-4 px-4 py-2 bg-gray-300 rounded-md w-full hover:bg-gray-400 transition"
            >
              Toggle to {isAdmin ? "User" : "Admin"} Login
            </button>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  className={`border rounded-md w-full outline-none px-3 py-2 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                  })}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  className={`border rounded-md w-full outline-none px-3 py-2 ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  }`}
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  placeholder="Enter your password"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md w-full hover:bg-blue-600 transition-all duration-300"
              >
                {isAdmin ? "Admin Login" : "User Login"}
              </button>
              <p className="text-center text-gray-500 mt-4">
                Don't have an account?{" "}
                <Link to="/register" className="text-blue-500 hover:underline">
                  Register
                </Link>
              </p>

              <div className="flex gap-3 justify-center items-center mt-4">
                <FaGoogle className="text-red-500 cursor-pointer text-2xl hover:scale-110 transition-transform" />
                <FaFacebook className="text-blue-500 cursor-pointer text-2xl hover:scale-110 transition-transform" />
              </div>
            </form>
          </div>

          {/* Right Image Section */}
          <div className="w-96 hidden md:flex justify-center items-center">
            <img
              className="h-96 rounded-xl"
              src={loginImg}
              alt="Login Illustration"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;

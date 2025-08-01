import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import image from "../assets/loginImage.png"; // Adjust as needed
import { Link } from "react-router-dom";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const url = "https://electronic-gertrudis-chanel-debb-bad97784.koyeb.app";
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${url}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      toast.success("Login successful!");
      console.log("User token:", data.accessToken); 
      navigate("/landingpage"); 
    } catch (err) {
      toast.error(err.message || "Invalid email or password");
    } finally {
      setLoading(false);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center login-bg">
      <style>
        {`
          .login-bg {
            background: linear-gradient(135deg, #4f46e5, #06b6d4);
            background-size: 200% 200%;
            animation: gradientShift 6s ease infinite;
          }

          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .login-container {
            display: flex;
            align-items: center;
            background: rgba(255, 255, 255, 0.95);
            border-radius: 1rem;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            padding: 2rem;
            max-width: 1000px;
            width: 90%;
          }

          .form-container {
            flex: 1;
            padding: 1rem 2rem;
          }

          .login-image {
            flex: 1;
            max-width: 100%;
            height: auto;
            padding: 1rem;
          }

          @media (max-width: 768px) {
            .login-container {
              flex-direction: column;
            }

            .login-image {
              order: -1;
              width: 100%;
            }
          }
        `}
      </style>

      <div className="login-container">
        <div className="form-container">
          <h1 className="absolute top-4 right-150 text-3xl capitalize text-white">
            Sky logistics limited
          </h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <h1 className="text-center font-bold text-2xl mb-4">
              Sign into your account
            </h1>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="block border border-gray-300 py-2 px-3 w-full focus:outline-none rounded-lg"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-1"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  value={password}
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="block border border-gray-300 py-2 px-3 w-full focus:outline-none rounded-lg"
                  required
                />
                <div className="absolute top-2 right-3 cursor-pointer text-gray-600">
                  {showPassword ? (
                    <GoEye onClick={() => setShowPassword(false)} />
                  ) : (
                    <GoEyeClosed onClick={() => setShowPassword(true)} />
                  )}
                </div>
              </div>

              <div className="flex justify-between items-center mt-2">
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <label className="text-sm">Remember me</label>
                </div>
                <Link
                  to="/forgotpassword"
                  className="text-blue-600 text-sm hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>

            <button
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              type="submit"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            <div className="text-sm mt-1">
              <span className="text-gray-600">Don't have an account? </span>
              <Link
                to="/register"
                className="text-green-600 hover:underline ml-1"
              >
                Register
              </Link>
            </div>
          </form>
        </div>

        <img className="login-image" src={image} alt="Login illustration" />
      </div>
    </div>
  );
};

export default Login;

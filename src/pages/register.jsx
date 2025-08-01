import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa6";

const Register = () => {
  const url = "https://electronic-gertrudis-chanel-debb-bad97784.koyeb.app";

 
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

 useEffect(() => {
   if (success || error) {
     const timer = setTimeout(() => {
       setError("");
       setSuccess("");
     }, 4000);
     return () => clearTimeout(timer);
   }
 }, [success, error]);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formDataSubmit = {
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      password: formData.password,
    };

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch(`${url}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataSubmit),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || "Registration failed. Please try again.");
        return;
      }
      toast.success("Registration successful! Please log in.");
    } catch (error) {
      setError(
        "An error occurred while creating your account. Please try again."
      );
      return;
    } finally {
      setLoading(false);
    }

    setSuccess("Account created successfully!");
    console.log("Registered:", formData);

    setFormData({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-500 px-6 py-12">
      <div className="absolute top-4">
        <h1 className="text-3xl font-bold text-white">Sky Logistics</h1>
      </div>
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First name
            </label>
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last name
            </label>
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
          >
            {loading ? (
              <FaSpinner className="animate-spin inline-block mr-2" />
            ) : (
              "Register"
            )}
          </button>

          {error && (
            <p className="text-red-600 text-sm text-center mt-2">{error}</p>
          )}
          {success && (
            <p className="text-green-600 text-sm text-center mt-2">{success}</p>
          )}
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;

// pages/Register.js
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Register = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleRegister = (e) => {
//     e.preventDefault();
//     const users = JSON.parse(localStorage.getItem("users") || "[]");
//     users.push({ email, password });
//     localStorage.setItem("users", JSON.stringify(users));
//     navigate("/login");
//   };

//   return (
//     <form onSubmit={handleRegister}>
//       <input
//         type="email"
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email"
//       />
//       <input
//         type="password"
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Password"
//       />
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default Register;

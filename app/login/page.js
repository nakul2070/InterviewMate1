"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleAuth = () => {
    if (isRegistering) {
      if (!email || !username || !password) {
        alert("Please fill in all fields.");
        return;
      }
      localStorage.setItem("email", email);
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      alert("Registration successful! Please log in.");
      setIsRegistering(false);
    } else {
      const storedEmail = localStorage.getItem("email");
      const storedUser = localStorage.getItem("username");
      const storedPass = localStorage.getItem("password");

      if (email === storedEmail && username === storedUser && password === storedPass) {
        localStorage.setItem("isAuthenticated", "true");
        router.push("/dashboard");
      } else {
        alert("Invalid credentials. Please try again.");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
      {/* Animated Card */}
      <div className="p-8 bg-opacity-30 backdrop-blur-lg shadow-2xl rounded-lg w-96 text-center text-gray-200 transition-all duration-500 transform hover:scale-105 border border-gray-700">
        
        {/* Logo / Title */}
        <h1 className="text-4xl font-extrabold mb-6 text-white tracking-widest bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text animate-pulse">
          InterviewMate
        </h1>

        {/* Input Fields */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 bg-transparent border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder-gray-400 transition-all duration-300"
        />

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 mb-4 bg-transparent border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-400 transition-all duration-300"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 bg-transparent border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-purple-400 text-white placeholder-gray-400 transition-all duration-300"
        />

        {/* Auth Button */}
        <button
          onClick={handleAuth}
          className="w-full px-5 py-3 font-semibold text-lg rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-cyan-400/50 focus:ring-2 focus:ring-blue-500"
        >
          {isRegistering ? "Register" : "Login"}
        </button>

        {/* Toggle Text */}
        <p
          className="mt-4 text-sm cursor-pointer text-gray-400 hover:text-cyan-300 transition-all duration-300"
          onClick={() => setIsRegistering(!isRegistering)}
        >
          {isRegistering
            ? "Already have an account? Login"
            : "Don't have an account? Register"}
        </p>
      </div>
    </div>
  );
}

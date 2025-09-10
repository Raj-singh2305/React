import React, { useState, useContext } from "react";
import UserContext from "../../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div className="relative bg-white/20 bg-opacity-20 p-10 rounded-lg max-w-md mx-4 shadow-lg backdrop-filter backdrop-blur-md w-90  ">
      <h2 className="mb-5 text-center text-gray-900 font-bold text-3xl">
        Login
      </h2>

      <form className="grid grid-cols-1 sm:grid-cols-1">
        <input
          className="bg-gray-200 mb-5 p-2 rounded-lg "
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="bg-gray-200 mb-5 p-2 rounded-lg "
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="text-white p-2 w-35 bg-blue-700 hover:bg-blue-800 font-bold rounded-lg text-sm focus:outline-none"
          type="submit"
          onClick={handleSubmit}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;

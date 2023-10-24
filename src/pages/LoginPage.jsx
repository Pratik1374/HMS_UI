import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const role = queryParams.get("role");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate a database operation based on the user's role (replace with actual database interaction)

    // Example database operations:
    if (role === "owner") {
        ///Database operation for login
        const userId = "user1";  //should be replaced by actual id got from database
        navigate(`/${role}/${userId}`);
    } else if (role === "manager") {
      ///Database operation for login
      const userId = "user1";  //should be replaced by actual id got from database
      navigate(`/${role}/${userId}`);
    } else if (role === "receptionist") {
      ///Database operation for login
      const userId = "user1";  //should be replaced by actual id got from database
      navigate(`/${role}/${userId}`);
    } else {
      alert("Error while login");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-title">Login</h2>
        <div className="form-input">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-input">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button className="login-button" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

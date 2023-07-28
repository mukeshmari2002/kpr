import React, { useState } from "react";
import "./register.css";
const RegisterPage = ({ onRegister }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    onRegister(username, password);
   
  };

  return (
    <form>
      <div>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="off" 
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="off" 
        />
      </div>
      <button onClick={handleRegister}>Register</button>
    </form>
  );
};

export default RegisterPage;

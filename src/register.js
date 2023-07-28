import React, { useState } from "react";

const RegisterPage = ({ onRegister }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    // Perform registration logic here, e.g., API call to register the user
    // For simplicity, we'll just call the onRegister callback with the username and password.
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
          required
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button onClick={handleRegister}>Register</button>
    </form>
  );
};

export default RegisterPage;
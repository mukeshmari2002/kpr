import React, { useState } from "react";
import RegisterPage from "./register.js";
import LoginPage from "./login.js";
import HelloWorldPage from "./helloworld.js";

const App = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleRegister = (username, password) => {
    // Handle user registration logic here, e.g., API call to register the user
    setIsRegistered(true);
  };

  const handleLogin = (username, password) => {
    // Handle user login logic here, e.g., API call to authenticate the user
    setIsLoggedIn(true);
    setUsername(username);
  };

  return (
    <div>
      {!isRegistered ? (
        <RegisterPage onRegister={handleRegister} />
      ) : !isLoggedIn ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <HelloWorldPage username={username} />
      )}
    </div>
  );
};

export default App;
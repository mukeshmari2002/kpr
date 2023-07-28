import React, { useState } from "react";
import RegisterPage from "./register";
import LoginPage from "./login";
import HelloWorldPage from "./helloworld";

const App = () => {
  const [isRegistered, setIsRegistered] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState("");
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
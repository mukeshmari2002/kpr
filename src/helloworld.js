import React from "react";

const HelloWorldPage = ({ username }) => {
  return (
    <div>
      <h1>Hello, {username}!</h1>
      <p>Welcome to our website.</p>
    </div>
  );
};

export default HelloWorldPage;
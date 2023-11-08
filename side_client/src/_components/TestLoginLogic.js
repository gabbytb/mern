import React, { useEffect, useState } from "react";
import "./components.css";
// import { users } from "./fakeData";
// import users from ""
import { usePermify } from "@permify/react-role";





function TestLoginLogic() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [users, setUser] = usePermify();

    
  useEffect(() => {
      document.title = "Log in | Samuel Akinola Foundation";
  }, []);
  

  function handleLogin(email, password) {
    const loggedInUser = users.find((user) => user.email === email);

    if (loggedInUser) {
      localStorage.setItem("user", JSON.stringify(loggedInUser));
      localStorage.setItem("name", loggedInUser.name);
      console.log("***** CREATED NEW USER:", loggedInUser);

      // Set the user using setUser
      setUser({
        id: loggedInUser.id,
        roles: [loggedInUser.role],
        permissions: loggedInUser.permission,
      });

      // Redirect the user to another page or perform other actions
      // For example, using window.location.replace(), window.location.reload(), etc.
      window.location.replace("/admin/dashboard");
      
    } else {
      // User not found, display an error message
      alert("Login failed. Please check your email and password.");
    }
  };


  function handleSubmit(e) {
    e.preventDefault();
    handleLogin(email, password);
  }

  return (
    <div className="login-container">
      <img className="logo" src="react-role.png" alt="logo" />
      <h1 className="title">Login Your Account</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default TestLoginLogic;

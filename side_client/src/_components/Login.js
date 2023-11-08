import React, { useState, useEffect } from "react";
import Header from '../header';
import { PermifyProvider } from "@permify/react-role";
import './components.css';
import LoginLogic from "./LoginLogic";
import Dashboard from "./Dashboard";


export default function Login() {
    const [user, setUser] = useState(null);
 
    
    useEffect(() => {
      document.title = "Log in | Samuel Akinola Foundation";
      setUser(JSON.parse(localStorage.getItem("user")));
    }, []);


    return (
      <div className="Login">
        <Header />
        <main>

          <PermifyProvider>
            {
                user === null ? <LoginLogic /> : <Dashboard user={user} />
            }
          </PermifyProvider>

        </main>
      </div>
    );
}
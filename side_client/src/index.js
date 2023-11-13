import React from 'react';
import ReactDOM from 'react-dom/client';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import Blog from './_components/Blog';
import Registration from './_components/Registration';
import Login from './_components/TestLogin';
import Dashboard from './_components/TestDashboard';
import Accountusers from './_components/Accountusers';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <Router>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/user/signup" element={<Registration />}></Route>
        <Route path="/user/login" element={<Login />}></Route>
        <Route path="/admin/dashboard" element={<Dashboard />}></Route>
        <Route path="/admin/users/manage" element={<Accountusers />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
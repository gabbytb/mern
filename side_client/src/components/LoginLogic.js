import React, { useState } from 'react';
import axios from 'axios';
import Header from '../header';









const LoginLogic = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginErrMsg, setLoginErrMsg] = useState(null);


    function handleOnKeyUp(e) {
      console.clear();
      console.log(`COLLECTING USER DETAILS.....\nEmail: ${email} \nPassword: ${password}`);
    }


    const handleLogin = async () => {
      try {
        const response = await axios.post('http://127.0.0.1:8000/user/login', { email, password, });
        const { user, token } = response.data;

        // Store the User objest in local storage
        sessionStorage.setItem("userDetails", JSON.stringify(user));
        sessionStorage.setItem('token', token);        
      
        // Store the token in local storage for future authenticated request
        // localStorage.setItem('token', token);             
  

        // Call the onLogin function passed as a prop with the user information
        onLogin({user});
  
      
        // Redirect the user to the dashboard or perform other actions upon successful login
        console.log('Login successful', user);

        // window.location.reload();
        window.location.replace("http://127.0.0.1:3000/admin/dashboard");

      } catch (error) {
        // Handle login error
        console.error('Login failed:', error.response.data);
        setLoginErrMsg(error.response.data);
      }
    };
  

    return (
      <div className="Registration">
          <Header />
          <main>
              <h1 className="page-title">Log in</h1>

              <div className={`alert loginErrMsg ${loginErrMsg ? 'alert-shown' : 'alert-hidden'}`}>
                  <h2>{loginErrMsg}</h2>
              </div>
              
              <div className='d-flex container justify-content-center'>
                  <div className='row flex-column' style={{width:360}}>      
                      <div id="loginForm" className='loginForm'>
                          
                          <label htmlFor="email">Email
                              <input type="email" className="form-control" placeholder="Enter e-mail" value={email} onChange={(e) => setEmail(e.target.value)} onKeyUp={handleOnKeyUp}/>
                          </label>      
                          
                          <label htmlFor="password">Password
                              <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} onKeyUp={handleOnKeyUp}/>
                          </label>                         

                          <button onClick={handleLogin}>Login</button>

                      </div>
                  </div>
              </div>
          </main>
      </div>
    );
};
  
export default LoginLogic;










// Login.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     try {
//       // Make a POST request to the login endpoint
//       const response = await axios.post('http://localhost:8000/user/login', {
//         email,
//         password,
//       });

//       // Extract the token and user information from the response
//       const { token, user } = response.data;

//       // Store the token in local storage for future authenticated requests
//       localStorage.setItem('token', token);

//       // Redirect or perform other actions upon successful login
//       window.location.replace("http://127.0.0.1:3000/admin/dashboard");
//       console.log('Login successful', user);
//     } catch (error) {
//       // Handle login error
//       console.error('Login failed:', error.response.data);
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <label>Email: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></label>
//       <label>Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /></label>
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };
//
// export default Login;
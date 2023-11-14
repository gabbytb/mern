import React, { useState } from 'react';
import LoginLogic from './LoginLogic';
import Dashboard from './Dashboard';




const Login = () => {

    const [loggedInUser, setLoggedInUser] = useState(null);


    const handleLogin = (user) => {
        setLoggedInUser(user)
    }

    return (
        <div>
            {
                loggedInUser ? (<Dashboard user={loggedInUser} />) : (<LoginLogic onLogin={handleLogin} />)
            }
        </div>
    )

}


export default Login;





// const TestLogin = () => {
  
//     const [loggedInUser, setLoggedInUser] = useState(null);

  
//     const handleLogin = (user) => {
//         setLoggedInUser(user);
//     };


//     return (
//         <div>
//             {
//                 loggedInUser ? (<TestDashboard user={loggedInUser} />) : (<TestLoginLogic onLogin={handleLogin} />)
//             }
//         </div>
//     );
// };





// import React, { useState } from 'react';
// import { PermifyProvider } from "@permify/react-role";
// import TestLoginLogic from './TestLoginLogic';
// import TestDashboard from './TestDashboard';

// const TestLogin = () => {
//     const [loggedInUserId, setLoggedInUserId] = useState(null);

//     const handleLogin = (userId) => {
//         setLoggedInUserId(userId);
//     };

//     return (
//         <PermifyProvider>
//             {
//                 loggedInUserId ? (<TestDashboard userId={loggedInUserId} />) : (<TestLoginLogic onLogin={handleLogin} />)
//             }
//         </PermifyProvider>
//     );
// };

// export default TestLogin;

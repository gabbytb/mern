import React, { useEffect } from 'react';
// import { HasAccess } from "@permify/react-role";








const Dashboard = ({ loggedInUser }) => {


  loggedInUser = JSON.parse(sessionStorage.getItem('userDetails'));
  const userEmail = loggedInUser ? loggedInUser.email : 'User';
  const userUsername = loggedInUser ? loggedInUser.username : 'User';
  const userFirstName = loggedInUser ? loggedInUser.first_name : 'User';
  
  

  function logoutHandler() {
    sessionStorage.clear();
    window.location.replace("http://127.0.0.1:3000/user/login");
  }



  useEffect(() => {
    document.title = "Dashboard | Samuel Akinola Foundation";
  }, []);


  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {userEmail}!</p>
      {/* Add more dashboard content as needed */}
      <p>Welcome, {userUsername}!</p>
      <p>Welcome, {userFirstName}!</p>



      <div className="button-container">
          <div className="button logout-btn" onClick={logoutHandler}>
            <div className='button'>Log out</div>
          </div>
          {/* <HasAccess roles={["admin", "editor"]} permissions="contact-create" renderAuthFailed={null}>
            <div className="button create-btn">Create Contact</div>
          </HasAccess> */}
        </div>
    </div>
  );
};




export default Dashboard;






// import React from 'react';

// const Dashboard = ({ userId }) => {
//   return (
//     <div>
//       <h2>Dashboard</h2>

//       <p>Welcome, User ID: {userId}!</p>
//       {/* Add more dashboard content as needed */}
//     </div>
//   );
// };

// export default Dashboard;
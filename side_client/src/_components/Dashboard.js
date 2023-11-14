import React, { useEffect } from 'react';






const Dashboard = ({ userDetails }) => {

  userDetails = JSON.parse(sessionStorage.getItem('userDetails'));
  const userEmail = userDetails ? userDetails.email : 'User';
  const userUsername = userDetails ? userDetails.username : 'User';
  const userFirstName = userDetails ? userDetails.first_name : 'User';
  
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
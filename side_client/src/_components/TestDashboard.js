import React from 'react';




const Dashboard = ({ user }) => {
  return (
    <div>
      <h2>Dashboard</h2>

      <p>Welcome, {user.email}!</p>
      {/* Add more dashboard content as needed */}
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
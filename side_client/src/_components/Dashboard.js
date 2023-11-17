import React, { useEffect } from 'react';
// import { HasAccess } from "@permify/react-role";
import { Link } from 'react-router-dom';







const Dashboard = ({ loggedInUser }) => {

  loggedInUser = JSON.parse(sessionStorage.getItem('userDetails'));
  const userEmail = loggedInUser ? loggedInUser.email : logoutHandler();
  

  function logoutHandler() {
    sessionStorage.clear();
    window.location.replace("http://127.0.0.1:3000/user/login");
  }


  useEffect(() => {
    document.title = "Create Article > Dashboard | Samuel Akinola Foundation";
  }, []);


  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {userEmail}!</p>
      {/* Add more dashboard content as needed */}
  
      <div className="button-container">
        <div className="button logout-btn" onClick={logoutHandler}>
          <div className='button'>Log out</div>
        </div>
        {/* <HasAccess roles={["admin", "editor"]} permissions="contact-create" renderAuthFailed={null}>
          <div className="button create-btn">Create Contact</div>
        </HasAccess> */}
      </div>


      <div>
        <Link to="http://127.0.0.1:3000/admin/posts/manage/create">Create Article</Link>
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
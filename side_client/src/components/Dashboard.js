import React, { useEffect } from 'react';
import LeftAside from '../assets/dashboard/LeftAside';
import RightSection from '../assets/dashboard/RightSection';









const Dashboard = () => {


    useEffect(() => {
        document.title = "Dashboard | Samuel Akinola Foundation";
    }, []);
  
      
    return (
        <>
        <div className="container-xxl p-0">
            <div className="row m-0">
                <div className="col-sm-4 col-md-3 col-lg-3 p-0">
                    <LeftAside />
                </div>
                <div className="col-sm-8 col-md-9 col-lg-9 p-0">
                    <RightSection />
                </div>
            </div>
        </div>
        </>
    );
}


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
import React from 'react';
import UserList from './UserList';

//defined the userlist in the dashboard
const Dashboard = () => {
  return (
    <div>
      {/* Render the UserList component within the Dashboard */}
      <UserList />
      <div className="text-center ">
        {/* Add a Link to navigate to the Users.js file as a button */}
       
      </div>
    </div>
  );
};

export default Dashboard;

import React from 'react';
//import { DashBoardAdmin } from './admin/DashBoardAdmin';

export const DashBoard = () => {
  return (
    <div className="main-div">
      <div className="online-div">
        <nav className="navbar navbar-light bg-primary">
          {' '}
          Online Grievance management portal Description{' '}
        </nav>
      </div>
      <div className="admin-div">
        <button type="button" className="btn btn-success">
          Admin login
        </button>
      </div>
      <div className="track-div">
        <button type="button" className="btn btn-success">
          Track Grievance Status
        </button>
      </div>
      {'\n'}
    </div>
  );
};

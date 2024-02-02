import React from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="side-nav">
      <div className="header">
        <img src='/images/devine.jpg' alt='' />
        <h1>divine singuke</h1>
      </div>
      <div className="links">
        <Link to="/overview">
          <li className="flex-icons">
            <img src='/icons/dashboard-svgrepo-com.svg' alt='' />
            overview
          </li>
        </Link>
        <Link to="/tasks-page">
          <li className="flex-icons">
            <img src='/icons/task-square-svgrepo-com.svg' alt='' />
            tasks
          </li>
        </Link>
        <Link to="/employees-page">
          <li className="flex-icons">
            <img src='/icons/person-team-svgrepo-com.svg' alt='' />
            employees
          </li>
        </Link>
      </div>
      <div className="log-out">
        <Link to="/">
          <li className="flex-icons">
            <img src='/icons/log-out-symbol-svgrepo-com.svg' alt='' />
            log out
          </li>
        </Link>
      </div>
    </div>
  );
}

export default Sidenav;
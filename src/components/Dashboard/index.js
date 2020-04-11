import React from "react";

import Notification from "./Notification";
import ProjectList from "../CreateProject/ProjectList";

function Dashboard() {
  return (
    <div className="dashboard container">
      <div className="dashboard__left">
        <ProjectList />
      </div>
      <div className="dashboard__right">
        <Notification />
      </div>
    </div>
  );
}

export default Dashboard;

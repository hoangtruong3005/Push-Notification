import React from "react";
import { Card } from "antd";

function ProjectSummary() {
  return (
    <div className="project-summary">
      <Card title="Project title" bordered={false} style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p className="card__content--time">3rd September, 2am</p>
      </Card>
    </div>
  );
}

export default ProjectSummary;

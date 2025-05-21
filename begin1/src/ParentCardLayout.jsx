import React from "react";
import CardLayout from "./CardLayout";

const ParentCardLayout = () => {
  return (
    <div>
      <CardLayout>
        <p>Props of Components</p>
      </CardLayout>
      <CardLayout title="Details">
        <ul>
          <li>Feature A</li>
          <li>Feature B</li>
          <li>Feature C</li>
        </ul>
      </CardLayout>
      <CardLayout title="Contact">
        <p>Email : example@example.com</p>
        <p>Phone : 123-1231-1231</p>
      </CardLayout>
    </div>
  );
};

export default ParentCardLayout;

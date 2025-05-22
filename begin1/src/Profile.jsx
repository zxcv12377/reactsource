import React, { useState } from "react";

const Profile = ({ name }) => {
  console.log("Profile Rendered");

  const [status, setStatus] = useState("Available");

  return (
    <div>
      <h3>Name : {name}</h3>
      <p>Status : 힘 : 5 / 민첩 : 5 / 행운 : 5 /지능 5</p>
      <div>{status}</div>
      <button onClick={() => setStatus("Away")}>Set Away</button>
      <button onClick={() => setStatus("Available")}>Set Available</button>
    </div>
  );
};

export default Profile;

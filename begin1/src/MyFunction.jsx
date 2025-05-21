import React from "react";

const MyFunction = () => {
  const name = "HongGilDong";
  const greeting = (name) => `Hello, ${name}`;
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  };
  return (
    <div>
      <p>{greeting(name)}</p>
      <p>{formatDate(new Date())}</p>
      <p>
        {(() => {
          const hours = new Date().getHours;
          return hours < 12 ? "morning" : "afternoon";
        })()}
      </p>
    </div>
  );
};

export default MyFunction;

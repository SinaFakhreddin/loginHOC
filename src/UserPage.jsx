import React from "react";

const UserPage = ({ userLoggedIn }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "400px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <div>name:{userLoggedIn.name}</div>
        <div>email:{userLoggedIn.email}</div>
        <div>password:{userLoggedIn.password}</div>
      </div>
    </div>
  );
};

export default UserPage;

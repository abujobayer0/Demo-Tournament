import React from "react";

const NotFound = () => {
  return (
    <div
      style={{
        backgroundColor: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <img
        style={{
          maxWidth: "300px",
          height: "auto",
        }}
        src="static/glitch-error-404.jpeg"
        alt=""
      />
    </div>
  );
};

export default NotFound;

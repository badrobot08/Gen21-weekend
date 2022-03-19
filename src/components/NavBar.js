import React from "react";

function NavBar(props) {
    console.log(props)
  return (
    <div>
      <nav
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          background:'grey'
        }}
      >
        <h1>{props.navName}</h1>
        <a href="hhjs">Home</a>
        <a href="hhjs">About</a>
        <a href="hhjs">Contact</a>
        <a href="hhjs">Profile</a>
      </nav>
    </div>
  );
}

export default NavBar;






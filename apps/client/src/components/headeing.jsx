import React from "react";

const Header = ({ title, fontSize, textColor }) => {
  const headerStyle = {
    fontSize: fontSize || "30px",
    color: textColor || "#f1f1f1", 
  };

  return <h1 className="header-one" style={headerStyle}> {title} </h1>;
};

export default Header;

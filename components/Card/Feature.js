import React from "react";
import "./Feature.css";

const Feature = ({ iconName, iconLabel }) => {
  return (
    <div className="feature">
      <div className="feature__circle">
      </div>
      <span className="feature__label">{iconLabel}</span>
    </div>
  );
};

export default Feature;

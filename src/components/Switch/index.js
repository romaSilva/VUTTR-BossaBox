import React from "react";

import "../../styles/switch.css";

const Switch = ({ id }) => {
  return (
    <label className="label" htmlFor={id}>
      <input className="input" type="checkbox" id={id} value={id} />
      <span className="span"></span>
      Search in tags only
    </label>
  );
};

export default Switch;

import React, { useContext } from "react";

import globalContext from "../../store/globalContext";

import "../../styles/switch.css";

const Switch = ({ id }) => {
  const { handleCheckboxChange } = useContext(globalContext);

  return (
    <label className="label" htmlFor={id}>
      <input
        className="input"
        type="checkbox"
        id={id}
        value={id}
        onChange={handleCheckboxChange}
      />
      <span className="span"></span>
      Search in tags only
    </label>
  );
};

export default Switch;

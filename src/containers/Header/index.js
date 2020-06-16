/*a container for the title and toolbar*/

import React, { Fragment } from "react";

import Title from "../../components/Title";
import Toolbar from "../../components/Toolbar";

const Header = () => {
  return (
    <Fragment>
      <Title />
      <Toolbar />
    </Fragment>
  );
};

export default Header;

/*the title with some styles add to it with styled components*/

import React from "react";
import { TitleContainer } from "./style";

const Title = () => {
  return (
    <TitleContainer>
      <h1>VUTTR</h1>
      <h2>Very Useful Tools to Remember</h2>
    </TitleContainer>
  );
};

export default Title;

import React from "react";

import Switch from "../Switch";

import { ToolbarContainer, ButtonContainer } from "./style";
import { AiOutlineSearch } from "react-icons/ai";

const Toolbar = () => {
  return (
    <ToolbarContainer>
      <form>
        <div className="text">
          <AiOutlineSearch />
          <input type="text" placeholder="Digite o que está procurando..." />
        </div>
        <Switch id="tags" />
      </form>
      <ButtonContainer>
        <button>+ Add</button>
      </ButtonContainer>
    </ToolbarContainer>
  );
};

export default Toolbar;

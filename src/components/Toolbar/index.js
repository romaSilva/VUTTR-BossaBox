/*this is the toolbar component, it renders a form containing
 the text search input, the styled switch and the add button*/

import React, { useContext } from "react";

import Switch from "../Switch";

import globalContext from "../../store/globalContext";

import { ToolbarContainer, ButtonContainer } from "./style";
import { AiOutlineSearch } from "react-icons/ai";

const Toolbar = () => {
  const { input, handleAddModalClick, handleInputChange } = useContext(
    globalContext
  );

  return (
    <ToolbarContainer>
      <form>
        <div className="text">
          <AiOutlineSearch style={{ marginLeft: "2px" }} />
          <input
            type="text"
            placeholder="Digite o que está procurando..."
            value={input}
            onChange={handleInputChange}
          />
        </div>
        <Switch id="tags" />
        <ButtonContainer>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleAddModalClick(true);
            }}
          >
            + Add
          </button>
        </ButtonContainer>
      </form>
    </ToolbarContainer>
  );
};

export default Toolbar;

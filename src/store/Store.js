import React, { useReducer } from "react";

import GlobalContext from "./globalContext";
import reducer from "./reducer";
import api from "../services/api";

const Store = (props) => {
  const initialState = {
    tools: [],
    addModal: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const getTools = async () => {
    await api.get("tools").then((response) =>
      dispatch({
        type: "SET_TOOLS",
        payload: response.data,
      })
    );
  };

  const handleAddModalClick = (isOpen) => {
    dispatch({
      type: "SET_ADD_MODAL",
      payload: isOpen,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        tools: state.tools,
        addModal: state.addModal,
        getTools,
        handleAddModalClick,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default Store;

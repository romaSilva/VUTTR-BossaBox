import React, { useReducer } from "react";

import GlobalContext from "./globalContext";
import reducer from "./reducer";
import api from "../services/api";

const Store = (props) => {
  const initialState = {
    tools: [],
    addModal: false,
    removeModal: false,
    input: "",
    checkbox: false,
    selected: undefined,
    alert: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const getSearchTools = async () => {
    await api
      .get(`tools?${state.checkbox ? "tags_like" : "q"}=${state.input}`)
      .then((response) => {
        dispatch({
          type: "SET_TOOLS",
          payload: response.data,
        });
      });
  };

  const handleAddModalClick = (isOpen) => {
    dispatch({
      type: "SET_ADD_MODAL",
      payload: isOpen,
    });
  };

  const handleRemoveModalClick = (isOpen, id) => {
    const selected = state.tools.find((tool) => tool.id === id);

    dispatch({
      type: "SET_SELECTED",
      payload: selected,
    });

    dispatch({
      type: "SET_REMOVE_MODAL",
      payload: isOpen,
    });
  };

  const handleInputChange = (e) => {
    dispatch({
      type: "SET_INPUT",
      payload: e.target.value,
    });
  };

  const handleCheckboxChange = (e) => {
    dispatch({
      type: "SET_CHECKBOX",
      payload: e.target.checked,
    });
  };

  const handleRemove = async () => {
    await api.delete(`tools/${state.selected.id}`);
    getSearchTools();

    dispatch({
      type: "SET_REMOVE_MODAL",
      payload: false,
    });
  };

  const handleSubmit = async (tool) => {
    if (!tool.title || !tool.link || !tool.description || !tool.tags) {
      dispatch({
        type: "SET_ALERT",
        payload: true,
      });
      return false;
    }
    await api.post("tools", tool);

    getSearchTools();
    return true;
  };

  return (
    <GlobalContext.Provider
      value={{
        tools: state.tools,
        addModal: state.addModal,
        removeModal: state.removeModal,
        input: state.input,
        checkbox: state.checkbox,
        selected: state.selected,
        alert: state.alert,
        getSearchTools,
        handleAddModalClick,
        handleRemoveModalClick,
        handleInputChange,
        handleCheckboxChange,
        handleRemove,
        handleSubmit,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default Store;
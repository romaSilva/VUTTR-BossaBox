//all state management is done here
//state variables and functions declared here are available anywhere, with the context API
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

  //api get to update the ui with the current tools
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

  //set if the add modal is opened or not
  const handleAddModalClick = (isOpen) => {
    dispatch({
      type: "SET_ADD_MODAL",
      payload: isOpen,
    });
  };

  //sets the selected card to whatever the user clicked
  //sets if the rm modal is opened or not
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

  //sets the input for whatever was typed
  const handleInputChange = (e) => {
    dispatch({
      type: "SET_INPUT",
      payload: e.target.value,
    });
  };

  //checks if the checbox is checked
  const handleCheckboxChange = (e) => {
    dispatch({
      type: "SET_CHECKBOX",
      payload: e.target.checked,
    });
  };

  //api delete for the selected tool
  const handleRemove = async () => {
    await api.delete(`tools/${state.selected.id}`);
    getSearchTools();

    dispatch({
      type: "SET_REMOVE_MODAL",
      payload: false,
    });
  };

  //handles the form submit for new tools,
  //sets an alert in case of a missing field
  //api post if everything is fine, then updates the ui
  const handleSubmit = async (tool) => {
    if (
      !tool.title ||
      !tool.link ||
      !tool.description ||
      tool.tags.length < 1
    ) {
      dispatch({
        type: "SET_ALERT",
        payload: true,
      });

      setTimeout(() => {
        dispatch({
          type: "SET_ALERT",
          payload: false,
        });
      }, 2000);

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

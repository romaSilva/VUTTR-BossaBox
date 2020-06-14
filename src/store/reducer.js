export default (state, action) => {
  switch (action.type) {
    case "SET_TOOLS":
      return {
        ...state,
        tools: action.payload,
      };
    case "SET_ADD_MODAL":
      return {
        ...state,
        addModal: action.payload,
      };
    case "SET_REMOVE_MODAL":
      return {
        ...state,
        removeModal: action.payload,
      };
    case "SET_INPUT":
      return {
        ...state,
        input: action.payload,
      };
    case "SET_CHECKBOX":
      return {
        ...state,
        checkbox: action.payload,
      };
    case "SET_SELECTED":
      return {
        ...state,
        selected: action.payload,
      };
    case "SET_ALERT":
      return {
        ...state,
        alert: action.payload,
      };
    default:
      return state;
  }
};

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
    default:
      return state;
  }
};

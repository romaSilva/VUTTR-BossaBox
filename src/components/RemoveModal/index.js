/*this is the modal component for removing new tools, 
it accesses the selected tool through the context*/

import React, { useContext } from "react";
import Modal from "react-modal";

import globalContext from "../../store/globalContext";

import { StyledHeader, StyledMain } from "./style";
import { RiCloseLine } from "react-icons/ri";

Modal.setAppElement("#root");

const RemoveModal = () => {
  const {
    selected,
    removeModal,
    handleRemoveModalClick,
    handleRemove,
  } = useContext(globalContext);

  return (
    <Modal
      style={removeModalStyle}
      isOpen={selected && removeModal}
      onRequestClose={() => handleRemoveModalClick(false)}
    >
      <StyledHeader>
        <RiCloseLine
          style={{
            color: "#170C3A",
            fontSize: "23px",
            marginRight: "3px",
          }}
        />
        <h2>Remove Tool</h2>
      </StyledHeader>
      <StyledMain>
        <p>Are you sure you want to remove {selected && selected.title}?</p>
        <div>
          <button onClick={() => handleRemoveModalClick(false)}>Cancel</button>
          <button onClick={handleRemove}>Yes, Remove</button>
        </div>
      </StyledMain>
    </Modal>
  );
};

const removeModalStyle = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, .5)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "450px",
    width: "100%",
  },
};

export default RemoveModal;

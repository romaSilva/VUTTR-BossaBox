import React, { useContext } from "react";
import Modal from "react-modal";

import globalContext from "../../store/globalContext";

import { StyledForm } from "./style";
import { RiAddLine } from "react-icons/ri";
import { StyledHeader } from "./style";

Modal.setAppElement("#root");

const AddModal = () => {
  const { addModal, handleAddModalClick } = useContext(globalContext);

  return (
    <Modal
      style={addModalStyle}
      isOpen={addModal}
      onRequestClose={() => handleAddModalClick(false)}
    >
      <StyledHeader>
        <RiAddLine
          style={{
            color: "#170C3A",
            fontSize: "23px",
            marginRight: "3px",
          }}
        />
        <h2>Add New Tool</h2>
      </StyledHeader>

      <StyledForm>
        <label htmlFor="toolName">Tool Name</label>
        <input
          type="text"
          id="toolName"
          placeholder="Digite o nome da ferramenta..."
        />
        <label htmlFor="toolLink">Tool Link</label>
        <input
          type="text"
          id="toolLink"
          placeholder="Digite o link da ferramenta..."
        />
        <label htmlFor="desc">Tool Description</label>
        <textarea
          name=""
          id="desc"
          cols="30"
          rows="10"
          placeholder="Digite a descrição..."
        ></textarea>
        <label htmlFor="tags">Tags</label>
        <input type="text" id="tags" placeholder="Insira as tags..." />
        <button type="submit">Add Tool</button>
      </StyledForm>
    </Modal>
  );
};

const addModalStyle = {
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
    maxWidth: "600px",
    width: "100%",
  },
};

export default AddModal;

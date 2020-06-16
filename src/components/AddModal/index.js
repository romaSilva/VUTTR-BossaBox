/*this is the modal component for adding new tools, 
it contains the form and, conditional styles and
all the state management for that*/

import React, { useContext, useState } from "react";
import Modal from "react-modal";

import globalContext from "../../store/globalContext";

import { RiAddLine } from "react-icons/ri";
import { StyledHeader, StyledForm, StyledAlert } from "./style";

Modal.setAppElement("#root");

const AddModal = () => {
  const { addModal, alert, handleAddModalClick, handleSubmit } = useContext(
    globalContext
  );

  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

  const closeAndClean = () => {
    handleAddModalClick(false);
    setTitle("");
    setLink("");
    setDescription("");
    setTags("");
  };

  return (
    <Modal
      style={addModalStyle}
      isOpen={addModal}
      onRequestClose={() => {
        closeAndClean();
      }}
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

      <StyledForm
        onSubmit={async (e) => {
          e.preventDefault();
          const response = await handleSubmit({
            title,
            link,
            description,
            tags: tags.split(" ").filter((tag) => tag !== ""),
          });
          if (response) {
            closeAndClean();
          }
        }}
      >
        <label htmlFor="toolName">Tool Name *</label>
        <input
          type="text"
          id="toolName"
          placeholder="Digite o nome da ferramenta..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={alert && !title ? alertStyle : null}
        />
        <StyledAlert>
          <span
            style={
              alert && !title
                ? { visibility: "visible" }
                : { visibility: "hidden" }
            }
          >
            Campo Obrigatório
          </span>
        </StyledAlert>
        <label htmlFor="toolLink">Tool Link *</label>
        <input
          type="text"
          id="toolLink"
          placeholder="Digite o link da ferramenta..."
          value={link}
          onChange={(e) => setLink(e.target.value)}
          style={alert && !link ? alertStyle : null}
        />
        <StyledAlert>
          <span
            style={
              alert && !link
                ? { visibility: "visible" }
                : { visibility: "hidden" }
            }
          >
            Campo Obrigatório
          </span>
        </StyledAlert>
        <label htmlFor="desc">Tool Description *</label>
        <textarea
          name=""
          id="toolDesc"
          cols="30"
          rows="10"
          placeholder="Digite a descrição..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={alert && !description ? alertStyle : null}
        ></textarea>
        <StyledAlert>
          <span
            style={
              alert && !description
                ? { visibility: "visible" }
                : { visibility: "hidden" }
            }
          >
            Campo Obrigatório
          </span>
        </StyledAlert>
        <label htmlFor="tags">Tags *</label>
        <input
          type="text"
          id="tags"
          placeholder="Insira as tags..."
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          style={alert && !tags ? alertStyle : null}
        />
        <StyledAlert>
          <span
            style={
              alert && !tags
                ? { visibility: "visible" }
                : { visibility: "hidden" }
            }
          >
            Campo Obrigatório
          </span>
        </StyledAlert>
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

const alertStyle = {
  backgroundColor: "#FEEFEE",
  borderColor: "#F95E5A",
};

export default AddModal;

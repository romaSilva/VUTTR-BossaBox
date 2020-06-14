import React, { useContext, useState } from "react";
import Modal from "react-modal";

import globalContext from "../../store/globalContext";

import { StyledForm } from "./style";
import { RiAddLine } from "react-icons/ri";
import { StyledHeader } from "./style";

Modal.setAppElement("#root");

const AddModal = () => {
  const { addModal, handleAddModalClick, handleSubmit } = useContext(
    globalContext
  );

  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

  return (
    <Modal
      style={addModalStyle}
      isOpen={addModal}
      onRequestClose={() => {
        handleAddModalClick(false);
        setTitle("");
        setLink("");
        setDescription("");
        setTags("");
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
            handleAddModalClick(false);
            setTitle("");
            setLink("");
            setDescription("");
            setTags("");
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
        />
        <label htmlFor="toolLink">Tool Link *</label>
        <input
          type="text"
          id="toolLink"
          placeholder="Digite o link da ferramenta..."
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <label htmlFor="desc">Tool Description *</label>
        <textarea
          name=""
          id="toolDesc"
          cols="30"
          rows="10"
          placeholder="Digite a descrição..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <label htmlFor="tags">Tags *</label>
        <input
          type="text"
          id="tags"
          placeholder="Insira as tags..."
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
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

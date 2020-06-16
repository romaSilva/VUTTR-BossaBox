/*this is the card component, it receives and displays all
the tool information through a prop, passed in the cards container*/

import React, { useContext } from "react";
import Tag from "../Tag";

import globalContext from "../../store/globalContext";

import { CardContainer, TagsContainer } from "./style";
import { MdClose } from "react-icons/md";

const Card = ({ tool }) => {
  const { handleRemoveModalClick } = useContext(globalContext);

  return (
    <CardContainer>
      <header>
        <a href={tool.link}>{tool.title}</a>
        <div className="close">
          <MdClose
            style={closeIconStyle}
            onClick={() => handleRemoveModalClick(true, tool.id)}
          />
        </div>
      </header>
      <p>{tool.description}</p>
      <TagsContainer>
        {tool.tags.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </TagsContainer>
    </CardContainer>
  );
};

const closeIconStyle = {
  marginRight: "5px",
  cursor: "pointer",
  fontSize: "17px",
  color: "#8f8a9b",
};

export default Card;

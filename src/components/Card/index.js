import React from "react";

import Tag from "../Tag";

import { CardContainer, TagsContainer } from "./style";
import { MdClose } from "react-icons/md";

const Card = ({ tool }) => {
  return (
    <CardContainer>
      <header>
        <a href={tool.link}>{tool.title}</a>
        <div className="close">
          <MdClose style={closeIconStyle} />
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

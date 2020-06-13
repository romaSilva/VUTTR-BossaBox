import React, { useEffect, useContext } from "react";

import Card from "../../components/Card";

import globalContext from "../../store/globalContext";

const Cards = () => {
  const { tools, getTools } = useContext(globalContext);

  useEffect(() => {
    getTools();
  }, []);

  return tools ? tools.map((tool) => <Card key={tool.id} tool={tool} />) : null;
};

export default Cards;

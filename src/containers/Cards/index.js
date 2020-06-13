import React, { useEffect, useContext } from "react";

import Card from "../../components/Card";

import globalContext from "../../store/globalContext";

const Cards = () => {
  const { tools, input, checkbox, getSearchTools } = useContext(globalContext);

  useEffect(() => {
    getSearchTools();
  }, [input, checkbox]);

  return tools ? tools.map((tool) => <Card key={tool.id} tool={tool} />) : null;
};

export default Cards;

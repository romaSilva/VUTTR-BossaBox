import React from "react";

import Store from "./store/Store";
import Header from "./containers/Header";
import Cards from "./containers/Cards";
import AddModal from "./components/AddModal";

import GlobalStyle from "./styles/globalStyle";

function App() {
  return (
    <Store>
      <Header />
      <Cards />
      <AddModal />
      <GlobalStyle />
    </Store>
  );
}

export default App;

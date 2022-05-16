import React from "react";
import BookList from "./BookList";
import BookContextProvider from "../context/BookContext";
import ThemeContextProvider from "../context/ThemeContext";

import Registration from "./auth/Registration";
import Home from "./Home";

export default class App extends React.Component {
  render() {
    return (
      <Home />
    );
  }
}

//<ThemeContextProvider>
  //<BookContextProvider>
   //<BookList />
  //</BookContextProvider>
//</ThemeContextProvider>

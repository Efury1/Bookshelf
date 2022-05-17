import React from "react";
// eslint-disable-next-line
import BookList from "./BookList";
// eslint-disable-next-line
import BookContextProvider from "../context/BookContext";
// eslint-disable-next-line
import ThemeContextProvider from "../context/ThemeContext";
// eslint-disable-next-line
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

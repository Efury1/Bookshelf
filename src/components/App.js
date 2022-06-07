import React from "react";
//import BookList from "./BookList";
//import BookContextProvider from "../context/BookContext";
//import ThemeContextProvider from "../context/ThemeContext";
import Login from "./auth/Login.js";

export default class App extends React.Component {
  render() {
    return (
      <Login/>
      /*<ThemeContextProvider>
        <BookContextProvider>
          <BookList />
        </BookContextProvider>
      </ThemeContextProvider>*/
    );
  }
}

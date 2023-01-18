import React from "react";
import BookList from "./Booklist";
import BookContextProvider from "../Context/ContentContext";
import ThemeContextProvider from "../Context/ThemeContext";
export default class App extends React.Component {
  render() {
    return (
      <ThemeContextProvider>
        <BookContextProvider>
          <BookList />
        </BookContextProvider>
      </ThemeContextProvider>
    );
  }
}

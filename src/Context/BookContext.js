import React from "react";

export const BookContext = React.createContext();

class BookContextProvider extends React.Component {
  state = {
    books: [
      {
        title: "My Year of Rest and Relaxation",
        author: "Ottessa Moshfegh",
        pageNum: 288,
        imageURL:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1597676656i/44279110.jpg",
        topic:
          "Psychological Fiction",
      },
    ],
  };

  render() {
    return (
      <BookContext.Provider value={this.state}>
        {this.props.children}
      </BookContext.Provider>
    );
  }
}

export default BookContextProvider;

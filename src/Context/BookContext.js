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
          "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1597676656l/44279110._SY475_.jpg",
        topic:
          "Psychological Fiction",
      },
      {
        title: "Daisy Jones & The Six",
        author: "Taylor Jenkins Reid",
        pageNum: 288,
        imageURL:
          "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1580255154l/40597810._SY475_.jpg",
        topic:
          "PA gripping novel about the whirlwind rise of an iconic 1970s rock group and their beautiful lead singer, revealing the mystery behind their infamous break up.",
      },
      {
        title: "Boy Parts",
        author: " Eliza Clark",
        pageNum: 288,
        imageURL:
          "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1575377405l/49083140._SY475_.jpg",
        topic:
          "PA gripping novel about the whirlwind rise of an iconic 1970s rock group and their beautiful lead singer, revealing the mystery behind their infamous break up.",
      },
      {
        title: "The New Me",
        author: " Halle Butler ",
        pageNum: 288,
        imageURL:
          "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1579583497l/36342706._SY475_.jpg",
        topic:
          "Thirty-year-old Millie just can't pull it together. Misanthropic and morose, she spends her days killing time at a thankless temp job until she can return home to her empty apartment, where she oscillates wildly between self-recrimination and mild delusion, fixating on all the little ways she might change her life. Then she watches TV until she drops off to sleep, and the cycle begins again.",
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

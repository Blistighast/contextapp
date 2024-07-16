import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { title: "the way of kings", id: 1 },
    { title: "the name of the wind", id: 2 },
    { title: "the lord of the rings", id: 3 },
    { title: "where the wild things are", id: 4 }
  ]);

  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;

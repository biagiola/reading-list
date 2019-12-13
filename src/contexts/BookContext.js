import React, { createContext, useReducer } from 'react';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, [
    { title: 'name of the wind', id: 1 },
    { title: 'the way of kings', id: 2 },
  ]);

  return (
    <BookContext.Provider value={{books, dispatch}}>
      { props.children }
    </BookContext.Provider>
  )
}

export default BookContextProvider;
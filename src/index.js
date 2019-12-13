import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import BookContextProvider from './contexts/BookContext';
import Navbar from './components/Navbar';
import BookList from './components/BookList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <BookContextProvider>
          <Navbar/>
          <BookList/>
        </BookContextProvider>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));


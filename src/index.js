import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import BookContextProvider from './contexts/BookContext';
import Navbar from './components/Navbar';

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
        </BookContextProvider>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

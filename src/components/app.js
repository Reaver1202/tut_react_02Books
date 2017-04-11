import React, { Component } from 'react';

// Container = Component with link to part of Application State from Redux (mapped)
// when state changes, the container will be rerendered
import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}

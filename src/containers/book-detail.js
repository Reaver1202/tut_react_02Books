//
import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {

    // check for first boot up the App. when no state is there
    // state is null
    if (!this.props.book) {
      return <div>Select a book to get started.</div>
    }

    // when book from list was clicked
    return (
      <div>
        <h3> Details for: </h3>
        <div>{this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);

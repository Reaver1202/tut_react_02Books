import React, { Component } from 'react'; // only a single proeprty
// react-reduxt => is the glue between React and Redux
import { connect } from 'react-redux'; // connect funtion
// take selectBook Proeprty from index-actions
import { selectBook } from '../actions/index';
// flow action through all reducers
import { bindActionCreators } from 'redux';

// cares about books
class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// mapping for container using the whole Redux state of the App.
function mapStateToProps(state){
  // whatever is returned will show up as props inside of a BookList
  // state --> array of books and active books
  // target: return will show up as "props" inside of BookList  --> this.props of BookList
  return {
    books: state.books
  };
}

// anything returned from this function will end up as props an the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBookis called, the result should be passed to all of our reducers
  // flows through dispatch function --> through all different reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// export not the Component but the container
// connect takes a function and Component
// => produces a container --> is aware of the state from Redux
// Promote BookList from a component to a container - it needs to know about this new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  // content of application state (Redux)
  books: BooksReducer,
  activeBook: ActiveBook

});

export default rootReducer;

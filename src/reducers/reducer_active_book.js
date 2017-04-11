// State argument is not applicationstate, only the state
// this reducer is responsible for
// when state is undefined --> becomes null
export default function(state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      // return a fresh and clean object
      return action.payload;
  }

  return state;
}

import { RECEIVE_RESULTS, CLEAR_RESULTS, SELECTED_RESULT, CLEAR_SELECTED_RESULT } from '../actions/search-actions';

const initialState = {
  results: [],
  selectedResult: null
}

function search(state = initialState, action) {
  switch(action.type) {
    case RECEIVE_RESULTS:
      return {
        results: action.results
      };
    case CLEAR_RESULTS:
      return initialState;
    case SELECTED_RESULT:
      return {
        results: state.results,
        selectedResult: state.results[action.resultIndex]
      }
    case CLEAR_SELECTED_RESULT:
      return {
        results: state.results,
        selectedResult: null
      }
    default:
      return state;
  }
}

export default search;

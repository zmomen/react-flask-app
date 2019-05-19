const initialState = {};

export default function articleReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ARTICLES":
      return [...action.payload];
    case "SAVE_ARTICLE":
      return [...state]
    default:
      return state;
  }
}

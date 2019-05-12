const initialState = {
  articles: null
};

export default function articleReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ARTICLES":
      return [...state, action.payload];
    default:
      return state;
  }
}

const initialState = {
  articles: null
};

export default function articleReducer(state = initialState, action) {
  console.warn("in reducer", action);
  switch (action.type) {
    case "GET_ARTICLES":
      return [...state, action.payload];
      break;

    default:
      return state;
  }
}

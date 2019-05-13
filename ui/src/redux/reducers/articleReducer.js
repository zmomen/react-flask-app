const initialState = {
  articles: []
};

export default function articleReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ARTICLES":
      console.warn("in reducer?", {
        ...state,
        articles: [action.payload]
      });
      return {
        ...state,
        articles: [action.payload]
      };
    default:
      return state;
  }
}

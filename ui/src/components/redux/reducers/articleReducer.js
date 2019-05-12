const initialState = {
  articles: null
};

export default function articleReducer(state = initialState, action) {
  console.warn("in reducer", action);
  switch (action.type) {
    case "GET_ARTICLES":    
      return [
        ...state, 
        action.payload
      ];
    case "CREATE_ARTICLE":
      return [
        ...state,
        {
          ...action.articles
        }
      ];
    default:
      return state;
  }
}

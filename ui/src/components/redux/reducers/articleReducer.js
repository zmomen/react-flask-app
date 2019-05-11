export default function articleReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_ARTICLE":
      return [
        ...state, 
        { 
          ...action.articles 
        }];
    default:
      return state;
  }
}

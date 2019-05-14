const initialState = {};

export default function articleReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ARTICLES":
      state = action.payload;
      return [
        ...state,
      ];
    default:
      return state;
  }
}

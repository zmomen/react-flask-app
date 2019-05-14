import * as api from "../../utils/api";

export const getArticles = () => {
  return dispatch => {
    api.getArticles().then(articles => {
      dispatch({
        type: "GET_ARTICLES",
        payload: articles.data
      });
    });
  };
};

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

export const saveArticle = data => {
  return dispatch => {
    dispatch({ type: "SAVE_ARTICLE" });
    api.saveArticle(data);
  };
};

import * as api from "../../utils/api";

export const getArticles = (category) => {
  return dispatch => {
    api.getArticles(category).then(articles => {
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

export const deleteArticle = id => {
  return dispatch => {
    dispatch({ type: "DELETE_ARTICLE" });
    api.deleteArticle(id);
  };
};

export const getSavedArticles = () => {
  return dispatch => {
    api.getSavedArticles().then(articles => {
      dispatch({
        type: "GET_SAVED_ARTICLES",
        payload: articles.data
      });
    });
  };
};
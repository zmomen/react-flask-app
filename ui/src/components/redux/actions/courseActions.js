export function getArticles(articles) {
  return { type: "GET_ARTICLES", articles: articles };
}

export const getArticles = () => {
  console.warn("im here");
  return {
    type: "GET_ARTICLES",
  }
};
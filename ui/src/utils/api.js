import axios from "axios";

var instance = axios.create({
  baseURL: "http://localhost:5000"
});

export function getArticles() {
  return instance.get("/news-api");
}

export function saveArticle(data) {
    const article = {
      title: data.title,
      img_url: data.img_url,
      body: data.body,
      created_ts: data.created_ts,
      url: data.url
    };
  return instance.post("/articles/", [article]);
}

export function deleteArticle(id) {
  return instance.delete(`/articles/${id}`);
}

export function getSavedArticles() {
  return instance.get("/articles");
}


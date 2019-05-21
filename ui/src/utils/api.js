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
      img_url: data.img,
      body: data.description,
      created_ts: data.published,
      url: data.url
    };
  return instance.post("/articles", [article]);
}

export function getSavedArticles() {
  return instance.get("/articles");
}


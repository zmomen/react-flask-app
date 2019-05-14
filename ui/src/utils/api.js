import axios from "axios";

var instance = axios.create({
  baseURL: "http://localhost:5000"
});

export function getArticles() {
  return instance.get("/articles");
}

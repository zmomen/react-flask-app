import axios from "axios";

var instance = axios.create({
  baseURL: "http://localhost:5000"
});

export function getArticles() {
  console.warn("exectued getArticles");
  return instance.get("/articles");
}

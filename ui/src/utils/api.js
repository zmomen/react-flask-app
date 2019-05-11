import axios from "axios";

var instance = axios.create({
    baseURL: 'http://localhost:5000',
    timeout: 1000
})


export function getArticles(){
    console.log("function article");
    return instance.get("/articles")
};
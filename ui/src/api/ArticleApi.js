import axios from "axios";

var instance = axios.create({
    baseURL: 'http://localhost:5000',
    timeout: 1000
})


export default function getArticles(){
    console.log("function article");
    return instance.get("/articles")
};
import axios from "axios";

export function getArticles({
    return (dispatch) => {
        return axios.get("localhost:5000/api/articles");
});
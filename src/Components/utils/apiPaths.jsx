import axios from "axios";

export const path = axios.create({
    baseURL: `https://rachels-nc-notes.herokuapp.com/api/`
})

export const getArticles = (params) => {
    return path.get(`/articles`, {params})
    .then(({data}) => {
        return data.articles
    })
}

export const getTopics = () => {
    return path.get(`https://rachels-nc-notes.herokuapp.com/api/topics`)
    .then(({data}) => {
        return data.topics
    })
}

export const getComments = (article_id) => {
    return path.get(`https://rachels-nc-notes.herokuapp.com/api/articles/${article_id}/comments`)
    .then(({data})=>{
        return data.comments
    })
}
import ArticleCard from "./ArticleCard"
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ArticlesContainer = ({selectedTopic, setSelectedTopic, searchParams, setSearchParams}) => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(undefined);



useEffect(()=>{
    setIsLoading(true)

    let topic = "" // setSelectedTopic using dropdown selection?

if (searchParams.get("topic")) {
    setSelectedTopic(searchParams.get("topic"))
}
if (selectedTopic) {
    topic = `?topic=${selectedTopic}`
}
setArticles([])

console.log(selectedTopic)
    axios.get(`https://rachels-nc-notes.herokuapp.com/api/articles${topic}`).then((response)=>{
        setErrorMessage(undefined);
        setIsLoading(false);
        setArticles(response.data.articles)
    }).catch((err)=>{
        setIsLoading(false);
        setErrorMessage("Oops, this isn't working right now. Please try again later")        
    })
}, [selectedTopic]);



return (     
 <section className="articles-container">
    {errorMessage ? <p>{errorMessage}</p> : ""}
    {isLoading ? <p>Loading...</p> : ""}

    

   {articles.map((article)=>{
    return (
<ArticleCard
key={article.article_id }
title={article.title}
topic={article.topic}
date={article.created_at}
comment_count={article.comment_count}
votes={article.votes}
author={article.author}
/>) 
    })}
   
    </section> 
    )
}
 
export default ArticlesContainer;

